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
