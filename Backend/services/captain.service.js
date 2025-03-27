const Captain = require("../models/captain.model");

module.exports.createCaptain = async ({ firstname, lastname, email, password, vehicle }) => {
  // Ensure all fields exist (this check is optional if already done in controller)
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
  const captain = await Captain.create({
    fullname: { firstname, lastname },
    email,
    password, // Already hashed
    vehicle,
  });

  return captain;
};
