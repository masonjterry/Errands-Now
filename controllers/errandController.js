const db = require("../models");

module.exports = {
  listErrands: function(req, res) {
    db.Errand
    .find(req.query)
    .sort({ date: -1 })
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  },
  createErrand: function(req, res) {
    console.log(req.body);
    db.Errand
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  }
}
