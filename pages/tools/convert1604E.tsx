import { NextPage } from "next";
import XLSX from "xlsx-js-style";
import { ChangeEvent } from "react";
import { setFormat, addValues } from "../../lib";

const convert1604E: NextPage = () => {
  function convert(wb: XLSX.WorkBook) {
    // Get worksheets
    const wsHeaders = wb.Sheets["HEADER"];
    const wsDetails = wb.Sheets["DETAILS"];

    // Get header info
    const headerTIN = setFormat(wsHeaders.B3, "000000000");
    const RDO = wsHeaders["B4"].v;
    const year = wsHeaders["B5"].v;
    const isAmended = wsHeaders["B6"].v;
    const noOfSheetsAttached = wsHeaders["B7"].v;
    const birForm = wsHeaders["B10"].v;

    // Create header row
    const headerRow = `H1604E,${headerTIN},0000,12/31/${year}`;

    // Create details rows
    let detailsRows = "";
    const totalsData = {
      ALPHA_TYPE: "C3",
      FTYPE_CODE: "1604E",
      TIN_WA: headerTIN,
      BRANCH_CODE_WA: "0000",
      RETRN_PERIOD: "12/31/" + year,
      ACTUAL_AMT_WTHLD: "0.00",
    };

    const detailsRange = XLSX.utils.decode_range(wsDetails["!ref"] ?? "");
    console.log(detailsRange);

    function getFromExcelData(row: number, col: number) {
      return "" + (wsDetails[XLSX.utils.encode_cell({ r: row, c: col })]?.v ?? '""');
    }

    // For every row in details sheet...
    for (let row = 1; row <= detailsRange.e.r; row++) {
      // Create details row
      const rowData = {
        SCHEDULE_NUM: "D3",
        FTYPE_CODE: "1604E",
        TIN_EMPYR: headerTIN,
        BRANCH_CODE_EMPLYR: "0000",
        RETRN_PERIOD: "12/31/" + year,
        SEQ_NUM: row,
        TIN: getFromExcelData(row, 0),
        BRANCH_CODE: "0000",
        REGISTERED_NAME: getFromExcelData(row, 1),
        LAST_NAME: getFromExcelData(row, 2),
        FIRST_NAME: getFromExcelData(row, 3),
        MIDDLE_NAME: getFromExcelData(row, 4),
        ATC_CODE: getFromExcelData(row, 5),
        INCOME_PAYMENT: parseFloat(getFromExcelData(row, 6)).toFixed(2),
        TAX_RATE: parseFloat(getFromExcelData(row, 7)).toFixed(2),
        ACTUAL_AMT_WITHHELD: parseFloat(getFromExcelData(row, 8)).toFixed(2),
      };

      // Parse rowsData to string
      const line = Object.keys(rowData).reduce((prev, curr, idx) => {
        return (
          (idx === 1 ? rowData[prev as keyof typeof rowData] : prev) +
          "," +
          rowData[curr as keyof typeof rowData]
        );
      });

      detailsRows += line + "\n";

      // Accumulate total taxes withheld
      totalsData.ACTUAL_AMT_WTHLD = addValues(
        totalsData.ACTUAL_AMT_WTHLD,
        rowData.ACTUAL_AMT_WITHHELD
      );
    }

    // Create totals row
    const totalsRow = Object.keys(totalsData).reduce((prev, curr, idx) => {
      return (
        (idx === 1 ? totalsData[prev as keyof typeof totalsData] : prev) +
        "," +
        totalsData[curr as keyof typeof totalsData]
      );
    });

    // Create file
    const file = `${headerRow}\n${detailsRows}${totalsRow}`;
    console.log(file);
    return "";
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    const file = input.files![0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: "array" });
      convert(wb);
    };
    reader.onerror = (ex) => {
      console.log(ex);
    };
    reader.readAsArrayBuffer(file);
    input.value = "";
  }

  return (
    <div className="h-screen flex items-center flex-col">
      <div className="space-y-4 text-center">
        <h1 className="mt-[25vh] text-4xl text-slate-800">1604E Excel Converter</h1>
        <h2 className="text-xl  text-slate-800">
          Convert Excel File to 1604E DAT file for BIR esubmission
        </h2>
        <p className="">Alphalist Version 7.0</p>
      </div>
      <div className="mt-4 w-full border-t border-slate-400"></div>
      <input type="file" name="file" id="convert1604E" className="hidden" onChange={onChange} />
      <label
        className="mt-10 cursor-pointer p-4 rounded-md  bg-green-600 hover:bg-green-700 text-white "
        htmlFor="convert1604E"
      >
        Select Excel File
      </label>
      <p className="mt-6">
        <strong>First time user? </strong>
        <a href="/excel_templates/1604E_Template.xlsx">Get Template</a>
      </p>
      <footer className="text-center mt-3">
        <em>
          Still validate the DAT file using the BIR program to ensure error-free email validation
        </em>
      </footer>
    </div>
  );
};

export default convert1604E;
