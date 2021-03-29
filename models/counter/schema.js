const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    default: 0001,
  },
});

schema.static('increment', async function(counterName) {
  const count = await this.findByIdAndUpdate(
      counterName,
      {$inc: {seq: 1}},
      // new: return the new value
      // upsert: create document if it doesn't exist
      {new: true, upsert: true}
  );
  return count.seq;
});

module.exports = { schema };
