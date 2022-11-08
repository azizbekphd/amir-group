
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from "../../../models"
import { productsDemo } from "../../../demos"

type Data = {
  product: Product | undefined;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({
        product: productsDemo.find((e) => e.id === req.query.id),
    })
}
