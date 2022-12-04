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
  if (updateUserDetails) {
    await User.findOneAndUpdate(
      { email: email },
      { phone: phone, username: username }
    )
      .then(() => {
        res
          .status(200)
          .json({
            success: true,
            message: "User Details Updated Successfully",
          });
      })
      .catch((error) => {
        res.status(200).json({ success: false, message: "'" });
      });
  }
}
export default connectDb(handler);
