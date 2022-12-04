const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, reuqired: true },
    email: { type: String, reuqired: true, unique: true },
    password: { type: String, required: true },
    phone:{type:String}
    address1: { type: String },
    address2: { type: String },
    district: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
