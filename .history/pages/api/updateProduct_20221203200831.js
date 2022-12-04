// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Product from "../../modals/Product";
async function handler(req, res) {
  if (req.method === "POST") {
    const updatedProduct = JOSN.parse(req.body);
    await Product.findOneAndUpdate(
      { _id: updatedProduct.id },
      {
        title: updatedProduct.title,
        category: updatedProduct.category,
        size: updatedProduct.size,
        desc: updatedProduct.desc,
        color: updatedProduct.color,
        price: updatedProduct.price,
      }
    );
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
