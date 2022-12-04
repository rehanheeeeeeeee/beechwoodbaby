export default function handler(req, res) {
  if (req.qmethod == "POST") {
    res.status(200).json({ name: "John Doe" });
  } else {
  }
}
