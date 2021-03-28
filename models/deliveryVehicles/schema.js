const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
  registrationNumber: {
    type: String,
    required: [true],
  },
  vehicleType: {
    type: Object.freeze(vehicleType),
    required: [true],
  },
  city: {
    type: String,
  },
  activeOrdersCount: {
    type: Number,
    required: [true],
  }
});

module.exports = { schema };
