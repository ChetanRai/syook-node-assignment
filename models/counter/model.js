const mongoose = require("mongoose");
const { schema } = require("./schema");

const Counter = mongoose.model("Counter", schema);

module.exports = { Counter };
