// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";
import Product from "../../modals/Product";

async function handler(req, res) {
  const product = JSON.parse(req.body);
  const newProduct = new Product({
    ...product,
  });
  res.status(200).json({ name: "John Doe" });
}

export default connectDb(handler);
