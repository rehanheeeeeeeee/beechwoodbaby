// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const basket = JSON.parse(req.body);
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
