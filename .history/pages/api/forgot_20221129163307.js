import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);
    const user = await User.findOne({ email: email });
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
