import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";

async function handler(req, res) {
  const { token, password } = JSON.parse(req.body);
  const entry = await Forgot.findOne({ token: token });
  if (entry) {
    const user = await User.findOne({ email: entry.email });
  } else {
    res.status(200).json({ success: true, message: "Invalid Token" });
  }
}

export default connectDb(handler);
