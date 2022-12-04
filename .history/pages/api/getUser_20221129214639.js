export default function handler(req, res) {
  const { email } = JSON.parse(req.body);
  res.status(200).json({ name: "John Doe" });
}
