// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";

function handler(req, res) {
  const id = JSON.parse(req).id;
  res.status(200).json({ name: "John Doe" });
}
export default connectDb(handler);
