const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // just the filename
});

module.exports = mongoose.model('Activity', activitySchema);