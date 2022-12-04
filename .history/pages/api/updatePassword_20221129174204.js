import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  const { token, passowrd } = JSON.parse(req.body);
  res.status(200).json({ name: "John Doe" });
}

export default connectDb(handler);
