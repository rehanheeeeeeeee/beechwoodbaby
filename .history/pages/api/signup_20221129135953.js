// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "../../modals/User";

export default function handler(req, res) {
  if ((req.method = "POST")) {
    const body = JSON.parse(req.body);
    const user = new User({
      req,
    });
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
