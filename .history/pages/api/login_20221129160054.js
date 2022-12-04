import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = JSON.parse(req.body);
    const user = await User.findOne({ email: email });
    if (user) {
    } else {
      res
        .status(200)
        .json({
          success: false,
          message: "A User Doesnt Exist With the Given Email",
        });
    }
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
}

export default connectDb(handler);
