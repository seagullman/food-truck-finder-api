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
      },
      menu: [
        {
          category: "Appetizers",
          items: [
            { name: "Mozzarella Sticks", description: "Fried mozzarella cheese sticks", price: 6.99, isVegetarian: true, isGlutenFree: false },
            { name: "Chicken Wings", description: "Spicy chicken wings", price: 9.99, isVegetarian: false, isGlutenFree: false }
          ]
        },
        {
          category: "Entrees",
          items: [
            { name: "Ribeye Steak", description: "Grilled ribeye steak", price: 19.99, isVegetarian: false, isGlutenFree: true },
            { name: "Grilled Chicken Breast", description: "Grilled chicken with herbs", price: 14.99, isVegetarian: false, isGlutenFree: true }
          ]
        },
        {
          category: "Desserts",
          items: [
            { name: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust", price: 5.99, isVegetarian: true, isGlutenFree: false },
            { name: "Chocolate Lava Cake", description: "Warm chocolate cake with a molten center", price: 6.99, isVegetarian: true, isGlutenFree: false }
          ]
        },
        {
          category: "Drinks",
          items: [
            { name: "Coca-Cola", description: "Classic Coca-Cola", price: 2.99, isVegetarian: true, isGlutenFree: true },
            { name: "Iced Tea", description: "Freshly brewed iced tea", price: 2.99, isVegetarian: true, isGlutenFree: true }
          ]
        },
        {
          category: "Sides",
          items: [
            { name: "French Fries", description: "Crispy golden fries", price: 3.99, isVegetarian: true, isGlutenFree: false },
            { name: "Mashed Potatoes", description: "Creamy mashed potatoes", price: 4.99, isVegetarian: true, isGlutenFree: false }
          ]
        }
      ]
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
      },
      menu: [
        {
          category: "Appetizers",
          items: [
            { name: "Chips and Salsa", description: "Crispy tortilla chips with fresh salsa", price: 2.99, isVegetarian: true, isGlutenFree: true },
            { name: "Nachos", description: "Tortilla chips with cheese and jalapenos", price: 4.99, isVegetarian: true, isGlutenFree: false }
          ]
        },
        {
          category: "Entrees",
          items: [
            { name: "Tacos", description: "Soft or crunchy tacos with beef", price: 1.99, isVegetarian: false, isGlutenFree: false },
            { name: "Burrito", description: "Flour tortilla filled with beef and beans", price: 3.99, isVegetarian: false, isGlutenFree: false }
          ]
        },
        {
          category: "Desserts",
          items: [
            { name: "Cinnamon Twists", description: "Crispy, cinnamon-sugar snacks", price: 1.99, isVegetarian: true, isGlutenFree: true },
            { name: "Churros", description: "Fried dough pastry with cinnamon sugar", price: 2.99, isVegetarian: true, isGlutenFree: false }
          ]
        },
        {
          category: "Drinks",
          items: [
            { name: "Mountain Dew Baja Blast", description: "Tropical lime-flavored Mountain Dew", price: 2.99, isVegetarian: true, isGlutenFree: true },
            { name: "Pepsi", description: "Classic Pepsi", price: 2.99, isVegetarian: true, isGlutenFree: true }
          ]
        },
        {
          category: "Sides",
          items: [
            { name: "Black Beans", description: "Seasoned black beans", price: 1.99, isVegetarian: true, isGlutenFree: true },
            { name: "Rice", description: "Seasoned rice", price: 1.99, isVegetarian: true, isGlutenFree: true }
          ]
        }
      ]
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
      },
      menu: [
        {
          category: "Appetizers",
          items: [
            { name: "Guacamole", description: "Fresh avocado with lime and salt", price: 7.99, isVegetarian: true, isGlutenFree: true },
            { name: "Queso Fundido", description: "Melted cheese with chorizo", price: 8.99, isVegetarian: false, isGlutenFree: true }
          ]
        },
        {
          category: "Entrees",
          items: [
            { name: "Chicken Tacos", description: "Grilled chicken with cilantro and onions", price: 10.99, isVegetarian: false, isGlutenFree: false },
            { name: "Carnitas", description: "Slow-cooked pork with salsa verde", price: 12.99, isVegetarian: false, isGlutenFree: true }
          ]
        },
        {
          category: "Desserts",
          items: [
            { name: "Tres Leches Cake", description: "Moist sponge cake with three types of milk", price: 5.99, isVegetarian: true, isGlutenFree: false },
            { name: "Flan", description: "Caramel custard dessert", price: 4.99, isVegetarian: true, isGlutenFree: true }
          ]
        },
        {
          category: "Drinks",
          items: [
            { name: "Horchata", description: "Sweet rice milk drink", price: 2.99, isVegetarian: true, isGlutenFree: true },
            { name: "Margarita", description: "Classic lime margarita", price: 6.99, isVegetarian: true, isGlutenFree: true }
          ]
        },
        {
          category: "Sides",
          items: [
            { name: "Mexican Rice", description: "Seasoned rice with vegetables", price: 2.99, isVegetarian: true, isGlutenFree: true },
            { name: "Refried Beans", description: "Traditional refried beans", price: 2.99, isVegetarian: true, isGlutenFree: true }
          ]
        }
      ]
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
      },
      menu: [
        {
          category: "Appetizers",
          items: [
            { name: "Garlic Parmesan Wings", description: "Wings tossed in garlic parmesan sauce", price: 8.99, isVegetarian: false, isGlutenFree: true },
            { name: "Buffalo Wings", description: "Spicy buffalo wings served with ranch", price: 8.99, isVegetarian: false, isGlutenFree: true }
          ]
        },
        {
          category: "Entrees",
          items: [
            { name: "Pepperoni Pizza", description: "Classic pizza topped with pepperoni", price: 12.99, isVegetarian: false, isGlutenFree: false },
            { name: "Cheese Pizza", description: "Classic pizza with mozzarella cheese", price: 10.99, isVegetarian: true, isGlutenFree: false },
            { name: "Veggie Lover's Pizza", description: "Pizza with mushrooms, green peppers, onions, and tomatoes", price: 13.99, isVegetarian: true, isGlutenFree: false },
            { name: "Chicken Alfredo", description: "Creamy alfredo sauce with grilled chicken", price: 9.99, isVegetarian: false, isGlutenFree: false },
            { name: "Meaty Marinara", description: "Marinara sauce with ground beef", price: 9.99, isVegetarian: false, isGlutenFree: false }
          ]
        },
        {
          category: "Sides",
          items: [
            { name: "Breadsticks", description: "Classic seasoned breadsticks", price: 5.99, isVegetarian: true, isGlutenFree: false },
            { name: "Cheese Sticks", description: "Breadsticks topped with cheese", price: 6.99, isVegetarian: true, isGlutenFree: false }
          ]
        },
        {
          category: "Desserts",
          items: [
            { name: "Cinnamon Sticks", description: "Warm breadsticks with cinnamon sugar", price: 4.99, isVegetarian: true, isGlutenFree: false },
            { name: "Chocolate Chip Cookie", description: "Large chocolate chip cookie", price: 5.99, isVegetarian: true, isGlutenFree: false }
          ]
        },
        {
          category: "Drinks",
          items: [
            { name: "Pepsi", description: "Classic Pepsi", price: 1.99, isVegetarian: true, isGlutenFree: true },
            { name: "Mountain Dew", description: "Classic Mountain Dew", price: 1.99, isVegetarian: true, isGlutenFree: true }
          ]
        }
      ]
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
      },
      menu: [
        {
          category: "Appetizers",
          items: [
            {
              name: "Mozzarella Sticks",
              description: "Crispy breaded mozzarella sticks with marinara sauce",
              price: 3.49,
              isVegetarian: true,
              isGlutenFree: false
            },
            {
              name: "Jalapeno Poppers",
              description: "Spicy jalapeno poppers with creamy filling",
              price: 3.99,
              isVegetarian: false,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Entrees",
          items: [
            {
              name: "Whopper",
              description: "Flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.",
              price: 4.99,
              isVegetarian: false,
              isGlutenFree: false
            },
            {
              name: "Chicken Fries",
              description: "Breaded chicken tenderloins shaped like fries, perfect for dipping in your favorite sauce.",
              price: 3.49,
              isVegetarian: false,
              isGlutenFree: false
            },
            {
              name: "Impossible Whopper",
              description: "Plant-based patty with lettuce, tomatoes, pickles, and onions on a sesame seed bun.",
              price: 5.99,
              isVegetarian: true,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Sides",
          items: [
            {
              name: "French Fries",
              description: "Classic crispy fries",
              price: 2.49,
              isVegetarian: true,
              isGlutenFree: true
            },
            {
              name: "Onion Rings",
              description: "Crispy breaded onion rings",
              price: 2.99,
              isVegetarian: true,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Desserts",
          items: [
            {
              name: "Soft Serve Cone",
              description: "Creamy vanilla soft serve in a cone",
              price: 1.49,
              isVegetarian: true,
              isGlutenFree: false
            },
            {
              name: "Hershey's Sundae Pie",
              description: "Chocolate and vanilla cream pie with Hershey's chocolate",
              price: 2.49,
              isVegetarian: true,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Drinks",
          items: [
            {
              name: "Coca-Cola",
              description: "Classic Coke",
              price: 1.99,
              isVegetarian: true,
              isGlutenFree: true
            },
            {
              name: "Sprite",
              description: "Classic Sprite",
              price: 1.99,
              isVegetarian: true,
              isGlutenFree: true
            }
          ]
        }
      ]
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
      },
      menu: [
        {
          category: "Sandwiches",
          items: [
            {
              name: "Italian B.M.T.",
              description: "Genoa salami, spicy pepperoni, and Black Forest ham, with your choice of vegetables and condiments.",
              price: 6.99,
              isVegetarian: false,
              isGlutenFree: false
            },
            {
              name: "Veggie Delite",
              description: "Crispy lettuce, tomatoes, cucumbers, green peppers, and onions with your choice of condiments.",
              price: 5.49,
              isVegetarian: true,
              isGlutenFree: false
            },
            {
              name: "Turkey Breast",
              description: "Turkey breast, crispy lettuce, and your choice of vegetables and condiments.",
              price: 6.49,
              isVegetarian: false,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Salads",
          items: [
            {
              name: "Chicken Caesar",
              description: "Grilled chicken strips, romaine lettuce, and grated Parmesan cheese with Caesar dressing.",
              price: 7.99,
              isVegetarian: false,
              isGlutenFree: false
            },
            {
              name: "Veggie Delight Salad",
              description: "Mixed greens with cucumbers, tomatoes, green peppers, and onions.",
              price: 5.99,
              isVegetarian: true,
              isGlutenFree: true
            }
          ]
        },
        {
          category: "Sides",
          items: [
            {
              name: "Chips",
              description: "Classic Lay's potato chips.",
              price: 1.49,
              isVegetarian: true,
              isGlutenFree: true
            },
            {
              name: "Cookies",
              description: "Choose from chocolate chip, oatmeal raisin, or white chip macadamia nut.",
              price: 1.29,
              isVegetarian: true,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Drinks",
          items: [
            {
              name: "Fountain Drink",
              description: "Choose from a variety of fountain drinks.",
              price: 1.99,
              isVegetarian: true,
              isGlutenFree: true
            },
            {
              name: "Bottled Water",
              description: "Refreshing bottled water.",
              price: 1.49,
              isVegetarian: true,
              isGlutenFree: true
            }
          ]
        }
      ]
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
      },
      menu: [
        {
          category: "Starters",
          items: [
            {
              name: "Smoked Sausage & Cheese Plate",
              description: "Smoked sausage with assorted cheeses and crackers.",
              price: 8.99,
              isVegetarian: false,
              isGlutenFree: false
            },
            {
              name: "Fried Green Tomatoes",
              description: "Southern-style fried green tomatoes served with a spicy remoulade.",
              price: 6.99,
              isVegetarian: true,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "BBQ",
          items: [
            {
              name: "BBQ Pork Plate",
              description: "Slow-cooked pork shoulder served with Calhoun's BBQ sauce and two sides.",
              price: 14.99,
              isVegetarian: false,
              isGlutenFree: false
            },
            {
              name: "BBQ Ribs",
              description: "Full rack of hickory-smoked ribs served with Calhoun's BBQ sauce and two sides.",
              price: 19.99,
              isVegetarian: false,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Burgers",
          items: [
            {
              name: "Calhoun's Burger",
              description: "Fresh-ground beef patty with lettuce, tomato, onion, and pickles.",
              price: 10.99,
              isVegetarian: false,
              isGlutenFree: false
            },
            {
              name: "Turkey Burger",
              description: "Grilled turkey patty with lettuce, tomato, and avocado.",
              price: 9.99,
              isVegetarian: false,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Sides",
          items: [
            {
              name: "Coleslaw",
              description: "Creamy coleslaw made with fresh cabbage and carrots.",
              price: 2.99,
              isVegetarian: true,
              isGlutenFree: true
            },
            {
              name: "Baked Beans",
              description: "Slow-cooked baked beans with a hint of smoky flavor.",
              price: 2.99,
              isVegetarian: true,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Desserts",
          items: [
            {
              name: "Key Lime Pie",
              description: "Refreshing key lime pie with a graham cracker crust.",
              price: 5.99,
              isVegetarian: true,
              isGlutenFree: false
            },
            {
              name: "Chocolate Cake",
              description: "Rich chocolate cake with a creamy frosting.",
              price: 6.99,
              isVegetarian: true,
              isGlutenFree: false
            }
          ]
        },
        {
          category: "Drinks",
          items: [
            {
              name: "Sweet Tea",
              description: "Classic Southern sweet tea.",
              price: 1.99,
              isVegetarian: true,
              isGlutenFree: true
            },
            {
              name: "Craft Beer",
              description: "Selection of local craft beers.",
              price: 4.99,
              isVegetarian: true,
              isGlutenFree: false
            }
          ]
        }
      ]
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