const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");

const distanceUtils = require('../distanceUtils')

class FoodTruckListItem {
    constructor(id, name, description, distanceInMiles, latitude, longitude, imageUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.distanceInMiles = distanceInMiles;
        this.latitude = latitude;
        this.longitude = longitude;
        this.imageUrl = imageUrl;
    }
}

// Function to get the public download URL of an image from Firebase Storage
async function getImageUrl(filePath) {
    if (!filePath) {
        throw new Error('A file name must be specified.');
    }

    try {
        const file = admin.storage().bucket().file(filePath);
        const [url] = await file.getSignedUrl({
            action: 'read',
            expires: '03-01-2500'
        });
        console.log(`Generated URL for ${filePath}: ${url}`);
        return url;
    } catch (error) {
        console.error(`Error generating signed URL for ${filePath}:`, error.stack);
        throw error;
    }
}

// Endpoint to handle GET request with latitude, longitude, and distance
router.get("/location/foodtrucks", async (req, res) => {
    const latitude = parseFloat(req.query.latitude);
    const longitude = parseFloat(req.query.longitude);
    const maxDistance = parseFloat(req.query.distance);

    if (!latitude || !longitude || !maxDistance) {
        return res.status(400).send("latitude, longitude, and maxDistance are required");
    }

    try {
        const foodTrucksSnapshot = await admin.firestore().collection('food-trucks').get();
        const foodTruckItems = [];

        for (const doc of foodTrucksSnapshot.docs) {
            const data = doc.data();
            console.log(`Document data: ${JSON.stringify(data)}`);
            const distanceInMiles = await distanceUtils.getDrivingDistance(latitude, longitude, data.location.latitude, data.location.longitude);

            if (distanceInMiles <= maxDistance) {
                console.log(`imageUrl for ${data.name}: ${data.imageFileName}`);

                let imageUrl = '';
                try {
                    imageUrl = await getImageUrl(data.imageFileName);
                } catch (err) {
                    console.error(`Error getting image URL for ${data.name}:`, err);
                    // TODO fix or handle this
                    imageUrl = 'https://example.com/default-image.jpg';
                }

                foodTruckItems.push(new FoodTruckListItem(
                    doc.id,
                    data.name,
                    data.description,
                    distanceInMiles,
                    data.location.latitude,
                    data.location.longitude,
                    imageUrl
                ));
            }
        }

        foodTruckItems.sort((a, b) => a.distanceInMiles - b.distanceInMiles);

        res.status(200).json(foodTruckItems);
    } catch (error) {
        console.error('Error processing request:', error.stack);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;