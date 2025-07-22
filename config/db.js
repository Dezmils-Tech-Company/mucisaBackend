// config/db.js (or db.js - you can name it what you want, as long as you're consistent in server.js)
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI; // Get MongoDB URI from environment variables
    if (!mongoURI) {
      throw new Error('MONGO_URI environment variable not defined.');
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Recommended option
      //useCreateIndex: true,   // Deprecated option, remove if your mongoose version is >= 6
      //useFindAndModify: false  // Deprecated option, remove if your mongoose version is >= 6
    });

    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
