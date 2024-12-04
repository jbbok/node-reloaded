import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  socialOnly: {
    type: Boolean,
    default: false,
  },
  avatarUrl: String,
  username: { type: String, require: true, unique: true },
  password: { type: String },
  name: { type: String, require: true },
  location: { type: String },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);

export default User;
