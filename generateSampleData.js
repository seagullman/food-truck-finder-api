/**
 * This file generates an array of food truck objects and injects them into the Firebase Datastore.
 * This data is used by the /location/foodtrucks route as the response for now. It does not use all
 * off the fields in the response. All of the fields will be in the response of the food truck details
 * route but that has not been built out yet.
 */

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
      websiteUrl: "www.rubytuesday.com",
      cuisineType: "american",
      location: {
        latitude: 35.9092,
        longitude: -83.8459,
        description: "In the Walmart parking lot."
      },
      imageFileName: "ruby-tuesday.png",
      regularHours: {
        monday: {
          open: "2024-06-10T09:00:00Z",
          close: "2024-06-10T21:00:00Z"
        },
        tuesday: {
          open: "2024-06-11T09:00:00Z",
          close: "2024-06-11T21:00:00Z"
        },
        wednesday: {
          open: "2024-06-12T09:00:00Z",
          close: "2024-06-12T21:00:00Z"
        },
        thursday: {
          open: "2024-06-13T09:00:00Z",
          close: "2024-06-13T21:00:00Z"
        },
        friday: {
          open: "2024-06-14T09:00:00Z",
          close: "2024-06-14T22:00:00Z"
        },
        saturday: {
          open: "2024-06-15T10:00:00Z",
          close: "2024-06-15T22:00:00Z"
        },
        sunday: {
          open: "2024-06-16T11:00:00Z",
          close: "2024-06-16T18:00:00Z"
        }
      }
    },
    {
      name: "Taco Bell",
      description: "Fast-food chain serving Mexican-inspired fare such as tacos, quesadillas & nachos.",
      websiteUrl: "www.tacobell.com",
      cuisineType: "mexican",
      location: {
        latitude: 35.8734978,
        longitude: -83.7546971,
        description: "Across from the food city in the parking lot."
      },
      imageFileName: "taco-bell.png",
      regularHours: {
        monday: {
          open: "2024-06-10T09:00:00Z",
          close: "2024-06-10T21:00:00Z"
        },
        tuesday: {
          open: "2024-06-11T09:00:00Z",
          close: "2024-06-11T21:00:00Z"
        },
        wednesday: {
          open: "2024-06-12T09:00:00Z",
          close: "2024-06-12T21:00:00Z"
        },
        thursday: {
          open: "2024-06-13T09:00:00Z",
          close: "2024-06-13T21:00:00Z"
        },
        friday: {
          open: "2024-06-14T09:00:00Z",
          close: "2024-06-14T22:00:00Z"
        },
        saturday: {
          open: "2024-06-15T10:00:00Z",
          close: "2024-06-15T22:00:00Z"
        },
        sunday: {
          open: "2024-06-16T11:00:00Z",
          close: "2024-06-16T18:00:00Z"
        }
      }
    },
    {
      name: "Azul Cantina",
      description: "Mexican restaurant with a rooftop view of the Smoky Mountains",
      websiteUrl: "www.azulmexicancantina.com",
      cuisineType: "mexican",
      location: {
        latitude: 35.80598,
        longitude: -83.56918,
        description: "Right in the plaza near Flavortown"
      },
      imageFileName: "azul-cantina.jpeg",
      regularHours: {
        monday: {
          open: "2024-06-10T09:00:00Z",
          close: "2024-06-10T21:00:00Z"
        },
        tuesday: {
          open: "2024-06-11T09:00:00Z",
          close: "2024-06-11T21:00:00Z"
        },
        wednesday: {
          open: "2024-06-12T09:00:00Z",
          close: "2024-06-12T21:00:00Z"
        },
        thursday: {
          open: "2024-06-13T09:00:00Z",
          close: "2024-06-13T21:00:00Z"
        },
        friday: {
          open: "2024-06-14T09:00:00Z",
          close: "2024-06-14T22:00:00Z"
        },
        saturday: {
          open: "2024-06-15T10:00:00Z",
          close: "2024-06-15T22:00:00Z"
        },
        sunday: {
          open: "2024-06-16T11:00:00Z",
          close: "2024-06-16T18:00:00Z"
        }
      }
    },
    {
      name: "Pizza Hut",
      description: "Popular delivery, carry-out & dine-in chain known for pizza, wings & pasta, plus sides & desserts.",
      websiteUrl: "www.pizzahut.com",
      cuisineType: "pizza",
      location: {
        latitude: 35.9152,
        longitude: -83.8574,
        description: "In the Smoky Mountain Liquor's parking lot."
      },
      imageFileName: "pizza-hut.jpeg",
      regularHours: {
        monday: {
          open: "2024-06-10T09:00:00Z",
          close: "2024-06-10T21:00:00Z"
        },
        tuesday: {
          open: "2024-06-11T09:00:00Z",
          close: "2024-06-11T21:00:00Z"
        },
        wednesday: {
          open: "2024-06-12T09:00:00Z",
          close: "2024-06-12T21:00:00Z"
        },
        thursday: {
          open: "2024-06-13T09:00:00Z",
          close: "2024-06-13T21:00:00Z"
        },
        friday: {
          open: "2024-06-14T09:00:00Z",
          close: "2024-06-14T22:00:00Z"
        },
        saturday: {
          open: "2024-06-15T10:00:00Z",
          close: "2024-06-15T22:00:00Z"
        },
        sunday: {
          open: "2024-06-16T11:00:00Z",
          close: "2024-06-16T18:00:00Z"
        }
      }
    },
    {
      name: "Burger King",
      description: "Well-known fast-food chain serving grilled burgers, fries & shakes.",
      websiteUrl: "www.burgerking.com",
      cuisineType: "american",
      location: {
        latitude: 35.91219,
        longitude: -83.84661,
        description: "Right across from Waffle House"
      },
      imageFileName: "burger-king.png",
      regularHours: {
        monday: {
          open: "2024-06-10T09:00:00Z",
          close: "2024-06-10T21:00:00Z"
        },
        tuesday: {
          open: "2024-06-11T09:00:00Z",
          close: "2024-06-11T21:00:00Z"
        },
        wednesday: {
          open: "2024-06-12T09:00:00Z",
          close: "2024-06-12T21:00:00Z"
        },
        thursday: {
          open: "2024-06-13T09:00:00Z",
          close: "2024-06-13T21:00:00Z"
        },
        friday: {
          open: "2024-06-14T09:00:00Z",
          close: "2024-06-14T22:00:00Z"
        },
        saturday: {
          open: "2024-06-15T10:00:00Z",
          close: "2024-06-15T22:00:00Z"
        },
        sunday: {
          open: "2024-06-16T11:00:00Z",
          close: "2024-06-16T18:00:00Z"
        }
      }
    },
    {
      name: "Subway",
      description: "Casual counter-serve chain for build-your-own sandwiches & salads, with health-conscious options.",
      websiteUrl: "www.subway.com",
      cuisineType: "sandwiches",
      location: {
        latitude: 35.8687,
        longitude: -83.7726,
        description: "In Seymour in the gas station parking lot."
      },
      imageFileName: "subway.png",
      regularHours: {
        monday: {
          open: "2024-06-10T09:00:00Z",
          close: "2024-06-10T21:00:00Z"
        },
        tuesday: {
          open: "2024-06-11T09:00:00Z",
          close: "2024-06-11T21:00:00Z"
        },
        wednesday: {
          open: "2024-06-12T09:00:00Z",
          close: "2024-06-12T21:00:00Z"
        },
        thursday: {
          open: "2024-06-13T09:00:00Z",
          close: "2024-06-13T21:00:00Z"
        },
        friday: {
          open: "2024-06-14T09:00:00Z",
          close: "2024-06-14T22:00:00Z"
        },
        saturday: {
          open: "2024-06-15T10:00:00Z",
          close: "2024-06-15T22:00:00Z"
        },
        sunday: {
          open: "2024-06-16T11:00:00Z",
          close: "2024-06-16T18:00:00Z"
        }
      }
    },
    {
      name: "Calhoun's",
      description: "Chain serving Tennessee BBQ, fresh-ground burgers & sandwiches, plus homestyle sides & craft beers.",
      websiteUrl: "www.calhouns.com",
      cuisineType: "bbq",
      location: {
        latitude: 35.9532,
        longitude: -83.9230,
        description: "On the river!"
      },
      imageFileName: "calhouns.jpeg",
      regularHours: {
        monday: {
          open: "2024-06-10T09:00:00Z",
          close: "2024-06-10T21:00:00Z"
        },
        tuesday: {
          open: "2024-06-11T09:00:00Z",
          close: "2024-06-11T21:00:00Z"
        },
        wednesday: {
          open: "2024-06-12T09:00:00Z",
          close: "2024-06-12T21:00:00Z"
        },
        thursday: {
          open: "2024-06-13T09:00:00Z",
          close: "2024-06-13T21:00:00Z"
        },
        friday: {
          open: "2024-06-14T09:00:00Z",
          close: "2024-06-14T22:00:00Z"
        },
        saturday: {
          open: "2024-06-15T10:00:00Z",
          close: "2024-06-15T22:00:00Z"
        },
        sunday: {
          open: "2024-06-16T11:00:00Z",
          close: "2024-06-16T18:00:00Z"
        }
      }
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