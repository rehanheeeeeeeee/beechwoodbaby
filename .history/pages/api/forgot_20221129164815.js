import connectDb from "../../middleware/mongoose";
import Forgot from "../../modals/Forgot";
import User from "../../modals/User";
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);
    const user = await User.findOne({ email: email });
    if (user) {
      const token = uuidv4();
      const mailTransporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "rehantosif4@gmail.com",
          pass: process.env.PASSWORD,
        },
        secure: true,
      });

      let details = {
        from: "rehantosif4@gmail.com",
        to: email,
        subject: "Password Reset Email From Codewear",
        html: `<p>Hi ${user.username} </p>,
        <br/>
        <p>There was a request to change your password!</p>
        <br/>
        <p>If you did not make this request then please ignore this email.</p>
        <br/>
        <span>Otherwise, please click this link to change your password:</span> <a href=${`${process.env.NEXT_PUBLIC_HOST}/forgotpassword?token=${token}`}>${`${process.env.NEXT_PUBLIC_HOST}/forgotpassword?token=${token}`}</a>
        <br/>
        <p>Thank you..</p>`,
      };

      const forgot = new Forgot({
        email,
        token,
      });
      forgot
        .save()
        .then(() => {
          res.status(200).json({
            success: true,
            message:
              "Instructions to Reset Your Password has been sent to your Email",
          });
        })
        .catch((error) => {
          res.status(200).json({
            success: false,
            message: error.message,
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
