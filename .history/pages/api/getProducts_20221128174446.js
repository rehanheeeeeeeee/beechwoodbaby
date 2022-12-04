// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../modals/Product";

async function handler(req, res) {
  if (req.method === "POST") {
    const category = JSON.parse(req.body).category;
    const products = await Product.find({ category: category });
    res.status(200).json({ products });
  } else {
    res.status(200).json({ success: false, message: "Invalid Request" });
  }
}
export default connectDb(handler);
