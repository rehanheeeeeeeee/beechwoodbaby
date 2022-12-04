// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "../../modals/User";

export default function handler(req, res) {
  if ((req.method = "POST")) {
    const body = JSON.parse(req.body);
    const user = new User({
      ...req,
    });
    user
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
