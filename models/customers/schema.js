const mongoose = require("mongoose");
const {Counter: counterModel} = require("../counter/model")
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  city: {
    type: String,
    required: [true],
  },
  customerId: {
    type: Number,
    default: 0001
  },
});

schema.pre('save', async function () {
  // Don't increment if this is NOT a newly created document
  if(!this.isNew) return;

  const counter = await counterModel.increment('customer');
  this.customerId = counter;
});


module.exports = { schema };
