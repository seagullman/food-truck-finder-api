const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = require('./food-truck-finder-ed9db-firebase-adminsdk-dglqo-519335f17f.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function generateSampleData() {
  const sampleData = [
    {
      name: "Ruby Tuesday",
      description: "Casual chain with American fare, featuring burgers, a salad bar, cocktails & a convivial vibe.",
      location: {
        latitude: 35.9092,
        longitude: -83.8459
      },
      imageFileName: "ruby-tuesday.png"
    }
  ];

  const batch = db.batch();

  sampleData.forEach((foodTruck) => {
    const docRef = db.collection('food-trucks').doc(); // Automatically generate unique ID
    batch.set(docRef, foodTruck);
  });

  try {
    await batch.commit();
    console.log('Sample data generated successfully!');
  } catch (error) {
    console.error('Error generating sample data:', error);
  }
}

generateSampleData();