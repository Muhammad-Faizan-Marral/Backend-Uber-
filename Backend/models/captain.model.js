const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid Email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate must be at least 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto-rickshaw"],
    },
  },
  location: {
    lat: { type: Number },
    lng: { type: Number },
  },
});

// Static method to hash password
captainSchema.statics.hashPassword = async function (password) {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    console.error("Hashing Error:", error);
    throw error;
  }
};

// Instance method to compare password
captainSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.error("Comparing Error:", error);
    throw error;
  }
};

// Instance method to generate auth token
captainSchema.methods.generateAuthToken = function () {
  try {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
  } catch (error) {
    console.error("Error in GenerateAuthToken:", error);
    throw error;
  }
};

module.exports = mongoose.model("Captain", captainSchema);
