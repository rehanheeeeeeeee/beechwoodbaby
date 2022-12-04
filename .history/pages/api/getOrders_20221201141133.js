// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json();
  } else {
    res.status(200).json({ success:false, message:'Invalid Method' });
  }
}
export default connectDb(handler);
