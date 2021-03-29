const mongoose = require("mongoose");
const { genKey } = require("../../lib/utility");
const Schema = mongoose.Schema;
const schema = new Schema({
  registrationNumber: {
    type: String,
  },
  vehicleType: {
    type: String,
    enum: ["bike", "truck"],
    default: "bike",
  },
  city: {
    type: String,
  },
  activeOrdersCount: {
    type: Number,
    default: 0,
  },
});

schema.pre("save", async function () {
  if (!this.isNew) return;
  this.registrationNumber = genKey()
});

module.exports = { schema };
