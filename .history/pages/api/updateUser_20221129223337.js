export default function handler(req, res) {
  const {
    updateUserDetails,
    phone,
    username,
    state,
    city,
    district,
    pincode,
    address2,
    address1,
  } = JSON.parse(req.body);
  res.status(200).json({ name: "John Doe" });
}
