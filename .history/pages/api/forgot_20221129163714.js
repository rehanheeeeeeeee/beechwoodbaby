import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";
const { v4: uuidv4 } = require("uuid");

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);
    const user = await User.findOne({ email: email });
    if (user) {
      const token = uuidv4();
    } else {
      res.status(200).json({ success: false, message: "User Not Found" });
    }
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
