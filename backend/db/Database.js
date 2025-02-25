<<<<<<< HEAD
// Import the mongoose library
// Mongoose is a Node.js library used for interacting with a MongoDB database.
const mongoose = require("mongoose"); 
=======
const mongoose = require('mongoose');
>>>>>>> 5d43ec0be4a0bade14628e22b59065f6de8e3c7e

// Define the function to establish a connection to the MongoDB database
const connectDatabase = () => {
    mongoose
<<<<<<< HEAD
        // Connect to the database using the URL provided in the environment variables
        .connect(process.env.DB_URL) // No need to specify useNewUrlParser or useUnifiedTopology (handled automatically by mongoose)
        .then((data) => {
            // Log a success message when the connection is successfully established
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        })
        .catch((err) => {
            // Log an error message if the connection fails
            console.error(`Database connection failed: ${err.message}`);
            
            // Exit the Node.js process to prevent the application from running without a valid database connection
            process.exit(1); // Exit with a failure code (1 indicates an error occurred)
=======
        .connect(process.env.DB_URL, {
            // useNewUrlParser: true,  // Ensure proper URL parsing
            // useUnifiedTopology: true // Use the new server discovery and monitoring engine
        })
        .then((data) => {
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        })
        .catch((err) => {
            console.error(`Database connection failed: ${err.message}`); // Fixed typo here
>>>>>>> 5d43ec0be4a0bade14628e22b59065f6de8e3c7e
        });
};

// Export the connectDatabase function
// This allows other parts of the application to use this function to establish a database connection
module.exports = connectDatabase;