// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ success: true, message: "" });
  } else {
    res.status(200).json({ success: false, message: "" });
  }
}
