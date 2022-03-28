// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const { readFileSync } = require('fs')
const { join } = require('path')
const file = readFileSync(join(__dirname, '_files/excel_templates', '1604E_TEMPLATE.xlsm'), 'utf8')

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).send(file)
}
