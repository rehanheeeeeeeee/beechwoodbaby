import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  if (req.method === "POST") {
    const body = body.parse(req.body);

    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
