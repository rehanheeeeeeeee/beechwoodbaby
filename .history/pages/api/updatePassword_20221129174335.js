import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  const { token, password } = JSON.parse(req.body);
  const entry = await Forgot.findOne({ token: token });
  res.status(200).json({ name: "John Doe" });
}

export default connectDb(handler);
