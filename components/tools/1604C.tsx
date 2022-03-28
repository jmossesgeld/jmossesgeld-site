import XLSX from "xlsx-js-style";

export default function convert() {
  const fileToRead = document.getElementById("upload1604C");

  function setFormat(cell: any, newFormat: any) {
    cell.z = newFormat;
    delete cell.w;
    return XLSX.utils.format_cell(cell);
  }

  function addValues(value1: string, value2: string) {
    const sum = parseFloat(value1) + parseFloat(value2);
    return sum.toFixed(2);
  }

  function download(filename: string, text: string) {
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function convert1604C(wb: XLSX.WorkBook) {
    const wsEmployer = wb.Sheets["EMPLOYER"];
    const wsEmployee = wb.Sheets["EMPLOYEES"];
    const employerTIN = setFormat(wsEmployer.B3, "000000000");
    const RDO = wsEmployer["B4"].v;
    const year = wsEmployer["B5"].v;
    const isAmended = wsEmployer["B6"].v;
    const noOfSheetsAttached = wsEmployer["B7"].v;
    const birForm = wsEmployer["B10"].v;

    const employeesRange = XLSX.utils.decode_range(wsEmployee["!ref"] ?? "");

    const headerRow = `H1604C,${employerTIN},0000,12/31/${year},${isAmended},${noOfSheetsAttached},${RDO}`;

    let employeeRows = "";
    const totals: any = {};
    for (let row = 3; row <= employeesRange.e.r; row++) {
      const employee: any = {};
      for (let col = employeesRange.s.c; col <= employeesRange.e.c; col++) {
        const cell = wsEmployee[XLSX.utils.encode_cell({ r: row, c: col })];
        if (cell) {
          const key = XLSX.utils.encode_col(col);
          employee[key] = cell.t === "n" && key !== "A" ? cell.v.toFixed(2) : cell.v;
          if (cell.t === "n") {
            totals[key] = totals[key] ? addValues(totals[key], employee[key]) : employee[key];
          }
        }
      }

      // Create 1604 line
      const line = `D1,1604C,${employerTIN},0000,12/31/${year},${row - 2},${employee.A},0000,"${
        employee.B
      }","${employee.C}","${employee.D}",${employee.E},${addValues(employee.X, employee.AB)},${
        employee.S
      },${employee.T},${employee.U},${employee.V},${employee.W},${employee.X},${employee.Y},${
        employee.Z
      },${employee.AA},${employee.AB},01/01/${year},12/31/${year},${addValues(
        employee.N,
        employee.R
      )},${employee.I},${employee.J},${employee.K},${employee.L},${employee.M},${employee.N},${
        employee.O
      },${employee.P},${employee.Q},${employee.R},${employee.AC},${employee.AC},${employee.AD},${
        employee.AF
      },${employee.AE},${employee.AG},${employee.AH},${employee.AI},${employee.F},${employee.G},${
        employee.H ?? ""
      }\n`;
      employeeRows += line;
    }
    const totalsRow = `C1,1604C,${employerTIN},0000,12/31/${year},${addValues(
      totals.X,
      totals.AB
    )},${totals.S},${totals.T},${totals.U},${totals.V},${totals.W},${totals.X},${totals.Y},${
      totals.Z
    },${totals.AA},${totals.AB},${addValues(totals.N, totals.R)},${totals.I},${totals.J},${
      totals.K
    },${totals.L},${totals.M},${totals.N},${totals.O},${totals.P},${totals.Q},${totals.R},${
      totals.AC
    },${totals.AC},${totals.AD},${totals.AF},${totals.AE},${totals.AG},${totals.AH},${totals.AI}`;

    download(`${employerTIN}00001231${year}1604C.DAT`, `${headerRow}\n${employeeRows}${totalsRow}`);
  }

  function readFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: "array" });
      convert1604C(wb);
    };
    reader.onerror = (ex) => {
      console.log(ex);
    };
    reader.readAsArrayBuffer(file);
  }
  if (fileToRead) {
    fileToRead.addEventListener("change", readFile, false);
  }
}
