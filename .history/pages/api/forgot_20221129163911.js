import connectDb from "../../middleware/mongoose";
import Forgot from "../../modals/Forgot";
import User from "../../modals/User";
const { v4: uuidv4 } = require("uuid");

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);
    const user = await User.findOne({ email: email });
    if (user) {
      const token = uuidv4();
      const forgot = new Forgot({
        email,
        token,
      });
      forgot.save().then(() => {
        res
          .status(200)
          .json({
            success: true,
            message:
              "Instructions to Reset Your Password has been sent to your Email",
          })
          .catch((error) => {
            res.status(200).json({
              success: true,
              message:
                "Instructions to Reset Your Password has been sent to your Email",
            });
          });
      });
    } else {
      res.status(200).json({ success: false, message: "User Not Found" });
    }
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
