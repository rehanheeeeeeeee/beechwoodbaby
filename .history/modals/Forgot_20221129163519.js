const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, reuqired: true, unique: true },
    token: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
