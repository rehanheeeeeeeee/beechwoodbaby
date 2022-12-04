// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../modals/Product";
import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  if (req.method === "POST") {
    const category = JSON.parse(req.body).category;
    if (category === "All Categories") {
      const products = await Product.find();
    } else {
      const products = await Product.find({ category: category });
    }
    res.status(200).send(products);
  } else {
    res.status(200).json({ success: false, message: "Invalid Request" });
  }
}
export default connectDb(handler);
