import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  const { token, password } = JSON.parse(req.body);
  const entry = await Forgot.findOne({ token: token });
  if (entry) {
  } else {
    res.status(200).json({ success: true, message: "Invalid Token" });
  }
}

export default connectDb(handler);
