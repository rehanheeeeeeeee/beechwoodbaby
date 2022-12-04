import connectDb from "../../middleware/mongoose";
import Order from "../../modals/Order";

async function handler(req, res) {
  const { orderId, status } = JSON.parse(req.body).orderId;
  await Order.findOneAndUpdate({ orderId: orderId }, { deliveryStatus: status })
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Order Delivery Status Successfully Updated",
      });
    })
    .catch((error) => {
      res.status(200).json({
        success: false,
        message: "An Error Occured please try again",
      });
    });
}
export default connectDb(handler);
