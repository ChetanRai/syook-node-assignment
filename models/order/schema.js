const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
  orderNumber: {
    type: Number,
    required: [true],
  },
  itemId: {
    type: String,
    required: [true],
  },
  price: {
    type: Number,
  },
  customerId: {
    type: Number,
    required: [true],
  },
  deliveryVehicleId: {
    type: Number,
  },
  isDelivered: {
      type: Boolean,
  }
});

module.exports = { schema };
