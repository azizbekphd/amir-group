import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from "../../../models"
import { productsDemo } from "../../../demos"

type Data = {
  products: Product[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const all = productsDemo;
    const { page, pageSize } = req.query;

    let p = parseInt(page as string)
    let pS = parseInt(pageSize as string)
    p = isNaN(p) ? 0 : p
    pS = isNaN(pS) ? 0 : pS

    let total = all.length;
    pS = Math.min(Math.max(pS, 10), total);
    p = Math.max(1, Math.min(p, Math.ceil(total / pS)));
    let start = (p - 1) * pS;
    let end = Math.min(p * pS, total);
    
    res.status(200).json({
        products: all.slice(start, end),
        pagination: {
            page: p,
            pageSize: pS,
            total: total,
        },
    })
}
