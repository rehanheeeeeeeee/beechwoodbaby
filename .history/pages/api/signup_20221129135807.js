// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if ((req.method = "POST")) {
    const user = JSON.parse(req.body);
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
