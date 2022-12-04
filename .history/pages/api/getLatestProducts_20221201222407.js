import connectDb from "../../middleware/mongoose";
import Product from "../../modals/Product";
async function handler(req, res) {
  const latestProducts = await Product.find().limit(6).sort({ $natural: -1 });
  console.log(latestProducts);
  res.status(200).json({ latestProducts });
}
export default connectDb(handler);
