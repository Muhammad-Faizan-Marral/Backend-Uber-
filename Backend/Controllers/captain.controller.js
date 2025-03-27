// captain.controller.js
const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service"); // Import the service

module.exports.registerCaptain = async (req, res) => {
  try {
    console.log("Request received to register a captain", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain Already Exist" });
    }

    if (
      !fullname ||
      !fullname.firstname ||
      !email ||
      !password ||
      !vehicle ||
      !vehicle.color ||
      !vehicle.plate ||
      !vehicle.capacity ||
      !vehicle.vehicleType
    ) {
      console.log("Missing Fields:", {
        firstname: fullname?.firstname,
        email,
        password,
        vehicle,
      });
      return res.status(400).json({ error: "All fields are required" });
    }

    // Hash password using static method from model
    const hashedPassword = await captainModel.hashPassword(password);

    // Create captain using the service
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
      },
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });
  } catch (error) {
    console.error("Error in registerCaptain:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.loginCaptain = async (req, res) => {
  try {
    console.log("Request received to login a captain", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const isPasswordValid = await captain.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const token = captain.generateAuthToken();
    res.cookie("token", token);

    captain.password = undefined;

    res.status(200).json({ token, captain });
  } catch (error) {
    console.error("Error in loginCaptain:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getProfile = async (req, res) => {
  try {
    console.log("Request received to get captain profile", req.captain);
    res.status(200).json(req.captain);
  } catch (error) {
    console.error("Error in getProfile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.logoutCaptain = async (req, res) => {
  try {
    console.log("Request received to logout a captain", req.captain);

    const token = req.cookies.token;
    // Use the service to blacklist the token
    await captainService.blacklistToken(token);

    res.clearCookie("token");
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.error("Error in logoutCaptain:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
