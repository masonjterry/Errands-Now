const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const errand = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  instructions: { type: String, required: true }
});

const Errand = mongoose.model("Errand", errand);

module.exports = Errand;
