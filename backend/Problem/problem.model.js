const mongoose = require("mongoose");

const problem = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  flair: {
    type: String,
    required: true,
 },
});


module.exports = mongoose.model('Problem', problem)