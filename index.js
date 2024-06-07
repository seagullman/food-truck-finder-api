require('dotenv').config();

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const axios = require("axios");

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

admin.initializeApp();

const app = express();

class FoodTruckListItem {
    constructor(id, name, description, distanceInMiles, latitude, longitude) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.distanceInMiles = distanceInMiles;
        this.latitude = latitude;
        this.longitude = longitude;
    }
  }

  // Function to get the driving distance between two points
async function getDrivingDistance(lat1, lon1, lat2, lon2) {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat1},${lon1}&destinations=${lat2},${lon2}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await axios.get(url);
    const distanceInMiles = response.data.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
    return distanceInMiles;
  }

// Endpoint to handle GET request with latitude, longitude and distance
app.get("/location/foodtrucks", async (req, res) => {
    const latitude = parseFloat(req.query.latitude);
    const longitude = parseFloat(req.query.longitude);
    const maxDistance = parseFloat(req.query.distance);

  if (!latitude || !longitude || !maxDistance) {
    return res.status(400).send("latitude, longitude, and maxDistance are required");
  }

  try {
    // Fetch food trucks from Firestore database
    const foodTrucksSnapshot = await admin.firestore().collection('food-trucks').get();
    const foodTruckItems = [];

    for (const doc of foodTrucksSnapshot.docs) {
      const data = doc.data();
      const distanceInMiles = await getDrivingDistance(latitude, longitude, data.location.latitude, data.location.longitude);

      // Filter food trucks within the specified distance
      if (distanceInMiles <= maxDistance) {
        foodTruckItems.push(new FoodTruckListItem(
            doc.id,
            data.name,
            data.description,
            distanceInMiles,
            data.location.latitude,
            data.location.longitude
        ));
      }
        // Sort food trucks by distanceInMiles in ascending order
        foodTruckItems.sort((a, b) => a.distanceInMiles - b.distanceInMiles);
    };

    res.status(200).json(foodTruckItems);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
  
});

exports.api = functions.https.onRequest(app);
