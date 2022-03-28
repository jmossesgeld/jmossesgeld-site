import XLSX from "xlsx-js-style";

export function setFormat(cell: any, newFormat: any) {
  cell.z = newFormat;
  delete cell.w;
  return XLSX.utils.format_cell(cell);
}

export function addValues(value1: string, value2: string) {
  const sum = parseFloat(value1) + parseFloat(value2);
  return sum.toFixed(2);
}

export function download(filename: string, text: string) {
  const element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export function parseTIN(value: string) {
  let result = value.toString().replace(/[^0-9]/g, "");
  while (result.length !== 9) {
    if (result.length < 9) {
      result = "0" + result;
    } else {
      result = result.slice(0, -1);
    }
  }
  return result;
}
