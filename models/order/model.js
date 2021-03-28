// models/answers/model.js
const mongoose = require('mongoose');
const { schema } = require('./schema');
// add hooks here

const Order = mongoose.model('Order', schema);
module.exports = { Order };
