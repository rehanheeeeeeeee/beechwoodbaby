import connectDb from "../../middleware/mongoose";
import Order from "../../modals/Order";

async function handler(req, res) {
  if (req.method === "POST") {
    const orderDetails = body.parse(req.body);
    const newOrder = new Order(orderDetails);
    newOrder.save();
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
