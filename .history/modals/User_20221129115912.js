const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username:{type:String,reuqired:true},
    email:{type:String,reuqired:true,unique:true}
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
