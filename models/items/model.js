const mongoose = require("mongoose");
const { schema } = require("./schema");

const Item = mongoose.model("Item", schema);

module.exports = { Item };
