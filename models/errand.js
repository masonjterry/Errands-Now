const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const errand = new Schema({
  errandName: { type: String, required: true },
  errandLocation: { type: String, required: true },
  errandInstructions: { type: String, required: true }
});

const Errand = mongoose.model("Errand", errand);

module.exports = Errand;
