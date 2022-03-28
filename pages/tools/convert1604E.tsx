import { NextPage } from "next";

const convert1604E: NextPage = () => {
  function download1604E() {
    const url =
      "https://raw.githubusercontent.com/jalmossesgeld/jalmossesgeld.github.io/master/pages/tools/convert1604E.tsx";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "convert1604E.tsx");
    document.body.appendChild(link);
    link.click();
    link.remove();
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
      <input type="file" name="file" id="convert1604E" className="hidden" />
      <label
        className="mt-10 cursor-pointer p-4 rounded-md  bg-green-600 hover:bg-green-700 text-white "
        htmlFor="convert1604E"
      >
        Select Excel File
      </label>
      <p className="mt-6">
        <strong>First time user? </strong>
        <a href="/excel_templates/1604E_Template.xlsx">
          Get Template
        </a>
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
