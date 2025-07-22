// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection function
const recentActivityRoutes = require('./routes/recentActivityRoutes'); // Import the routes
const servicesRoutes = require('./routes/services'); // Import the services routes

const app = express();

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Connect to Database
connectDB();

const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("API is running");
});
app.use('/api/activities', recentActivityRoutes); // Use the activity routes
app.use('/api/ourservices', servicesRoutes); // Use the services routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
