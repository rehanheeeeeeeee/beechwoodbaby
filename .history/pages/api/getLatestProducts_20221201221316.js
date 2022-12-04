import connectDb from "../../middleware/mongoose";
import Product from "../../modals/Product";
async function handler(req, res) {
  if (req.qmethod == "POST") {
    const latestProducts = await Product.find().limit(6).sort({ $natural: -1 });
    res.status(200).json(latestProducts);
  } else {
  }
}
export default connectDb;
