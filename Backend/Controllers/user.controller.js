const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  try {
    console.log("Request Received:", req.body); // Debugging

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // ✅ Correct way to extract data
    const { fullname, email, password } = req.body;
    if (!fullname || !fullname.firstname || !email || !password) {
      console.log("Missing Fields:", { firstname: fullname?.firstname, email, password });
      return res.status(400).json({ error: "All fields are required" });
    }

    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
