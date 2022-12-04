import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";

async function handler(req, res) {
  const {
    updateUserDetails,
    phone,
    username,
    state,
    city,
    district,
    pincode,
    email,
    address2,
    address1,
  } = JSON.parse(req.body);
  const user = await User.findOne({ email: email });
  if (updateUserDetails) {
  }
  res.status(200).json({ name: "John Doe" });
}
export default connectDb(handler);
