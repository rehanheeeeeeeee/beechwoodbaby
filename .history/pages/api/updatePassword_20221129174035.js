import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default connectDb(handler);
