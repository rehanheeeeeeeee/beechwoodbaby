import connectDb from "../../middleware/mongoose";
import Order from "../../modals/Order";

async function handler(req, res) {
  const { orderId, status } = JSON.parse(req.body).orderId;
  await Order.findOneAndUpdate(
    { orderId: orderId },
    { deliveryStatus: status }
  ).then(() => {
    res
      .status(200)
      .json({
        success: true,
        message: "Order Delivery Status Successfully Updated",
      });
  });
}
export default connectDb(handler);
