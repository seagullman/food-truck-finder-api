const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");

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

// Define the route to get details of a specific food truck by ID
router.get("/location/foodtrucks/:id", async (req, res) => {
    const foodTruckId = req.params.id;

    if (!foodTruckId) {
        return res.status(400).send("Food truck ID is required");
    }

    try {
        const foodTruckDoc = await admin.firestore().collection('food-trucks').doc(foodTruckId).get();

        if (!foodTruckDoc.exists) {
            return res.status(404).send("Food truck not found");
        }

        const data = foodTruckDoc.data();

        let imageUrl = '';
        try {
            imageUrl = await getImageUrl(data.imageFileName);
        } catch (err) {
            console.error(`Error getting image URL for ${data.name}:`, err);
            imageUrl = 'https://example.com/default-image.jpg';
        }

        const foodTruckDetail = {
            name: data.name,
            description: data.description,
            websiteUrl: data.websiteUrl,
            cuisineType: data.cuisineType,
            location: {
                latitude: data.location.latitude,
                longitude: data.location.longitude,
                description: data.location.description
            },
            imageUrl: imageUrl,
            regularHours: data.regularHours,
            menu: data.menu
        };

        res.status(200).json(foodTruckDetail);
    } catch (error) {
        console.error('Error processing request:', error.stack);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;