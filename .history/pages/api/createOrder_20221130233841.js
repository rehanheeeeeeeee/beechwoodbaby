import connectDb from "../../middleware/mongoose";
import Order from "../../modals/Order";

async function handler(req, res) {
  if (req.method === "POST") {
    const orderDetails = body.parse(req.body);
    const newOrder = new Order(orderDetails);
    newOrder.save().then(() => {
      res
        .status(200)
        .json({ success: true, message: "Order Placed Successfully" });
    });
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
