import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";
var CryptoJS = require('crypto-js')
async function handler(req, res) {
  const { token, password } = JSON.parse(req.body);
  const entry = await Forgot.findOne({ token: token });
  if (entry) {
    const decryptedNewPassword = CryptoJS.AES.decrypt(password,process.env.SECRET_KEY)
    await User.findOneAndUpdate({ email: entry.email },{password : decryptedNewPassword});
  } else {
    res.status(200).json({ success: true, message: "Invalid Token" });
  }
}

export default connectDb(handler);
