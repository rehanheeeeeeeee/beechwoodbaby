import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(200).json({ success: false, message: "Invalid Methd" });
  }
}
export default connectDb(handler);
