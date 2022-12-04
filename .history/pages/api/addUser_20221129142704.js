// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "../../modals/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

async function handler(req, res) {
  if ((req.method = "POST")) {
    CryptoJS.AES.encrypt(body.password, "secret key 123").toString();
    const body = JSON.parse(req.body);
    const user = new User({
      username: body.username,
      password: CryptoJS.AES.encrypt(
        body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    await user
      .save()
      .then(() => {
        res.status(200).json({
          success: true,
          message: "You Account has been Successfully Created",
        });
      })
      .catch((error) =>
        res.status(200).json({
          success: false,
          message: "An Error Occured Please Try Again Later",
        })
      );
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
