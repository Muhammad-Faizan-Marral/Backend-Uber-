const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be 3 characters long."],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be 3 characters long."],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be 5 characters long."],
  },
  password: { type: String, required: true, select: false },
  socketID: { type: String },
});

// ✅ 1️⃣ Hash Password (Before Storing in DB)
userSchema.statics.hashPassword = async function (password) {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    console.error("Error in hashPassword:", error);
    return null;
  }
};

// ✅ 2️⃣ Compare Password (For Login)
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.error("Error in comparePassword:", error);
    return null;
  }
};

// ✅ 3️⃣ Generate JWT Token
userSchema.methods.generateAuthToken = function () {
  try {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  } catch (error) {
    console.error("Error generating auth token:", error);
    return null;
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
