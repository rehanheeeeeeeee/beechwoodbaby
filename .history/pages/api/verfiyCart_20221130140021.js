// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
async function handler(req, res) {
  if (req.method === "POST") {
    const basket = JSON.parse(req.body);
    for (let i = 0; i < basket.length; i++) {
      const item = basket[i];
      const itemDb = await Product;
    }
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
