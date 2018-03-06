const db = require("../models");

module.export = {
  findErrands: function(req, res) {
    db.Errand
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
}
