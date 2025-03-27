// captain.service.js
const captainModel = require("../models/captain.model");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.createCaptain = async ({ firstname, lastname, email, password, vehicle }) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !vehicle ||
    !vehicle.color ||
    !vehicle.plate ||
    !vehicle.capacity ||
    !vehicle.vehicleType
  ) {
    throw new Error("All Fields are Required");
  }

  // Create new captain using the already hashed password
  const captain = await captainModel.create({
    fullname: { firstname, lastname },
    email,
    password, // Already hashed
    vehicle,
  });

  return captain;
};

module.exports.blacklistToken = async (token) => {
  // Create a new blacklist token entry in the database.
  return await BlacklistToken.create({ token });
};
