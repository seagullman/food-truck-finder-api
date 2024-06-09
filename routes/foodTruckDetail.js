const express = require('express');
const router = express.Router();

router.get("/info", (req, res) => {
    res.status(200).json({
        name: "Food Truck Finder API",
        version: "1.0.0",
        description: "API to find food trucks based on location and distance"
    });
});

module.exports = router;