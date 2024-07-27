const axios = require('axios');
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Function to get the driving distance between two points
async function getDrivingDistance(lat1, lon1, lat2, lon2) {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat1},${lon1}&destinations=${lat2},${lon2}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await axios.get(url);
    const distanceInMiles = response.data.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
    return distanceInMiles;
}

module.exports = {
    getDrivingDistance
};