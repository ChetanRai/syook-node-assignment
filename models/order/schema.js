const mongoose = require("mongoose");
const {Counter: counterModel} = require("../counter/model")
const { genKey } = require("../../lib/utility");
const Schema = mongoose.Schema;
const schema = new Schema({
  orderNumber: {
    type: Number,
    default: 0001
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
  deliveryVehicleRegNo: {
    type: String,
  },
  isDelivered: {
      type: Boolean,
      default: false
  },
  invoiceId: {
    type: String
  }
});

schema.pre('save', async function () {
  // Don't increment if this is NOT a newly created document
  if(!this.isNew) return;

  const counter = await counterModel.increment('order');
  this.orderNumber = counter;
  this.invoiceId = genKey()
});


module.exports = { schema };
