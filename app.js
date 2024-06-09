require('dotenv').config();
const express = require('express');
const admin = require("firebase-admin");
const app = express();

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: 'food-truck-finder-ed9db.appspot.com'
});

// Import routes
const foodTrucksRoute = require('./routes/foodTruckList');
const infoRoute = require('./routes/foodTruckDetail');

// Use routes
app.use(foodTrucksRoute);
app.use(infoRoute);

module.exports = app;