import connectDb from "../../middleware/mongoose";
async function handler(req, res) {
  if (req.qmethod == "POST") {
    const latestProducts = await res.status(200).json({ name: "John Doe" });
  } else {
  }
}
export default connectDb;
