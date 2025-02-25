<<<<<<< HEAD
// Import the ErrorHandler class from the utils/ErrorHandler module
// This is used for creating and throwing custom errors
const ErrorHandler = require("../utils/ErrorHandler");

// Import the catchAsyncErrors utility
// This is a middleware to handle errors in asynchronous functions automatically
const catchAsyncErrors = require("./catchAsyncError");

// Import the jsonwebtoken (JWT) library
// This library is used for creating, signing, and verifying JSON Web Tokens
=======
const ErrorHand1er = require(" ../uti1s/ErrorHand1er");
const catchAsyncErrors = require(" ./catchAsyncErrors");
>>>>>>> 5d43ec0be4a0bade14628e22b59065f6de8e3c7e
const jwt = require("jsonwebtoken");