import connectDb from "../../middleware/mongoose";
import Order from "../../modals/Order";

async function handler(req, res) {
  const { orderId, status } = JSON.parse(req.body).orderId;
  await Order.findOneAndUpdate(
    { orderId: orderId },
    { deliveryStatus: status }
  );
  res.status(200).json({ name: "John Doe" });
}
export default connectDb(handler);
