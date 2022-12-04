import connectDb from "../../middleware/mongoose";
import Order from "../../modals/Order";

async function handler(req, res) {
  if (req.method === "POST") {
    const orderDetails = JSON.parse(req.body);
    const newOrder = new Order(orderDetails);
    newOrder
      .save()
      .then(() => {
        res
          .status(200)
          .json({ success: true, message: "Order Placed Successfully" });
      })
      .catch((error) => {
        res
          .status(200)
          .json({
            success: false,
            message: "An Error Occured While Placing the Order",
          });
      });
  } else {
    res.status(200).json({ success: false, message: "Invalid Method" });
  }
}
export default connectDb(handler);
