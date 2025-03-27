const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const captainService = require("../services/captain.service");

module.exports.registerCaptain = async (req, res) => {
  try {
    console.log("Request received to register a captain", req.body);

    // Validate request fields using express-validator
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

    // Create captain using service (note: password is already hashed)
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
