
// Import Dependencies

const express = require('express');          // Express framework
const dotenv = require('dotenv').config();   // Load environment variables from .env
const connectdb = require('./config/dbconnect'); // MongoDB connection
const userroutes = require('./router/userRoutes'); // User-related routes
const cors = require("cors");          // To handle Cross-Origin requests


// Initialize Express App

const app = express();

// Middleware


// Enable CORS (allow requests from frontend)
// You can restrict origin if needed



app.use(cors({
  origin: "http://localhost:5173", // your frontend port
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json()); // parse JSON body




// Connect to MongoDB

connectdb(); // Function in config/dbconnect.js to connect MongoDB


// Test Route

app.get("/", (req, res) => {
    res.send("API Working");
});


// API Routes

app.use('/api', userroutes); 
// All routes defined in userroutes will now be prefixed with /api



// Start Server

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server Listening On Port ${PORT}`);
});
