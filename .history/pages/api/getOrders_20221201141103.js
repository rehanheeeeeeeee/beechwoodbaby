// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
export default connectDb(handler);
