// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result = await axios.get('https://wine-back-test.herokuapp.com/products?page=1&limit=10');
  const json = await result.data;
  res.status(200).json({ wines: json.items });
}
