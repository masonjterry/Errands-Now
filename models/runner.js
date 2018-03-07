const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const runner = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  streetName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  birthday: { type: String, required: true }
});

const Runner = mongoose.model("Runner", runner);

module.exports = Runner;
