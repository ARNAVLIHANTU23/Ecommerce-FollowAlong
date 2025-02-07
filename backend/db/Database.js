const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URL, {
            // useNewUrlParser: true,  // Ensure proper URL parsing
            // useUnifiedTopology: true // Use the new server discovery and monitoring engine
        })
        .then((data) => {
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        })
        .catch((err) => {
            console.error(`Database connection failed: ${err.message}`); // Fixed typo here
        });
};

module.exports = connectDatabase;