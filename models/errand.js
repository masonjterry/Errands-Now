const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const errand = new Schema({
  errandName: { type: String, required: true },
  location: { type: String, required: true },
  extendedLocation: { type: Object },
  errandInstructions: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Errand = mongoose.model("Errand", errand);

module.exports = Errand;
