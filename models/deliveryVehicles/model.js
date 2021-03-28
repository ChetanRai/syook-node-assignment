// models/DeliveryVehicless/model.js
const mongoose = require('mongoose');
const { schema } = require('./schema');

const DeliveryVehicles = mongoose.model('DeliveryVehicles', schema);
module.exports = { DeliveryVehicles };
