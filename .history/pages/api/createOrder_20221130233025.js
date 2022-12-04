import connectDb from "../../middleware/mongoose";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
