import axios from "axios";

export default {
  // list all errands
  listErrands: function() {
    return axios.get("/api/errands");
  },
  updateErrand: function(id) {
    return axios.post("/api/errands/" + id);
  },
  deleteErrand: function(id) {
    return axios.post("/api/errands/" + id);
  },
  createErrand: function(data) {
    return axios.post("/api/errands", data);
  }
}
