const express = require("express");
const { body } = require("express-validator");
const controller = require("../Controllers/captain.controller");
const  authMiddleware  = require("../middlewares/auth.middleware");
const router = express.Router();

const validateCaptain = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("fullname.lastname")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("vehicle.color")
    .isLength({ min: 3 })
    .withMessage("Color must be at least 3 characters long"),
  body("vehicle.plate")
    .isLength({ min: 3 })
    .withMessage("Plate must be at least 3 characters long"),
  body("vehicle.capacity")
    .isInt({ min: 1 })
    .withMessage("Capacity must be at least 1"),
  body("vehicle.vehicleType")
    .isIn(["car", "motorcycle", "auto-rickshaw"])
    .withMessage(
      "Vehicle type must be either car, motorcycle, or auto-rickshaw"
    ),
];

router.post("/register", validateCaptain, controller.registerCaptain);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  controller.loginCaptain
);
router.get("/profile", authMiddleware.authCaptain, controller.getProfile);
router.get("/logout", controller.logoutCaptain);

module.exports = router;
