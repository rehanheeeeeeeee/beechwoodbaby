// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";
import Product from "../../modals/Product";

async function handler(req, res) {
  if (req.method === "POST") {
    const product = JSON.parse(req.body);
    const newProduct = new Product({
      ...product,
    });
    newProduct.save();
    res.status(200).json({ success: true });
  }
}

export default connectDb(handler);
