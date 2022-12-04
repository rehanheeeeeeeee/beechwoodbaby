import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = JSON.parse(req.body);
    const user = await User.find;
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
}

export default connectDb(handler);
