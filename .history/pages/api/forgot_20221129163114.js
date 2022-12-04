import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  if (req.method === "POST") {
  }
  res.status(200).json({ name: "John Doe" });
}
export default connectDb(handler);
