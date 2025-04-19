//  import img from "../assets/karahi.jpg";
// // import img1 from "../assets/burger.jpg";



// // export const restaurants = [
// //   // Italian
// //   { id: 1, name: 'Treat Cafe & Restaurant', address: 'Surat', image: img, isOpen: true, rating: 0, reviews: 0, category: 'Italian' },
// //   { id: 2, name: 'Spice Aroma', address: 'Iscon Ahmedabad', image: img1, isOpen: true, rating: 1.5, reviews: 2, category: 'Italian' },
// //   { id: 3, name: 'Food Taury', address: 'Paldi, Ahmedabad, Gujarat, India', image: img, isOpen: true, rating: 4.3, reviews: 3, category: 'Italian' },
// //   { id: 4, name: 'Pesto Palace', address: 'Raiya Chokdi, Rajkot, Gujarat', image: img1, isOpen: true, rating: 0, reviews: 0, category: 'Italian' },
// //   { id: 12, name: 'Italian Delight', address: 'Mumbai', image: img, isOpen: false, rating: 4.0, reviews: 10, category: 'Italian' },
// //   { id: 13, name: 'Pasta Fiesta', address: 'Delhi', image: img1, isOpen: true, rating: 3.5, reviews: 5, category: 'Italian' },

// //   // Sandwiches
// //   { id: 5, name: 'my döner', address: 'Brandenburger Str10', image: img, isOpen: false, rating: 0, reviews: 0, category: 'Sandwiches' },
// //   { id: 16, name: 'Sandwich Hub', address: 'Mumbai', image: img, isOpen: true, rating: 4.2, reviews: 8, category: 'Sandwiches' },
// //   { id: 17, name: 'Subway', address: 'Delhi', image: img, isOpen: false, rating: 4.1, reviews: 12, category: 'Sandwiches' },
// //   { id: 18, name: 'Sandwich Express', address: 'Ahmedabad', image: img, isOpen: true, rating: 3.9, reviews: 6, category: 'Sandwiches' },
// //   { id: 19, name: 'Sandwich Stop', address: 'Chennai', image: img, isOpen: true, rating: 3.8, reviews: 4, category: 'Sandwiches' },
// //   { id: 20, name: 'Sandwich World', address: 'Bangalore', image: img, isOpen: false, rating: 4.5, reviews: 15, category: 'Sandwiches' },

// //   // Bar Food
// //   { id: 6, name: 'AQBc', address: 'hjfhusfuiwe', image: img, isOpen: false, rating: 0, reviews: 0, category: 'Bar Food' },
// //   { id: 21, name: 'Bar and Grill', address: 'Mumbai', image: img, isOpen: true, rating: 4.7, reviews: 20, category: 'Bar Food' },
// //   { id: 22, name: 'Pub Paradise', address: 'Delhi', image: img, isOpen: true, rating: 4.3, reviews: 18, category: 'Bar Food' },
// //   { id: 23, name: 'Bar Bistro', address: 'Ahmedabad', image: img, isOpen: false, rating: 4.0, reviews: 10, category: 'Bar Food' },
// //   { id: 24, name: 'Nightlife Bar', address: 'Chennai', image: img, isOpen: true, rating: 3.9, reviews: 8, category: 'Bar Food' },
// //   { id: 25, name: 'Grill and Chill', address: 'Bangalore', image: img, isOpen: true, rating: 4.2, reviews: 15, category: 'Bar Food' },

// //   // Burger
// //   { id: 7, name: 'Burger King', address: 'Rajkot', image: img, isOpen: true, rating: 4.5, reviews: 2, category: 'Burger' },
// //   { id: 26, name: 'Big Burger', address: 'Mumbai', image: img, isOpen: false, rating: 4.0, reviews: 10, category: 'Burger' },
// //   { id: 27, name: 'Burger Express', address: 'Delhi', image: img, isOpen: true, rating: 3.5, reviews: 5, category: 'Burger' },
// //   { id: 28, name: 'Burger Joint', address: 'Ahmedabad', image: img, isOpen: true, rating: 4.1, reviews: 8, category: 'Burger' },
// //   { id: 29, name: 'Burger Stop', address: 'Chennai', image: img, isOpen: false, rating: 4.3, reviews: 12, category: 'Burger' },
// //   { id: 30, name: 'Burger World', address: 'Bangalore', image: img, isOpen: true, rating: 3.9, reviews: 6, category: 'Burger' },

// //   // Japanese
// //   { id: 8, name: 'Sushi Garden', address: 'Rajkot', image: img, isOpen: true, rating: 4.5, reviews: 2, category: 'Japanese' },
// //   { id: 31, name: 'Sushi Express', address: 'Mumbai', image: img, isOpen: true, rating: 4.8, reviews: 20, category: 'Japanese' },
// //   { id: 32, name: 'Tokyo Diner', address: 'Delhi', image: img, isOpen: false, rating: 4.6, reviews: 15, category: 'Japanese' },
// //   { id: 33, name: 'Sakura', address: 'Ahmedabad', image: img, isOpen: true, rating: 4.2, reviews: 10, category: 'Japanese' },
// //   { id: 34, name: 'Ninja Sushi', address: 'Chennai', image: img, isOpen: false, rating: 4.0, reviews: 8, category: 'Japanese' },
// //   { id: 35, name: 'Samurai Grill', address: 'Bangalore', image: img, isOpen: true, rating: 4.1, reviews: 12, category: 'Japanese' },

// //   // Mexican
// //   { id: 9, name: 'Taco Bell', address: 'Rajkot', image: img, isOpen: true, rating: 4.5, reviews: 2, category: 'Mexican' },
// //   { id: 36, name: 'Mexican Delight', address: 'Mumbai', image: img, isOpen: true, rating: 4.2, reviews: 8, category: 'Mexican' },
// //   { id: 37, name: 'Taco Fiesta', address: 'Delhi', image: img, isOpen: false, rating: 4.0, reviews: 6, category: 'Mexican' },
// //   { id: 38, name: 'Burrito King', address: 'Ahmedabad', image: img, isOpen: true, rating: 4.3, reviews: 10, category: 'Mexican' },
// //   { id: 39, name: 'Nacho Palace', address: 'Chennai', image: img, isOpen: true, rating: 4.1, reviews: 5, category: 'Mexican' },
// //   { id: 40, name: 'Fajita Express', address: 'Bangalore', image: img, isOpen: false, rating: 3.9, reviews: 8, category: 'Mexican' },

// //   // Ramen
// //   { id: 10, name: 'Ramen House', address: 'Rajkot', image: img, isOpen: true, rating: 4.5, reviews: 2, category: 'Ramen' },
// //   { id: 41, name: 'Ramen Delight', address: 'Mumbai', image: img, isOpen: false, rating: 4.7, reviews: 20, category: 'Ramen' },
// //   { id: 42, name: 'Tokyo Ramen', address: 'Delhi', image: img, isOpen: true, rating: 4.6, reviews: 15, category: 'Ramen' },
// //   { id: 43, name: 'Ramen Express', address: 'Ahmedabad', image: img, isOpen: false, rating: 4.2, reviews: 10, category: 'Ramen' },
// //   { id: 44, name: 'Ramen Joint', address: 'Chennai', image: img, isOpen: true, rating: 4.0, reviews: 8, category: 'Ramen' },
// //   { id: 45, name: 'Ramen World', address: 'Bangalore', image: img, isOpen: true, rating: 4.1, reviews: 12, category: 'Ramen' },

// //   // Mediterranean
// //   { id: 11, name: 'Mediterranean Kitchen', address: 'Rajkot', image: img, isOpen: true, rating: 4.5, reviews: 2, category: 'Mediterranean' },
// //   { id: 46, name: 'Mediterranean Delight', address: 'Mumbai', image: img, isOpen: false, rating: 4.3, reviews: 18, category: 'Mediterranean' },
// //   { id: 47, name: 'Greek Grill', address: 'Delhi', image: img, isOpen: true, rating: 4.5, reviews: 15, category: 'Mediterranean' },
// //   { id: 48, name: 'Med Bistro', address: 'Ahmedabad', image: img, isOpen: true, rating: 4.0, reviews: 10, category: 'Mediterranean' },
// //   { id: 49, name: 'Falafel House', address: 'Chennai', image: img, isOpen: true, rating: 3.8, reviews: 5, category: 'Mediterranean' },
// //   { id: 50, name: 'Olive Grove', address: 'Bangalore', image: img, isOpen: false, rating: 4.2, reviews: 12, category: 'Mediterranean' },
// // ];

// // export const restaurantStories = [
// //   {
// //     id: 1,
// //     title: "Burger",
// //     media: {
// //       type: "image",
// //       url: "src/assets/burger.jpg",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "src/assets/burger.jpg",
// //         duration: 5000, // 5 seconds for this image
// //       },
// //       {
// //         type: "video",
// //         url: "https://cdn.pixabay.com/video/2024/02/06/199545-910530517_large.mp4",
// //         duration: 15000, // 15 seconds for this video
// //       },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     title: "BBQ Restaurant",
// //     media: {
// //       type: "video",
// //       url: "https://media.istockphoto.com/id/823811800/video/chopping-peppers-in-a-restaurant.mp4?s=mp4-640x640-is&k=20&c=DL8ihxLoeAW4EGV2QEAhVMe7RYftL3s5LrVsCfTntNM=",
// //     },
// //     stories: [
// //       {
// //         type: "video",
// //         url: "https://media.istockphoto.com/id/1372422421/video/tom-yam-kung-spicy-thai-asian-soup-with-shrimp-rice-seafood-coconut-milk-and-chili-pepper-in.mp4?s=mp4-640x640-is&k=20&c=msR1tNgYbaan64P44fFJ4CzH1z04tz97vBrajLSeH0s=",
// //         duration: 20000, // 20 seconds for this video
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300",
// //         duration: 5000, // 5 seconds for this image
// //       },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     title: "Karahi",
// //     media: {
// //       type: "image",
// //       url: "src/assets/karahi.jpg",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300",
// //         duration: 4000, // 4 seconds for this image
// //       },
// //       {
// //         type: "video",
// //         url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
// //         duration: 10000, // 10 seconds for this video
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300",
// //         duration: 5000, // 5 seconds for this image
// //       },
// //     ],
// //   },
// // ];



// // export const couponsdata = [
// //   {
// //     expireDate: "Sat Aug 10 2024 11:29:59 AM",
// //     code: "RCR11",
// //     discount: "11%",
// //     description: "FESTIVAL",
// //     location: "Garden Bistro",
// //   },
// //   {
// //     expireDate: "Wed Aug 28 2024 2:00:00 PM",
// //     code: "merwas",
// //     discount: "$1",
// //     description: "",
// //     location: "Sazzy Sizzlers",
// //   },
// //   {
// //     expireDate: "Tue Sep 24 2024 11:29:59 AM",
// //     code: "RCR10",
// //     discount: "15%",
// //     description: "BUY 1 GET 1 FREE ON ALL PASTRIES!",
// //     location: "Garden Bistro",
// //   },
// // ];

// // export const favoriteRestaurants = [
// //   {
// //     img: 'https://images.pexels.com/photos/20117235/pexels-photo-20117235/free-photo-of-tray-with-hamburger-and-fries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
// //     title: 'Flavor Express',
// //     location: 'Sola Ahmedabad',
// //     rating: 4,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/1938272/pexels-photo-1938272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
// //     title: 'Spice Hub',
// //     location: 'Navrangpura',
// //     rating: 5,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/5908065/pexels-photo-5908065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// //     title: 'The Italian Bowl',
// //     location: 'SG Highway',
// //     rating: 3,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/4551621/pexels-photo-4551621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// //     title: 'Sandwich Corner',
// //     location: 'CG Road',
// //     rating: 4,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/5908046/pexels-photo-5908046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// //     title: 'Barbecue Nation',
// //     location: 'Prahlad Nagar',
// //     rating: 5,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/4491396/pexels-photo-4491396.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     title: 'Café Coffee Day',
// //     location: 'Law Garden',
// //     rating: 3,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     title: 'Pizza Hut',
// //     location: 'Bodakdev',
// //     rating: 4,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/26341209/pexels-photo-26341209/free-photo-of-close-up-of-a-dish-with-chicken.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     title: 'Burger King',
// //     location: 'Vastrapur',
// //     rating: 4,
// //   },
// // ];

// // export const favoritefood = [
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'Flavor Express',
// //     // location: 'Sola Ahmedabad',
// //     rating: 4,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/20117235/pexels-photo-20117235/free-photo-of-tray-with-hamburger-and-fries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
// //     title: 'Spice Hub',
// //     // location: 'Navrangpura',
// //     rating: 5,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'The Italian Bowl',
// //     // location: 'SG Highway',
// //     rating: 3,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'Sandwich Corner',
// //     // location: 'CG Road',
// //     rating: 4,
// //   },
// //   {
// //     img: 'https://images.pexels.com/photos/20117235/pexels-photo-20117235/free-photo-of-tray-with-hamburger-and-fries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
// //     title: 'Barbecue Nation',
// //     // location: 'Prahlad Nagar',
// //     rating: 5,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'Café Coffee Day',
// //     // location: 'Law Garden',
// //     rating: 3,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'Pizza Hut',
// //     // location: 'Bodakdev',
// //     rating: 4,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'Burger King',
// //     // location: 'Vastrapur',
// //     rating: 4,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'Subway',
// //     // location: 'Satellite',
// //     rating: 5,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'KFC',
// //     // location: 'Drive-In Road',
// //     rating: 3,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'Domino\'s Pizza',
// //     // location: 'Paldi',
// //     rating: 4,
// //   },
// //   {
// //     img: 'https://via.placeholder.com/300',
// //     title: 'Taco Bell',
// //     // location: 'Thaltej',
// //     rating: 5,
// //   },
// // ];

// // export const allrestaurants = [
// //   {
// //     id: 1,
// //     status: 'Open',
// //     imageUrl: 'https://images.pexels.com/photos/20117235/pexels-photo-20117235/free-photo-of-tray-with-hamburger-and-fries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
// //     name: 'Flavor Express',
// //     location: 'Sola Ahmedabad',
// //     rating: 4,
// //     reviews: 2,
// //   },
// //   {
// //     id: 2,
// //     status: 'Closed',
// //     imageUrl: 'https://images.pexels.com/photos/5908065/pexels-photo-5908065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// //     name: 'Spice Hub',
// //     location: 'Navrangpura',
// //     rating: 5,
// //     reviews: 10,
// //   },
// //   {
// //     id: 3,
// //     status: 'Open',
// //     imageUrl: 'https://images.pexels.com/photos/4551621/pexels-photo-4551621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// //     name: 'The Italian Bowl',
// //     location: 'SG Highway',
// //     rating: 3,
// //     reviews: 5,
// //   },
// //   {
// //     id: 4,
// //     status: 'Open',
// //     imageUrl: 'https://images.pexels.com/photos/9792546/pexels-photo-9792546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// //     name: 'Sandwich Corner',
// //     location: 'CG Road',
// //     rating: 4,
// //     reviews: 8,
// //   },
// //   {
// //     id: 5,
// //     status: 'Closed',
// //     imageUrl: 'https://images.pexels.com/photos/5908046/pexels-photo-5908046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// //     name: 'Barbecue Nation',
// //     location: 'Prahlad Nagar',
// //     rating: 5,
// //     reviews: 12,
// //   },
// //   {
// //     id: 6,
// //     status: 'Open',
// //     imageUrl: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     name: 'Café Coffee Day',
// //     location: 'Law Garden',
// //     rating: 3,
// //     reviews: 7,
// //   },
// //   {
// //     id: 7,
// //     status: 'Closed',
// //     imageUrl: 'https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     name: 'Pizza Hut',
// //     location: 'Bodakdev',
// //     rating: 4,
// //     reviews: 15,
// //   },
// //   {
// //     id: 8,
// //     status: 'Open',
// //     imageUrl: 'https://images.pexels.com/photos/26341209/pexels-photo-26341209/free-photo-of-close-up-of-a-dish-with-chicken.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     name: 'Burger King',
// //     location: 'Vastrapur',
// //     rating: 4,
// //     reviews: 20,
// //   },
 
// // ]

// // export const barfood = [
// //   {
// //     name: "Pizzaiollo",
// //     address: "Islamabad",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Pizza Hut",
// //     address: "Rawalpindi",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Dominoz",
// //     address: "Murree",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Pizzaiollo",
// //     address: "Attock",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   // Add more restaurants to
// // ];

// // export const newarrivals = [
// //   {
// //     src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner_small_3.png?alt=media&token=41ede59f-32b0-4067-bff4-9129d1ecd48a",
// //     alt: "New Arrival 1",
// //   },
// //   {
// //     src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner_small_1.png?alt=media&token=cec86a8b-c4f4-440c-a8ca-efc063078686",
// //     alt: "New Arrival 2",
// //   },
// //   {
// //     src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner_small_2_1720598405319.png?alt=media&token=61344fc9-a98d-49f7-a1a8-1ea507cd3d60",
// //     alt: "New Arrival 3",
// //   },
// // ];

// // //
// // export const categories = [
// //   { name: "Italian", icon: "🍝" },
// //   { name: "Sandwiches", icon: "🥪" },
// //   { name: "Bar Food", icon: "🍻" },
// //   { name: "Burger", icon: "🍔" },
// //   { name: "Japanese", icon: "🍣" },
// //   { name: "Mexican", icon: "🌮" },
// //   { name: "Ramen", icon: "🍜" },
// //   { name: "Mediterranean", icon: "🥙" },
// //   { name: 'Pizza', icon: '🍕' },
// //   // { name: 'Chinese', icon: '🍜' },
// //   // { name: 'Indian', icon: '🍛' },
// //   // { name: 'Thai', icon: '🍲' },
// //   // { name: 'Vietnamese', icon: '🍜' },
// //   // { name: 'American', icon: '🍔' },
// //   // { name: 'Breakfast', icon: '🍳' },
// //   // { name: 'Desserts', icon: '🍨' },
// //   // { name: 'Cafe', icon: '☕' },
// //   // { name: 'Healthy', icon: '🥗' },
// //   // { name: 'Vegetarian', icon: '🥦' },
// //   // { name: 'Vegan', icon: '🥑' },
// //   // { name: 'Gluten-Free', icon: '🌾' },
// //   // { name: 'Halal', icon: '🥩' },
// //   // { name: 'Kosher', icon: '🥯' },
// //   // { name: 'Organic', icon: '🌿' },
// //   // { name: 'Seafood', icon: '🦞' },
// //   // { name: 'Soul Food', icon: '🍗' },
// //   // { name: 'Steakhouse', icon: '🥩' },
// //   // { name: 'Sushi', icon: '🍣' },
// //   // { name: 'Tapas', icon: '🍢' },
// //   // { name: 'Turkish', icon: '🥙' },
// //   // { name: 'Wings', icon: '🍗' },
// //   // { name: 'Wraps', icon: '🌯' },
// //   // { name: 'African', icon: '🍛' },
// //   // { name: 'Caribbean', icon: '🍛' },
// //   // { name: 'Greek', icon: '🥗' },
// //   // { name: 'Lebanese', icon: '🥙' },
// //   // { name: 'Moroccan', icon: '🍛' },
// //   // { name: 'Ethiopian', icon: '🍛' },
// //   // { name: 'Korean', icon: '🍜' },
// //   // { name: 'Pakistani', icon: '🍛' },
// // ];

// // export const CategoriesData = [
// //   {
// //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fitalian_1715686677382.png?alt=media&token=c3789969-4265-4d1e-918a-28362ca5a666",
// //     name: "talian",
// //   },
// //   {
// //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fsandwiche_1_1690278865210.jpg?alt=media&token=630fdd23-eb12-4c70-8e63-124ed5f41e24",
// //     name: "Sandwiches",
// //   },
// //   {
// //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
// //     name: "Bar Food",
// //   },
// //   {
// //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fburger_1715686709330.png?alt=media&token=f5dbc0f4-7832-4cbf-b783-883191c5f60c",
// //     name: "Burger",
// //   },
// //   {
// //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FJapanese_1715686640773.png?alt=media&token=9069ad37-398d-43a1-9700-f2203cf92a7c",
// //     name: "Japaneses",
// //   },
// //   {
// //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fnew_maxican_1715686727539.png?alt=media&token=f306bacb-460d-4d9a-8df1-982ff87d57fd",
// //     name: "Mexican",
// //   },
// //   {
// //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Framen_1715686857973.png?alt=media&token=e9a3fc40-3bd0-427e-a6e9-23d26a8c31d5",
// //     name: "Reman",
// //   },
// // ];
// // export const cardData = {
// //   title: "Top Categories",
// //   subtitle: "Italian Cuisine",
// //   location: "New York, NY",
// //   images:
// //     "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fitalian_1715686677382.png?alt=media&token=c3789969-4265-4d1e-918a-28362ca5a666",
// //   rating: "4.5",
// // };

// // export const italin = [
// //   {
// //     subtile: "ABC",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
// //     rating: "0.0",
// //     location: "HSA",
// //   },
// //   {
// //     subtile: "Treat Cafe & Restaurant",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F23d0ecce5c77b83a19a1b1df4e47ed1f_1720531514703.jpg?alt=media&token=da83a62f-707c-4809-a295-83ec24c0c9cf",
// //     rating: "0.0",
// //     location: "Surat",
// //   },
// //   {
// //     subtile: "Spice Aroma",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FFood%20Restaurant_1720532466507.jfif?alt=media&token=bf6b988b-2795-4391-a0ee-64622e5da33a",
// //     rating: "3.5",
// //     location: "Islamabad",
// //   },
// //   {
// //     subtile: "AQWA",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
// //     rating: "0.0",
// //     location: "NIH",
// //   },
// // ];

// // export const rest = [
// //   {
// //     subtile: "Pizza hut",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/flutter%2FuberEats%2FproductImages%2F40fb7286-a826-4d1a-a69d-01b02e0aa68d.png?alt=media&token=1f22e05c-4f8a-4634-99f0-53a08ad7ff8c",
// //     rating: "0.0",
// //     location: "M4QR+9M4, Islamabad, Islamabad Capital Territory,",
// //   },
// // ];

// // export const Sandwiche = [
// //   {
// //     subtile: "Food & Foodie",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
// //     rating: "5.0",
// //     location: "Vejalpur, Ahmedabad, Gujarat, India",
// //   },
// //   {
// //     subtile: "Flavor Express",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbrooke-lark-HlNcigvUi4Q-unsplash_1720530950850.jpg?alt=media&token=a51976c0-ade8-4974-bbf2-1e047399513d",
// //     rating: "4.3",
// //     location: "Sola Ahmedabad",
// //   },
// //   {
// //     subtile: "The Spice Factory",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fflavours_1716445910141.jpg?alt=media&token=8996ee02-9e07-45a8-8745-b7d46d449c45",
// //     rating: "5.0",
// //     location: "10, Kailash Dham Society, Anand Nagar, Surat, Gujarat",
// //   },
// //   {
// //     subtile: "Flavor Fiesta",
// //     image:
// //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fgabriella-clare-marino-GgoC9kbN-mk-unsplash_1720532616185.jpg?alt=media&token=84cf2b25-ea44-4542-b8e7-5fc7933fbdbe",
// //     rating: "5.0",
// //     location: "DHA",
// //   },
// // ];

// // export const addresses = [
// //   {
// //     id: 1,
// //     location: 'Soan heights2, street 25, Block B,Islamabad, Islamabad Capital Territory, Pakistan',
// //     type: 'Home',
// //     isDefault: false,
// //   },
// //   {
// //     id: 2,
// //     location: 'Soan Garden, soan heights 2, Street 25, Block B,Islamabad, Islamabad Capital Territory, Pakistan',
// //     type: 'Work',
// //     isDefault: true,
// //   },
// //   {
// //     id: 3,
// //     location: 'i8,Islamabad, Islamabad Capital Territory, Pakistan',
// //     type: 'Hotel',
// //     isDefault: false,
// //   },
// // ];


// // export const foodItems = [
// //   {
// //     id: 1,
// //     img: 'https://images.pexels.com/photos/850922/pexels-photo-850922.jpeg?auto=compress&cs=tinysrgb&w=600', // Pepperoni Pizza
// //     name: 'Pepperoni Pizza',
// //     price: 138,
// //     originalPrice: 155,
// //     rating: 4.5,
// //     reviews: 2,
// //     isVeg: false,
// //     category: 'Pizza'
// //   },
// //   {
// //     id: 2,
// //     img: 'https://images.pexels.com/photos/11260125/pexels-photo-11260125.jpeg?auto=compress&cs=tinysrgb&w=600', // Margherita Pizza
// //     name: 'Margherita Pizza',
// //     price: 120,
// //     originalPrice: 135,
// //     rating: 4.7,
// //     reviews: 3,
// //     isVeg: true,
// //     category: 'Italian'
// //   },
// //   {
// //     id: 3,
// //     img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600', // General Pizza Image
// //     name: 'Pizza',
// //     price: 120,
// //     originalPrice: 135,
// //     rating: 4.7,
// //     reviews: 4,
// //     isVeg: true,
// //     category: 'Bar Food'
// //   },
// //   // Add more items...
// // ];


// // export const accordionData = [
// //   {
// //     category: 'Basics',
// //     items: [
// //       { question: 'Do you have any built-in caching?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'Can I add/upgrade my plan at any time?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'What access comes with hosting plan?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'How do I change my password?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //     ],
// //   },
// //   {
// //     category: 'Account',
// //     items: [
// //       { question: 'How do I change my password?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....' },
// //       { question: 'How do I delete my account?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'How do I change my account settings?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'I forgot my password. How do i reset it?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....' },
// //     ],
// //   },
// // ];

// // export const termsData = [
// //   {
// //     paragraphs: [
// //       "Welcome to Foodie! These terms and conditions outline the rules and regulations for the use of the Foodie website and services.",
// //       "By accessing this website and using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please refrain from using our website and services.",
// //     ],
// //   },
// //   {
// //     title: "1. Use of Service",
// //     items: [
// //       {
// //         number: "1.1.",
// //         text: "Foodie provides a platform for users to discover, share, and engage with food-related content, including recipes, reviews, and culinary tips.",
// //       },
// //       {
// //         number: "1.2.",
// //         text: "You agree to provide accurate and complete information when creating an account on Foodie. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
// //       },
// //       {
// //         number: "1.3.",
// //         text: "You agree not to use Foodie for any illegal or unauthorized purpose. You may not violate any laws in your jurisdiction when using our services.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "2. User Content",
// //     items: [
// //       {
// //         number: "2.1.",
// //         text: "Users may submit content to Foodie, including recipes, photos, videos, and reviews ('User Content'). By submitting User Content, you grant Foodie a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content throughout the world in any media.",
// //       },
// //       {
// //         number: "2.2.",
// //         text: "You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish User Content on Foodie.",
// //       },
// //       {
// //         number: "2.3.",
// //         text: "Foodie reserves the right to review, edit, remove, or refuse to publish any User Content in its sole discretion.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "3. Intellectual Property",
// //     items: [
// //       {
// //         number: "3.1.",
// //         text: "All content and materials available on Foodie, including but not limited to text, graphics, logos, images, and software, are the property of Foodie or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
// //       },
// //       {
// //         number: "3.2.",
// //         text: "You may not use, reproduce, modify, adapt, publish, distribute, transmit, display, or exploit any content from Foodie without the prior written consent of Foodie or the respective rights holder.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "4. Third-Party Links",
// //     items: [
// //       {
// //         number: "4.1.",
// //         text: "Foodie may contain links to third-party websites or services that are not owned or controlled by Foodie. Foodie has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
// //       },
// //       {
// //         number: "4.2.",
// //         text: "You acknowledge and agree that Foodie shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "5. Disclaimer of Warranties",
// //     items: [
// //       {
// //         number: "5.1.",
// //         text: "Foodie provides its services on an 'as-is' and 'as-available' basis, without any warranties of any kind, express or implied.",
// //       },
// //       {
// //         number: "5.2.",
// //         text: "Foodie makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, suitability, or availability of its services or the content contained therein.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "6. Limitation of Liability",
// //     items: [
// //       {
// //         number: "6.1.",
// //         text: "In no event shall Foodie, its officers, directors, employees, or agents, be liable to you for any indirect, consequential, special, incidental, or punitive damages arising out of or in connection with your use of Foodie, whether based on warranty, contract, tort (including negligence), or any other legal theory.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "7. Indemnification",
// //     items: [
// //       {
// //         number: "7.1.",
// //         text: "You agree to indemnify and hold harmless Foodie, its officers, directors, employees, and agents, from and against any and all claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of Foodie or your violation of these terms and conditions.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "8. Changes to Terms",
// //     items: [
// //       {
// //         number: "8.1.",
// //         text: "Foodie reserves the right to modify or replace these terms and conditions at any time. It is your responsibility to review these terms periodically for changes. Your continued use of Foodie following the posting of any changes to these terms and conditions constitutes acceptance of those changes.",
// //       },
// //     ],
// //   },
// // ];

// // export const privacyPolicyData = [
// //   {
// //     paragraphs: [
// //       "At Foodie, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website and services.",
// //     ],
// //   },
// //   {
// //     title: "1. Information We Collect",
// //     items: [
// //       {
// //         number: "1.1.",
// //         text: "Personal Information: When you create an account on Foodie, we may collect personal information such as your name, email address, and other contact details.",
// //       },
// //       {
// //         number: "1.2.",
// //         text: "User Content: When you interact with our website and services, including posting recipes, reviews, and comments, we may collect the content you submit.",
// //       },
// //       {
// //         number: "1.3.",
// //         text: "Automatically Collected Information: We may automatically collect certain information about your device, including your IP address, browser type, operating system, and other usage details when you access our website.",
// //       },
// //       {
// //         number: "1.4.",
// //         text: "Cookies: We may use cookies and similar tracking technologies to enhance your experience on Foodie. Cookies are small files stored on your device that may include an anonymous unique identifier.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "2. How We Use Your Information",
// //     items: [
// //       {
// //         number: "2.1.",
// //         text: "To Provide and Improve Our Services: We use your information to provide and personalize our services, improve our website and services, and respond to your inquiries and requests.",
// //       },
// //       {
// //         number: "2.2.",
// //         text: "Communication: We may use your email address to send you updates, newsletters, and other communications related to Foodie. You may opt out of receiving these communications at any time.",
// //       },
// //       {
// //         number: "2.3.",
// //         text: "Analytics: We may use your information for analytical purposes, including tracking usage trends, monitoring the effectiveness of our marketing efforts, and gathering demographic information.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "3. How We Share Your Information",
// //     items: [
// //       {
// //         number: "3.1.",
// //         text: "Third-Party Service Providers: We may share your information with third-party service providers that help us operate our website and provide our services, including hosting providers, analytics providers, and payment processors.",
// //       },
// //       {
// //         number: "3.2.",
// //         text: "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
// //       },
// //       {
// //         number: "3.3.",
// //         text: "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "4. Data Security",
// //     items: [
// //       {
// //         number: "4.1.",
// //         text: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "5. Your Choices",
// //     items: [
// //       {
// //         number: "5.1.",
// //         text: "Account Information: You may update or delete your account information at any time by logging into your account settings.",
// //       },
// //       {
// //         number: "5.2.",
// //         text: "Cookies: You can choose to accept or decline cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of Foodie.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "6. Children's Privacy",
// //     items: [
// //       {
// //         number: "6.1.",
// //         text: "Foodie is not intended for children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us immediately.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "7. Changes to This Privacy Policy",
// //     items: [
// //       {
// //         number: "7.1.",
// //         text: "We may update this Privacy Policy from time to time by posting a new version on our website. You are advised to review this Privacy Policy periodically for any changes.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "8. Contact Us",
// //     items: [
// //       {
// //         number: "8.1.",
// //         text: "If you have any questions or concerns about this Privacy Policy, please contact us.",
// //       },
// //     ],
// //   },
// //   {
// //     paragraphs: [
// //       "By using Foodie, you consent to the terms of this Privacy Policy. Thank you for trusting us with your information.",
// //     ],
// //   },
// // ];



// //  import img from "../assets/karahi.jpg";

// // export const restaurants = [
// //   // Pakistani
// //   {
// //     id: 1,
// //     name: "Kolachi Restaurant",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.8,
// //     reviews: 120,
// //     category: "Pakistani",
// //   },
// //   {
// //     id: 2,
// //     name: "Haveli Restaurant",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.7,
// //     reviews: 98,
// //     category: "Pakistani",
// //   },
// //   {
// //     id: 3,
// //     name: "Monal Restaurant",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.9,
// //     reviews: 150,
// //     category: "Pakistani",
// //   },
// //   {
// //     id: 4,
// //     name: "Andaaz Restaurant",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 85,
// //     category: "Pakistani",
// //   },

// //   // BBQ
// //   {
// //     id: 5,
// //     name: "Bundu Khan",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 78,
// //     category: "BBQ",
// //   },
// //   {
// //     id: 6,
// //     name: "Afridi BBQ",
// //     address: "Peshawar",
// //     image:
// //       "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
// //     isOpen: true,
// //     rating: 4.7,
// //     reviews: 92,
// //     category: "BBQ",
// //   },
// //   {
// //     id: 7,
// //     name: "Karachi BBQ",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.4,
// //     reviews: 65,
// //     category: "BBQ",
// //   },

// //   // Biryani
// //   {
// //     id: 8,
// //     name: "Student Biryani",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 88,
// //     category: "Biryani",
// //   },
// //   {
// //     id: 9,
// //     name: "Biryani Centre",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 75,
// //     category: "Biryani",
// //   },
// //   {
// //     id: 10,
// //     name: "Karachi Biryani House",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.7,
// //     reviews: 95,
// //     category: "Biryani",
// //   },

// //   // Fast Food
// //   {
// //     id: 11,
// //     name: "Howdy",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     isOpen: true,
// //     rating: 4.3,
// //     reviews: 62,
// //     category: "Fast Food",
// //   },
// //   {
// //     id: 12,
// //     name: "Burger Lab",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 78,
// //     category: "Fast Food",
// //   },
// //   {
// //     id: 13,
// //     name: "Burger O'Clock",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
// //     isOpen: true,
// //     rating: 4.4,
// //     reviews: 70,
// //     category: "Fast Food",
// //   },

// //   // Desi
// //   {
// //     id: 14,
// //     name: "Des Pardes",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 85,
// //     category: "Desi",
// //   },
// //   {
// //     id: 15,
// //     name: "Ghousia Restaurant",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 80,
// //     category: "Desi",
// //   },
// //   {
// //     id: 16,
// //     name: "Usmania Restaurant",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.7,
// //     reviews: 90,
// //     category: "Desi",
// //   },

// //   // Chinese
// //   {
// //     id: 17,
// //     name: "Ginyaki",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.4,
// //     reviews: 72,
// //     category: "Chinese",
// //   },
// //   {
// //     id: 18,
// //     name: "Dynasty",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 85,
// //     category: "Chinese",
// //   },
// //   {
// //     id: 19,
// //     name: "Chop Chop Wok",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 78,
// //     category: "Chinese",
// //   },

// //   // Pizza
// //   {
// //     id: 20,
// //     name: "Broadway Pizza",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 80,
// //     category: "Pizza",
// //   },
// //   {
// //     id: 21,
// //     name: "14th Street Pizza",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 85,
// //     category: "Pizza",
// //   },
// //   {
// //     id: 22,
// //     name: "Pizza Point",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
// //     isOpen: true,
// //     rating: 4.4,
// //     reviews: 75,
// //     category: "Pizza",
// //   },
// // ]

// // export const restaurantStories = [
// //   {
// //     id: 1,
// //     title: "Karahi Special",
// //     media: {
// //       type: "image",
// //       url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         duration: 5000,
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         duration: 5000,
// //       },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     title: "Biryani Festival",
// //     media: {
// //       type: "image",
// //       url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         duration: 5000,
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //         duration: 5000,
// //       },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     title: "BBQ Delights",
// //     media: {
// //       type: "image",
// //       url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
// //         duration: 5000,
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //         duration: 5000,
// //       },
// //     ],
// //   },
// // ]

// // export const couponsdata = [
// //   {
// //     expireDate: "Sat Aug 10 2024 11:29:59 AM",
// //     code: "KARACHI20",
// //     discount: "20%",
// //     description: "EID SPECIAL OFFER",
// //     location: "Karachi Restaurants",
// //   },
// //   {
// //     expireDate: "Wed Aug 28 2024 2:00:00 PM",
// //     code: "LAHORE15",
// //     discount: "15%",
// //     description: "WEEKEND SPECIAL",
// //     location: "Lahore Restaurants",
// //   },
// //   {
// //     expireDate: "Tue Sep 24 2024 11:29:59 AM",
// //     code: "ISLAMABAD10",
// //     discount: "10%",
// //     description: "NEW USER SPECIAL",
// //     location: "Islamabad Restaurants",
// //   },
// // ]

// // export const favoriteRestaurants = [
// //   {
// //     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     title: "Kolachi Restaurant",
// //     location: "Karachi",
// //     rating: 4.8,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     title: "Haveli Restaurant",
// //     location: "Lahore",
// //     rating: 4.7,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     title: "Student Biryani",
// //     location: "Karachi",
// //     rating: 4.6,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     title: "Howdy",
// //     location: "Lahore",
// //     rating: 4.3,
// //   },
// // ]

// // export const favoritefood = [
// //   {
// //     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     title: "Chicken Karahi",
// //     rating: 4.8,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     title: "Biryani",
// //     rating: 4.7,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     title: "Seekh Kabab",
// //     rating: 4.6,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     title: "Zinger Burger",
// //     rating: 4.5,
// //   },
// // ]

// // export const allrestaurants = [
// //   {
// //     id: 1,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Kolachi Restaurant",
// //     location: "Karachi",
// //     rating: 4.8,
// //     reviews: 120,
// //   },
// //   {
// //     id: 2,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Haveli Restaurant",
// //     location: "Lahore",
// //     rating: 4.7,
// //     reviews: 98,
// //   },
// //   {
// //     id: 3,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Student Biryani",
// //     location: "Karachi",
// //     rating: 4.6,
// //     reviews: 88,
// //   },
// //   {
// //     id: 4,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     name: "Howdy",
// //     location: "Lahore",
// //     rating: 4.3,
// //     reviews: 62,
// //   },
// //   {
// //     id: 5,
// //     status: "Closed",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     name: "Bundu Khan",
// //     location: "Lahore",
// //     rating: 4.5,
// //     reviews: 78,
// //   },
// //   {
// //     id: 6,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Ginyaki",
// //     location: "Lahore",
// //     rating: 4.4,
// //     reviews: 72,
// //   },
// //   {
// //     id: 7,
// //     status: "Closed",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
// //     name: "Broadway Pizza",
// //     location: "Lahore",
// //     rating: 4.5,
// //     reviews: 80,
// //   },
// //   {
// //     id: 8,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Monal Restaurant",
// //     location: "Islamabad",
// //     rating: 4.9,
// //     reviews: 150,
// //   },
// // ]

// // export const newarrivals = [
// //   {
// //     src: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     alt: "Chicken Karahi",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     alt: "Biryani Special",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     alt: "BBQ Platter",
// //   },
// // ]

// // export const categories = [
// //   { name: "Pakistani", icon: "🍲" },
// //   { name: "BBQ", icon: "🍖" },
// //   { name: "Biryani", icon: "🍚" },
// //   { name: "Fast Food", icon: "🍔" },
// //   { name: "Desi", icon: "🥘" },
// //   { name: "Chinese", icon: "🥢" },
// //   { name: "Pizza", icon: "🍕" },
// // ]

// // export const CategoriesData = [
// //   {
// //     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Pakistani",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     name: "BBQ",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Biryani",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     name: "Fast Food",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Desi",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Chinese",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
// //     name: "Pizza",
// //   },
// // ]

// // export const foodItems = [
// //   {
// //     id: 1,
// //     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Chicken Karahi",
// //     price: 800,
// //     originalPrice: 900,
// //     rating: 4.8,
// //     reviews: 120,
// //     isVeg: false,
// //     category: "Pakistani",
// //   },
// //   {
// //     id: 2,
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Chicken Biryani",
// //     price: 350,
// //     originalPrice: 400,
// //     rating: 4.7,
// //     reviews: 98,
// //     isVeg: false,
// //     category: "Biryani",
// //   },
// //   {
// //     id: 3,
// //     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     name: "Seekh Kabab",
// //     price: 250,
// //     originalPrice: 300,
// //     rating: 4.6,
// //     reviews: 85,
// //     isVeg: false,
// //     category: "BBQ",
// //   },
// // ]


// // export const accordionData = [
// //   {
// //     category: 'Basics',
// //     items: [
// //       { question: 'Do you have any built-in caching?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'Can I add/upgrade my plan at any time?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'What access comes with hosting plan?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'How do I change my password?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //     ],
// //   },
// //   {
// //     category: 'Account',
// //     items: [
// //       { question: 'How do I change my password?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....' },
// //       { question: 'How do I delete my account?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'How do I change my account settings?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'I forgot my password. How do i reset it?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....' },
// //     ],
// //   },
// // ];

// // export const termsData = [
// //   {
// //     paragraphs: [
// //       "Welcome to Foodie! These terms and conditions outline the rules and regulations for the use of the Foodie website and services.",
// //       "By accessing this website and using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please refrain from using our website and services.",
// //     ],
// //   },
// //   {
// //     title: "1. Use of Service",
// //     items: [
// //       {
// //         number: "1.1.",
// //         text: "Foodie provides a platform for users to discover, share, and engage with food-related content, including recipes, reviews, and culinary tips.",
// //       },
// //       {
// //         number: "1.2.",
// //         text: "You agree to provide accurate and complete information when creating an account on Foodie. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
// //       },
// //       {
// //         number: "1.3.",
// //         text: "You agree not to use Foodie for any illegal or unauthorized purpose. You may not violate any laws in your jurisdiction when using our services.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "2. User Content",
// //     items: [
// //       {
// //         number: "2.1.",
// //         text: "Users may submit content to Foodie, including recipes, photos, videos, and reviews ('User Content'). By submitting User Content, you grant Foodie a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content throughout the world in any media.",
// //       },
// //       {
// //         number: "2.2.",
// //         text: "You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish User Content on Foodie.",
// //       },
// //       {
// //         number: "2.3.",
// //         text: "Foodie reserves the right to review, edit, remove, or refuse to publish any User Content in its sole discretion.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "3. Intellectual Property",
// //     items: [
// //       {
// //         number: "3.1.",
// //         text: "All content and materials available on Foodie, including but not limited to text, graphics, logos, images, and software, are the property of Foodie or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
// //       },
// //       {
// //         number: "3.2.",
// //         text: "You may not use, reproduce, modify, adapt, publish, distribute, transmit, display, or exploit any content from Foodie without the prior written consent of Foodie or the respective rights holder.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "4. Third-Party Links",
// //     items: [
// //       {
// //         number: "4.1.",
// //         text: "Foodie may contain links to third-party websites or services that are not owned or controlled by Foodie. Foodie has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
// //       },
// //       {
// //         number: "4.2.",
// //         text: "You acknowledge and agree that Foodie shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "5. Disclaimer of Warranties",
// //     items: [
// //       {
// //         number: "5.1.",
// //         text: "Foodie provides its services on an 'as-is' and 'as-available' basis, without any warranties of any kind, express or implied.",
// //       },
// //       {
// //         number: "5.2.",
// //         text: "Foodie makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, suitability, or availability of its services or the content contained therein.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "6. Limitation of Liability",
// //     items: [
// //       {
// //         number: "6.1.",
// //         text: "In no event shall Foodie, its officers, directors, employees, or agents, be liable to you for any indirect, consequential, special, incidental, or punitive damages arising out of or in connection with your use of Foodie, whether based on warranty, contract, tort (including negligence), or any other legal theory.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "7. Indemnification",
// //     items: [
// //       {
// //         number: "7.1.",
// //         text: "You agree to indemnify and hold harmless Foodie, its officers, directors, employees, and agents, from and against any and all claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of Foodie or your violation of these terms and conditions.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "8. Changes to Terms",
// //     items: [
// //       {
// //         number: "8.1.",
// //         text: "Foodie reserves the right to modify or replace these terms and conditions at any time. It is your responsibility to review these terms periodically for changes. Your continued use of Foodie following the posting of any changes to these terms and conditions constitutes acceptance of those changes.",
// //       },
// //     ],
// //   },
// // ];

// // export const privacyPolicyData = [
// //   {
// //     paragraphs: [
// //       "At Foodie, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website and services.",
// //     ],
// //   },
// //   {
// //     title: "1. Information We Collect",
// //     items: [
// //       {
// //         number: "1.1.",
// //         text: "Personal Information: When you create an account on Foodie, we may collect personal information such as your name, email address, and other contact details.",
// //       },
// //       {
// //         number: "1.2.",
// //         text: "User Content: When you interact with our website and services, including posting recipes, reviews, and comments, we may collect the content you submit.",
// //       },
// //       {
// //         number: "1.3.",
// //         text: "Automatically Collected Information: We may automatically collect certain information about your device, including your IP address, browser type, operating system, and other usage details when you access our website.",
// //       },
// //       {
// //         number: "1.4.",
// //         text: "Cookies: We may use cookies and similar tracking technologies to enhance your experience on Foodie. Cookies are small files stored on your device that may include an anonymous unique identifier.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "2. How We Use Your Information",
// //     items: [
// //       {
// //         number: "2.1.",
// //         text: "To Provide and Improve Our Services: We use your information to provide and personalize our services, improve our website and services, and respond to your inquiries and requests.",
// //       },
// //       {
// //         number: "2.2.",
// //         text: "Communication: We may use your email address to send you updates, newsletters, and other communications related to Foodie. You may opt out of receiving these communications at any time.",
// //       },
// //       {
// //         number: "2.3.",
// //         text: "Analytics: We may use your information for analytical purposes, including tracking usage trends, monitoring the effectiveness of our marketing efforts, and gathering demographic information.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "3. How We Share Your Information",
// //     items: [
// //       {
// //         number: "3.1.",
// //         text: "Third-Party Service Providers: We may share your information with third-party service providers that help us operate our website and provide our services, including hosting providers, analytics providers, and payment processors.",
// //       },
// //       {
// //         number: "3.2.",
// //         text: "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
// //       },
// //       {
// //         number: "3.3.",
// //         text: "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "4. Data Security",
// //     items: [
// //       {
// //         number: "4.1.",
// //         text: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "5. Your Choices",
// //     items: [
// //       {
// //         number: "5.1.",
// //         text: "Account Information: You may update or delete your account information at any time by logging into your account settings.",
// //       },
// //       {
// //         number: "5.2.",
// //         text: "Cookies: You can choose to accept or decline cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of Foodie.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "6. Children's Privacy",
// //     items: [
// //       {
// //         number: "6.1.",
// //         text: "Foodie is not intended for children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us immediately.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "7. Changes to This Privacy Policy",
// //     items: [
// //       {
// //         number: "7.1.",
// //         text: "We may update this Privacy Policy from time to time by posting a new version on our website. You are advised to review this Privacy Policy periodically for any changes.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "8. Contact Us",
// //     items: [
// //       {
// //         number: "8.1.",
// //         text: "If you have any questions or concerns about this Privacy Policy, please contact us.",
// //       },
// //     ],
// //   },
// //   {
// //     paragraphs: [
// //       "By using Foodie, you consent to the terms of this Privacy Policy. Thank you for trusting us with your information.",
// //     ],
// //   },
// // ];

// // export const barfood = [
// //   {
// //     name: "Pizzaiollo",
// //     address: "Islamabad",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Pizza Hut",
// //     address: "Rawalpindi",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Dominoz",
// //     address: "Murree",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Pizzaiollo",
// //     address: "Attock",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   // Add more restaurants to
// // ];


// /////////////////////////////



// // export const restaurants = [
// //   // Pakistani
// //   {
// //     id: 1,
// //     name: "Kolachi Restaurant",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.8,
// //     reviews: 120,
// //     category: "Pakistani",
// //   },
// //   {
// //     id: 2,
// //     name: "Haveli Restaurant",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.7,
// //     reviews: 98,
// //     category: "Pakistani",
// //   },
// //   {
// //     id: 3,
// //     name: "Monal Restaurant",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.9,
// //     reviews: 150,
// //     category: "Pakistani",
// //   },
// //   {
// //     id: 4,
// //     name: "Andaaz Restaurant",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 85,
// //     category: "Pakistani",
// //   },

// //   // BBQ
// //   {
// //     id: 5,
// //     name: "Bundu Khan",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 78,
// //     category: "BBQ",
// //   },
// //   {
// //     id: 6,
// //     name: "Afridi BBQ",
// //     address: "Peshawar",
// //     image:
// //       "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
// //     isOpen: true,
// //     rating: 4.7,
// //     reviews: 92,
// //     category: "BBQ",
// //   },
// //   {
// //     id: 7,
// //     name: "Karachi BBQ",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.4,
// //     reviews: 65,
// //     category: "BBQ",
// //   },

// //   // Biryani
// //   {
// //     id: 8,
// //     name: "Student Biryani",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 88,
// //     category: "Biryani",
// //   },
// //   {
// //     id: 9,
// //     name: "Biryani Centre",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 75,
// //     category: "Biryani",
// //   },
// //   {
// //     id: 10,
// //     name: "Karachi Biryani House",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.7,
// //     reviews: 95,
// //     category: "Biryani",
// //   },

// //   // Fast Food
// //   {
// //     id: 11,
// //     name: "Howdy",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     isOpen: true,
// //     rating: 4.3,
// //     reviews: 62,
// //     category: "Fast Food",
// //   },
// //   {
// //     id: 12,
// //     name: "Burger Lab",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 78,
// //     category: "Fast Food",
// //   },
// //   {
// //     id: 13,
// //     name: "Burger O'Clock",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
// //     isOpen: true,
// //     rating: 4.4,
// //     reviews: 70,
// //     category: "Fast Food",
// //   },

// //   // Desi
// //   {
// //     id: 14,
// //     name: "Des Pardes",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 85,
// //     category: "Desi",
// //   },
// //   {
// //     id: 15,
// //     name: "Ghousia Restaurant",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 80,
// //     category: "Desi",
// //   },
// //   {
// //     id: 16,
// //     name: "Usmania Restaurant",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.7,
// //     reviews: 90,
// //     category: "Desi",
// //   },

// //   // Chinese
// //   {
// //     id: 17,
// //     name: "Ginyaki",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.4,
// //     reviews: 72,
// //     category: "Chinese",
// //   },
// //   {
// //     id: 18,
// //     name: "Dynasty",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 85,
// //     category: "Chinese",
// //   },
// //   {
// //     id: 19,
// //     name: "Chop Chop Wok",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 78,
// //     category: "Chinese",
// //   },

// //   // Pizza
// //   {
// //     id: 20,
// //     name: "Broadway Pizza",
// //     address: "Lahore",
// //     image:
// //       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
// //     isOpen: true,
// //     rating: 4.5,
// //     reviews: 80,
// //     category: "Pizza",
// //   },
// //   {
// //     id: 21,
// //     name: "14th Street Pizza",
// //     address: "Karachi",
// //     image:
// //       "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     isOpen: true,
// //     rating: 4.6,
// //     reviews: 85,
// //     category: "Pizza",
// //   },
// //   {
// //     id: 22,
// //     name: "Pizza Point",
// //     address: "Islamabad",
// //     image:
// //       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
// //     isOpen: true,
// //     rating: 4.4,
// //     reviews: 75,
// //     category: "Pizza",
// //   },
// // ]

// // export const restaurantStories = [
// //   {
// //     id: 1,
// //     title: "Karahi Special",
// //     media: {
// //       type: "image",
// //       url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         duration: 5000,
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         duration: 5000,
// //       },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     title: "Biryani Festival",
// //     media: {
// //       type: "image",
// //       url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         duration: 5000,
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //         duration: 5000,
// //       },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     title: "BBQ Delights",
// //     media: {
// //       type: "image",
// //       url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
// //         duration: 5000,
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //         duration: 5000,
// //       },
// //     ],
// //   },
// //   {
// //     id: 4,
// //     title: "Fast Food Favorites",
// //     media: {
// //       type: "image",
// //       url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     },
// //     stories: [
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
// //         duration: 5000,
// //       },
// //       {
// //         type: "image",
// //         url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
// //         duration: 5000,
// //       },
// //     ],
// //   },
// // ]

// // export const couponsdata = [
// //   {
// //     expireDate: "Sat Aug 10 2024 11:29:59 AM",
// //     code: "KARACHI20",
// //     discount: "20%",
// //     description: "EID SPECIAL OFFER",
// //     location: "Karachi Restaurants",
// //   },
// //   {
// //     expireDate: "Wed Aug 28 2024 2:00:00 PM",
// //     code: "LAHORE15",
// //     discount: "15%",
// //     description: "WEEKEND SPECIAL",
// //     location: "Lahore Restaurants",
// //   },
// //   {
// //     expireDate: "Tue Sep 24 2024 11:29:59 AM",
// //     code: "ISLAMABAD10",
// //     discount: "10%",
// //     description: "NEW USER SPECIAL",
// //     location: "Islamabad Restaurants",
// //   },
// // ]

// // export const favoriteRestaurants = [
// //   {
// //     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     title: "Kolachi Restaurant",
// //     location: "Karachi",
// //     rating: 4.8,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     title: "Haveli Restaurant",
// //     location: "Lahore",
// //     rating: 4.7,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     title: "Student Biryani",
// //     location: "Karachi",
// //     rating: 4.6,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     title: "Howdy",
// //     location: "Lahore",
// //     rating: 4.3,
// //   },
// // ]

// // export const favoritefood = [
// //   {
// //     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     title: "Chicken Karahi",
// //     rating: 4.8,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     title: "Biryani",
// //     rating: 4.7,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     title: "Seekh Kabab",
// //     rating: 4.6,
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     title: "Zinger Burger",
// //     rating: 4.5,
// //   },
// // ]

// // export const allrestaurants = [
// //   {
// //     id: 1,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Kolachi Restaurant",
// //     location: "Karachi",
// //     rating: 4.8,
// //     reviews: 120,
// //   },
// //   {
// //     id: 2,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Haveli Restaurant",
// //     location: "Lahore",
// //     rating: 4.7,
// //     reviews: 98,
// //   },
// //   {
// //     id: 3,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Student Biryani",
// //     location: "Karachi",
// //     rating: 4.6,
// //     reviews: 88,
// //   },
// //   {
// //     id: 4,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     name: "Howdy",
// //     location: "Lahore",
// //     rating: 4.3,
// //     reviews: 62,
// //   },
// //   {
// //     id: 5,
// //     status: "Closed",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     name: "Bundu Khan",
// //     location: "Lahore",
// //     rating: 4.5,
// //     reviews: 78,
// //   },
// //   {
// //     id: 6,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Ginyaki",
// //     location: "Lahore",
// //     rating: 4.4,
// //     reviews: 72,
// //   },
// //   {
// //     id: 7,
// //     status: "Closed",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
// //     name: "Broadway Pizza",
// //     location: "Lahore",
// //     rating: 4.5,
// //     reviews: 80,
// //   },
// //   {
// //     id: 8,
// //     status: "Open",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Monal Restaurant",
// //     location: "Islamabad",
// //     rating: 4.9,
// //     reviews: 150,
// //   },
// // ]

// // export const newarrivals = [
// //   {
// //     src: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     alt: "Chicken Karahi",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     alt: "Biryani Special",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     alt: "BBQ Platter",
// //   },
// // ]

// // export const categories = [
// //   { name: "Pakistani", icon: "🍲" },
// //   { name: "BBQ", icon: "🍖" },
// //   { name: "Biryani", icon: "🍚" },
// //   { name: "Fast Food", icon: "🍔" },
// //   { name: "Desi", icon: "🥘" },
// //   { name: "Chinese", icon: "🥢" },
// //   { name: "Pizza", icon: "🍕" },
// // ]

// // export const CategoriesData = [
// //   {
// //     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Pakistani",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     name: "BBQ",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Biryani",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
// //     name: "Fast Food",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Desi",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Chinese",
// //   },
// //   {
// //     img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
// //     name: "Pizza",
// //   },
// // ]

// // export const foodItems = [
// //   {
// //     id: 1,
// //     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     name: "Chicken Karahi",
// //     price: 800,
// //     originalPrice: 900,
// //     rating: 4.8,
// //     reviews: 120,
// //     isVeg: false,
// //     category: "Pakistani",
// //   },
// //   {
// //     id: 2,
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //     name: "Chicken Biryani",
// //     price: 350,
// //     originalPrice: 400,
// //     rating: 4.7,
// //     reviews: 98,
// //     isVeg: false,
// //     category: "Biryani",
// //   },
// //   {
// //     id: 3,
// //     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
// //     name: "Seekh Kabab",
// //     price: 250,
// //     originalPrice: 300,
// //     rating: 4.6,
// //     reviews: 85,
// //     isVeg: false,
// //     category: "BBQ",
// //   },
// // ]



// // export const accordionData = [
// //   {
// //     category: 'Basics',
// //     items: [
// //       { question: 'Do you have any built-in caching?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'Can I add/upgrade my plan at any time?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'What access comes with hosting plan?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'How do I change my password?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //     ],
// //   },
// //   {
// //     category: 'Account',
// //     items: [
// //       { question: 'How do I change my password?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....' },
// //       { question: 'How do I delete my account?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'How do I change my account settings?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
// //       { question: 'I forgot my password. How do i reset it?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....' },
// //     ],
// //   },
// // ];

// // export const termsData = [
// //   {
// //     paragraphs: [
// //       "Welcome to Foodie! These terms and conditions outline the rules and regulations for the use of the Foodie website and services.",
// //       "By accessing this website and using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please refrain from using our website and services.",
// //     ],
// //   },
// //   {
// //     title: "1. Use of Service",
// //     items: [
// //       {
// //         number: "1.1.",
// //         text: "Foodie provides a platform for users to discover, share, and engage with food-related content, including recipes, reviews, and culinary tips.",
// //       },
// //       {
// //         number: "1.2.",
// //         text: "You agree to provide accurate and complete information when creating an account on Foodie. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
// //       },
// //       {
// //         number: "1.3.",
// //         text: "You agree not to use Foodie for any illegal or unauthorized purpose. You may not violate any laws in your jurisdiction when using our services.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "2. User Content",
// //     items: [
// //       {
// //         number: "2.1.",
// //         text: "Users may submit content to Foodie, including recipes, photos, videos, and reviews ('User Content'). By submitting User Content, you grant Foodie a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content throughout the world in any media.",
// //       },
// //       {
// //         number: "2.2.",
// //         text: "You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish User Content on Foodie.",
// //       },
// //       {
// //         number: "2.3.",
// //         text: "Foodie reserves the right to review, edit, remove, or refuse to publish any User Content in its sole discretion.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "3. Intellectual Property",
// //     items: [
// //       {
// //         number: "3.1.",
// //         text: "All content and materials available on Foodie, including but not limited to text, graphics, logos, images, and software, are the property of Foodie or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
// //       },
// //       {
// //         number: "3.2.",
// //         text: "You may not use, reproduce, modify, adapt, publish, distribute, transmit, display, or exploit any content from Foodie without the prior written consent of Foodie or the respective rights holder.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "4. Third-Party Links",
// //     items: [
// //       {
// //         number: "4.1.",
// //         text: "Foodie may contain links to third-party websites or services that are not owned or controlled by Foodie. Foodie has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
// //       },
// //       {
// //         number: "4.2.",
// //         text: "You acknowledge and agree that Foodie shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "5. Disclaimer of Warranties",
// //     items: [
// //       {
// //         number: "5.1.",
// //         text: "Foodie provides its services on an 'as-is' and 'as-available' basis, without any warranties of any kind, express or implied.",
// //       },
// //       {
// //         number: "5.2.",
// //         text: "Foodie makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, suitability, or availability of its services or the content contained therein.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "6. Limitation of Liability",
// //     items: [
// //       {
// //         number: "6.1.",
// //         text: "In no event shall Foodie, its officers, directors, employees, or agents, be liable to you for any indirect, consequential, special, incidental, or punitive damages arising out of or in connection with your use of Foodie, whether based on warranty, contract, tort (including negligence), or any other legal theory.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "7. Indemnification",
// //     items: [
// //       {
// //         number: "7.1.",
// //         text: "You agree to indemnify and hold harmless Foodie, its officers, directors, employees, and agents, from and against any and all claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of Foodie or your violation of these terms and conditions.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "8. Changes to Terms",
// //     items: [
// //       {
// //         number: "8.1.",
// //         text: "Foodie reserves the right to modify or replace these terms and conditions at any time. It is your responsibility to review these terms periodically for changes. Your continued use of Foodie following the posting of any changes to these terms and conditions constitutes acceptance of those changes.",
// //       },
// //     ],
// //   },
// // ];

// // export const privacyPolicyData = [
// //   {
// //     paragraphs: [
// //       "At Foodie, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website and services.",
// //     ],
// //   },
// //   {
// //     title: "1. Information We Collect",
// //     items: [
// //       {
// //         number: "1.1.",
// //         text: "Personal Information: When you create an account on Foodie, we may collect personal information such as your name, email address, and other contact details.",
// //       },
// //       {
// //         number: "1.2.",
// //         text: "User Content: When you interact with our website and services, including posting recipes, reviews, and comments, we may collect the content you submit.",
// //       },
// //       {
// //         number: "1.3.",
// //         text: "Automatically Collected Information: We may automatically collect certain information about your device, including your IP address, browser type, operating system, and other usage details when you access our website.",
// //       },
// //       {
// //         number: "1.4.",
// //         text: "Cookies: We may use cookies and similar tracking technologies to enhance your experience on Foodie. Cookies are small files stored on your device that may include an anonymous unique identifier.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "2. How We Use Your Information",
// //     items: [
// //       {
// //         number: "2.1.",
// //         text: "To Provide and Improve Our Services: We use your information to provide and personalize our services, improve our website and services, and respond to your inquiries and requests.",
// //       },
// //       {
// //         number: "2.2.",
// //         text: "Communication: We may use your email address to send you updates, newsletters, and other communications related to Foodie. You may opt out of receiving these communications at any time.",
// //       },
// //       {
// //         number: "2.3.",
// //         text: "Analytics: We may use your information for analytical purposes, including tracking usage trends, monitoring the effectiveness of our marketing efforts, and gathering demographic information.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "3. How We Share Your Information",
// //     items: [
// //       {
// //         number: "3.1.",
// //         text: "Third-Party Service Providers: We may share your information with third-party service providers that help us operate our website and provide our services, including hosting providers, analytics providers, and payment processors.",
// //       },
// //       {
// //         number: "3.2.",
// //         text: "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
// //       },
// //       {
// //         number: "3.3.",
// //         text: "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "4. Data Security",
// //     items: [
// //       {
// //         number: "4.1.",
// //         text: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "5. Your Choices",
// //     items: [
// //       {
// //         number: "5.1.",
// //         text: "Account Information: You may update or delete your account information at any time by logging into your account settings.",
// //       },
// //       {
// //         number: "5.2.",
// //         text: "Cookies: You can choose to accept or decline cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of Foodie.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "6. Children's Privacy",
// //     items: [
// //       {
// //         number: "6.1.",
// //         text: "Foodie is not intended for children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us immediately.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "7. Changes to This Privacy Policy",
// //     items: [
// //       {
// //         number: "7.1.",
// //         text: "We may update this Privacy Policy from time to time by posting a new version on our website. You are advised to review this Privacy Policy periodically for any changes.",
// //       },
// //     ],
// //   },
// //   {
// //     title: "8. Contact Us",
// //     items: [
// //       {
// //         number: "8.1.",
// //         text: "If you have any questions or concerns about this Privacy Policy, please contact us.",
// //       },
// //     ],
// //   },
// //   {
// //     paragraphs: [
// //       "By using Foodie, you consent to the terms of this Privacy Policy. Thank you for trusting us with your information.",
// //     ],
// //   },
// // ];

// // export const barfood = [
// //   {
// //     name: "Pizzaiollo",
// //     address: "Islamabad",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Pizza Hut",
// //     address: "Rawalpindi",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Dominoz",
// //     address: "Murree",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   {
// //     name: "Pizzaiollo",
// //     address: "Attock",
// //     image: img,
// //     isOpen: true,
// //     rating: 0,
// //     reviews: 0,
// //     category: "Italian",
// //   },
// //   // Add more restaurants to
// // ];



// ///////////////////////



// export const restaurants = [
//   // Pakistani
//   {
//     id: 1,
//     name: "Kolachi Restaurant",
//     address: "Karachi",
//     image:
//       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.8,
//     reviews: 120,
//     category: "Pakistani",
//   },
//   {
//     id: 2,
//     name: "Haveli Restaurant",
//     address: "Lahore",
//     image:
//       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.7,
//     reviews: 98,
//     category: "Pakistani",
//   },
//   {
//     id: 3,
//     name: "Monal Restaurant",
//     address: "Islamabad",
//     image:
//       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.9,
//     reviews: 150,
//     category: "Pakistani",
//   },
//   {
//     id: 4,
//     name: "Andaaz Restaurant",
//     address: "Islamabad",
//     image:
//       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.6,
//     reviews: 85,
//     category: "Pakistani",
//   },

//   // BBQ
//   {
//     id: 5,
//     name: "Bundu Khan",
//     address: "Lahore",
//     image:
//       "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     isOpen: true,
//     rating: 4.5,
//     reviews: 78,
//     category: "BBQ",
//   },
//   {
//     id: 6,
//     name: "Afridi BBQ",
//     address: "Peshawar",
//     image:
//       "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
//     isOpen: true,
//     rating: 4.7,
//     reviews: 92,
//     category: "BBQ",
//   },
//   {
//     id: 7,
//     name: "Karachi BBQ",
//     address: "Karachi",
//     image:
//       "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     isOpen: true,
//     rating: 4.4,
//     reviews: 65,
//     category: "BBQ",
//   },

//   // Biryani
//   {
//     id: 8,
//     name: "Student Biryani",
//     address: "Karachi",
//     image:
//       "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     isOpen: true,
//     rating: 4.6,
//     reviews: 88,
//     category: "Biryani",
//   },
//   {
//     id: 9,
//     name: "Biryani Centre",
//     address: "Lahore",
//     image:
//       "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.5,
//     reviews: 75,
//     category: "Biryani",
//   },
//   {
//     id: 10,
//     name: "Karachi Biryani House",
//     address: "Islamabad",
//     image:
//       "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     isOpen: true,
//     rating: 4.7,
//     reviews: 95,
//     category: "Biryani",
//   },

//   // Fast Food
//   {
//     id: 11,
//     name: "Howdy",
//     address: "Lahore",
//     image:
//       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
//     isOpen: true,
//     rating: 4.3,
//     reviews: 62,
//     category: "Fast Food",
//   },
//   {
//     id: 12,
//     name: "Burger Lab",
//     address: "Karachi",
//     image:
//       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
//     isOpen: true,
//     rating: 4.5,
//     reviews: 78,
//     category: "Fast Food",
//   },
//   {
//     id: 13,
//     name: "Burger O'Clock",
//     address: "Islamabad",
//     image:
//       "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
//     isOpen: true,
//     rating: 4.4,
//     reviews: 70,
//     category: "Fast Food",
//   },

//   // Desi
//   {
//     id: 14,
//     name: "Des Pardes",
//     address: "Lahore",
//     image:
//       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.6,
//     reviews: 85,
//     category: "Desi",
//   },
//   {
//     id: 15,
//     name: "Ghousia Restaurant",
//     address: "Karachi",
//     image:
//       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.5,
//     reviews: 80,
//     category: "Desi",
//   },
//   {
//     id: 16,
//     name: "Usmania Restaurant",
//     address: "Islamabad",
//     image:
//       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.7,
//     reviews: 90,
//     category: "Desi",
//   },

//   // Chinese
//   {
//     id: 17,
//     name: "Ginyaki",
//     address: "Lahore",
//     image:
//       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     isOpen: true,
//     rating: 4.4,
//     reviews: 72,
//     category: "Chinese",
//   },
//   {
//     id: 18,
//     name: "Dynasty",
//     address: "Karachi",
//     image:
//       "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
//     isOpen: true,
//     rating: 4.6,
//     reviews: 85,
//     category: "Chinese",
//   },
//   {
//     id: 19,
//     name: "Chop Chop Wok",
//     address: "Islamabad",
//     image:
//       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     isOpen: true,
//     rating: 4.5,
//     reviews: 78,
//     category: "Chinese",
//   },

//   // Pizza
//   {
//     id: 20,
//     name: "Broadway Pizza",
//     address: "Lahore",
//     image:
//       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
//     isOpen: true,
//     rating: 4.5,
//     reviews: 80,
//     category: "Pizza",
//   },
//   {
//     id: 21,
//     name: "14th Street Pizza",
//     address: "Karachi",
//     image:
//       "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     isOpen: true,
//     rating: 4.6,
//     reviews: 85,
//     category: "Pizza",
//   },
//   {
//     id: 22,
//     name: "Pizza Point",
//     address: "Islamabad",
//     image:
//       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
//     isOpen: true,
//     rating: 4.4,
//     reviews: 75,
//     category: "Pizza",
//   },
// ]

// export const restaurantStories = [
//   {
//     id: 1,
//     title: "Karahi Special",
//     media: {
//       type: "image",
//       url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     },
//     stories: [
//       {
//         type: "image",
//         url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         duration: 5000,
//       },
//       {
//         type: "image",
//         url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         duration: 5000,
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Biryani Festival",
//     media: {
//       type: "image",
//       url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     },
//     stories: [
//       {
//         type: "image",
//         url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         duration: 5000,
//       },
//       {
//         type: "image",
//         url: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//         duration: 5000,
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "BBQ Delights",
//     media: {
//       type: "image",
//       url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     },
//     stories: [
//       {
//         type: "image",
//         url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
//         duration: 5000,
//       },
//       {
//         type: "image",
//         url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//         duration: 5000,
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Fast Food Favorites",
//     media: {
//       type: "image",
//       url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
//     },
//     stories: [
//       {
//         type: "image",
//         url: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
//         duration: 5000,
//       },
//       {
//         type: "image",
//         url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
//         duration: 5000,
//       },
//     ],
//   },
// ]

// export const couponsdata = [
//   {
//     expireDate: "Sat Aug 10 2024 11:29:59 AM",
//     code: "KARACHI20",
//     discount: "20%",
//     description: "EID SPECIAL OFFER",
//     location: "Karachi Restaurants",
//   },
//   {
//     expireDate: "Wed Aug 28 2024 2:00:00 PM",
//     code: "LAHORE15",
//     discount: "15%",
//     description: "WEEKEND SPECIAL",
//     location: "Lahore Restaurants",
//   },
//   {
//     expireDate: "Tue Sep 24 2024 11:29:59 AM",
//     code: "ISLAMABAD10",
//     discount: "10%",
//     description: "NEW USER SPECIAL",
//     location: "Islamabad Restaurants",
//   },
// ]

// export const favoriteRestaurants = [
//   {
//     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     title: "Kolachi Restaurant",
//     location: "Karachi",
//     rating: 4.8,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     title: "Haveli Restaurant",
//     location: "Lahore",
//     rating: 4.7,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     title: "Student Biryani",
//     location: "Karachi",
//     rating: 4.6,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
//     title: "Howdy",
//     location: "Lahore",
//     rating: 4.3,
//   },
// ]

// export const favoritefood = [
//   {
//     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     title: "Chicken Karahi",
//     rating: 4.8,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     title: "Biryani",
//     rating: 4.7,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     title: "Seekh Kabab",
//     rating: 4.6,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
//     title: "Zinger Burger",
//     rating: 4.5,
//   },
// ]

// export const allrestaurants = [
//   {
//     id: 1,
//     status: "Open",
//     imageUrl:
//       "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     name: "Kolachi Restaurant",
//     location: "Karachi",
//     rating: 4.8,
//     reviews: 120,
//   },
//   {
//     id: 2,
//     status: "Open",
//     imageUrl:
//       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     name: "Haveli Restaurant",
//     location: "Lahore",
//     rating: 4.7,
//     reviews: 98,
//   },
//   {
//     id: 3,
//     status: "Open",
//     imageUrl:
//       "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     name: "Student Biryani",
//     location: "Karachi",
//     rating: 4.6,
//     reviews: 88,
//   },
//   {
//     id: 4,
//     status: "Open",
//     imageUrl:
//       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
//     name: "Howdy",
//     location: "Lahore",
//     rating: 4.3,
//     reviews: 62,
//   },
//   {
//     id: 5,
//     status: "Closed",
//     imageUrl:
//       "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     name: "Bundu Khan",
//     location: "Lahore",
//     rating: 4.5,
//     reviews: 78,
//   },
//   {
//     id: 6,
//     status: "Open",
//     imageUrl:
//       "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     name: "Ginyaki",
//     location: "Lahore",
//     rating: 4.4,
//     reviews: 72,
//   },
//   {
//     id: 7,
//     status: "Closed",
//     imageUrl:
//       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
//     name: "Broadway Pizza",
//     location: "Lahore",
//     rating: 4.5,
//     reviews: 80,
//   },
//   {
//     id: 8,
//     status: "Open",
//     imageUrl:
//       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     name: "Monal Restaurant",
//     location: "Islamabad",
//     rating: 4.9,
//     reviews: 150,
//   },
// ]

// export const newarrivals = [
//   {
//     src: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     alt: "Chicken Karahi",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     alt: "Biryani Special",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     alt: "BBQ Platter",
//   },
// ]

// export const categories = [
//   { name: "Pakistani", icon: "🍲" },
//   { name: "BBQ", icon: "🍖" },
//   { name: "Biryani", icon: "🍚" },
//   { name: "Fast Food", icon: "🍔" },
//   { name: "Desi", icon: "🥘" },
//   { name: "Chinese", icon: "🥢" },
//   { name: "Pizza", icon: "🍕" },
// ]

// export const CategoriesData = [
//   {
//     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     name: "Pakistani",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     name: "BBQ",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     name: "Biryani",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
//     name: "Fast Food",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     name: "Desi",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     name: "Chinese",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
//     name: "Pizza",
//   },
// ]

// export const foodItems = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     name: "Chicken Karahi",
//     price: 800,
//     originalPrice: 900,
//     rating: 4.8,
//     reviews: 120,
//     isVeg: false,
//     category: "Pakistani",
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     name: "Chicken Biryani",
//     price: 350,
//     originalPrice: 400,
//     rating: 4.7,
//     reviews: 98,
//     isVeg: false,
//     category: "Biryani",
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     name: "Seekh Kabab",
//     price: 250,
//     originalPrice: 300,
//     rating: 4.6,
//     reviews: 85,
//     isVeg: false,
//     category: "BBQ",
//   },
//   // Add more items for each category
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
//     name: "Margherita Pizza",
//     price: 450,
//     originalPrice: 500,
//     rating: 4.5,
//     reviews: 75,
//     isVeg: true,
//     category: "Italian",
//   },
//   {
//     id: 5,
//     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
//     name: "Zinger Burger",
//     price: 300,
//     originalPrice: 350,
//     rating: 4.4,
//     reviews: 65,
//     isVeg: false,
//     category: "Fast Food",
//   },
//   {
//     id: 6,
//     img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     name: "Chow Mein",
//     price: 280,
//     originalPrice: 320,
//     rating: 4.3,
//     reviews: 60,
//     isVeg: false,
//     category: "Chinese",
//   },
//   {
//     id: 7,
//     img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     name: "Butter Chicken",
//     price: 550,
//     originalPrice: 600,
//     rating: 4.7,
//     reviews: 90,
//     isVeg: false,
//     category: "Desi",
//   },
//   {
//     id: 8,
//     img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA7fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     name: "Pepperoni Pizza",
//     price: 500,
//     originalPrice: 550,
//     rating: 4.6,
//     reviews: 85,
//     isVeg: false,
//     category: "Pizza",
//   },
// ]



// export const accordionData = [
//   {
//     category: 'Basics',
//     items: [
//       { question: 'Do you have any built-in caching?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
//       { question: 'Can I add/upgrade my plan at any time?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
//       { question: 'What access comes with hosting plan?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
//       { question: 'How do I change my password?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
//     ],
//   },
//   {
//     category: 'Account',
//     items: [
//       { question: 'How do I change my password?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....' },
//       { question: 'How do I delete my account?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
//       { question: 'How do I change my account settings?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...' },
//       { question: 'I forgot my password. How do i reset it?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....' },
//     ],
//   },
// ];

// export const termsData = [
//   {
//     paragraphs: [
//       "Welcome to Foodie! These terms and conditions outline the rules and regulations for the use of the Foodie website and services.",
//       "By accessing this website and using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please refrain from using our website and services.",
//     ],
//   },
//   {
//     title: "1. Use of Service",
//     items: [
//       {
//         number: "1.1.",
//         text: "Foodie provides a platform for users to discover, share, and engage with food-related content, including recipes, reviews, and culinary tips.",
//       },
//       {
//         number: "1.2.",
//         text: "You agree to provide accurate and complete information when creating an account on Foodie. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
//       },
//       {
//         number: "1.3.",
//         text: "You agree not to use Foodie for any illegal or unauthorized purpose. You may not violate any laws in your jurisdiction when using our services.",
//       },
//     ],
//   },
//   {
//     title: "2. User Content",
//     items: [
//       {
//         number: "2.1.",
//         text: "Users may submit content to Foodie, including recipes, photos, videos, and reviews ('User Content'). By submitting User Content, you grant Foodie a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content throughout the world in any media.",
//       },
//       {
//         number: "2.2.",
//         text: "You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish User Content on Foodie.",
//       },
//       {
//         number: "2.3.",
//         text: "Foodie reserves the right to review, edit, remove, or refuse to publish any User Content in its sole discretion.",
//       },
//     ],
//   },
//   {
//     title: "3. Intellectual Property",
//     items: [
//       {
//         number: "3.1.",
//         text: "All content and materials available on Foodie, including but not limited to text, graphics, logos, images, and software, are the property of Foodie or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
//       },
//       {
//         number: "3.2.",
//         text: "You may not use, reproduce, modify, adapt, publish, distribute, transmit, display, or exploit any content from Foodie without the prior written consent of Foodie or the respective rights holder.",
//       },
//     ],
//   },
//   {
//     title: "4. Third-Party Links",
//     items: [
//       {
//         number: "4.1.",
//         text: "Foodie may contain links to third-party websites or services that are not owned or controlled by Foodie. Foodie has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
//       },
//       {
//         number: "4.2.",
//         text: "You acknowledge and agree that Foodie shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.",
//       },
//     ],
//   },
//   {
//     title: "5. Disclaimer of Warranties",
//     items: [
//       {
//         number: "5.1.",
//         text: "Foodie provides its services on an 'as-is' and 'as-available' basis, without any warranties of any kind, express or implied.",
//       },
//       {
//         number: "5.2.",
//         text: "Foodie makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, suitability, or availability of its services or the content contained therein.",
//       },
//     ],
//   },
//   {
//     title: "6. Limitation of Liability",
//     items: [
//       {
//         number: "6.1.",
//         text: "In no event shall Foodie, its officers, directors, employees, or agents, be liable to you for any indirect, consequential, special, incidental, or punitive damages arising out of or in connection with your use of Foodie, whether based on warranty, contract, tort (including negligence), or any other legal theory.",
//       },
//     ],
//   },
//   {
//     title: "7. Indemnification",
//     items: [
//       {
//         number: "7.1.",
//         text: "You agree to indemnify and hold harmless Foodie, its officers, directors, employees, and agents, from and against any and all claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of Foodie or your violation of these terms and conditions.",
//       },
//     ],
//   },
//   {
//     title: "8. Changes to Terms",
//     items: [
//       {
//         number: "8.1.",
//         text: "Foodie reserves the right to modify or replace these terms and conditions at any time. It is your responsibility to review these terms periodically for changes. Your continued use of Foodie following the posting of any changes to these terms and conditions constitutes acceptance of those changes.",
//       },
//     ],
//   },
// ];

// export const privacyPolicyData = [
//   {
//     paragraphs: [
//       "At Foodie, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website and services.",
//     ],
//   },
//   {
//     title: "1. Information We Collect",
//     items: [
//       {
//         number: "1.1.",
//         text: "Personal Information: When you create an account on Foodie, we may collect personal information such as your name, email address, and other contact details.",
//       },
//       {
//         number: "1.2.",
//         text: "User Content: When you interact with our website and services, including posting recipes, reviews, and comments, we may collect the content you submit.",
//       },
//       {
//         number: "1.3.",
//         text: "Automatically Collected Information: We may automatically collect certain information about your device, including your IP address, browser type, operating system, and other usage details when you access our website.",
//       },
//       {
//         number: "1.4.",
//         text: "Cookies: We may use cookies and similar tracking technologies to enhance your experience on Foodie. Cookies are small files stored on your device that may include an anonymous unique identifier.",
//       },
//     ],
//   },
//   {
//     title: "2. How We Use Your Information",
//     items: [
//       {
//         number: "2.1.",
//         text: "To Provide and Improve Our Services: We use your information to provide and personalize our services, improve our website and services, and respond to your inquiries and requests.",
//       },
//       {
//         number: "2.2.",
//         text: "Communication: We may use your email address to send you updates, newsletters, and other communications related to Foodie. You may opt out of receiving these communications at any time.",
//       },
//       {
//         number: "2.3.",
//         text: "Analytics: We may use your information for analytical purposes, including tracking usage trends, monitoring the effectiveness of our marketing efforts, and gathering demographic information.",
//       },
//     ],
//   },
//   {
//     title: "3. How We Share Your Information",
//     items: [
//       {
//         number: "3.1.",
//         text: "Third-Party Service Providers: We may share your information with third-party service providers that help us operate our website and provide our services, including hosting providers, analytics providers, and payment processors.",
//       },
//       {
//         number: "3.2.",
//         text: "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
//       },
//       {
//         number: "3.3.",
//         text: "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.",
//       },
//     ],
//   },
//   {
//     title: "4. Data Security",
//     items: [
//       {
//         number: "4.1.",
//         text: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
//       },
//     ],
//   },
//   {
//     title: "5. Your Choices",
//     items: [
//       {
//         number: "5.1.",
//         text: "Account Information: You may update or delete your account information at any time by logging into your account settings.",
//       },
//       {
//         number: "5.2.",
//         text: "Cookies: You can choose to accept or decline cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of Foodie.",
//       },
//     ],
//   },
//   {
//     title: "6. Children's Privacy",
//     items: [
//       {
//         number: "6.1.",
//         text: "Foodie is not intended for children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us immediately.",
//       },
//     ],
//   },
//   {
//     title: "7. Changes to This Privacy Policy",
//     items: [
//       {
//         number: "7.1.",
//         text: "We may update this Privacy Policy from time to time by posting a new version on our website. You are advised to review this Privacy Policy periodically for any changes.",
//       },
//     ],
//   },
//   {
//     title: "8. Contact Us",
//     items: [
//       {
//         number: "8.1.",
//         text: "If you have any questions or concerns about this Privacy Policy, please contact us.",
//       },
//     ],
//   },
//   {
//     paragraphs: [
//       "By using Foodie, you consent to the terms of this Privacy Policy. Thank you for trusting us with your information.",
//     ],
//   },
// ];

// export const barfood = [
//   {
//     name: "Pizzaiollo",
//     address: "Islamabad",
//     image: img,
//     isOpen: true,
//     rating: 0,
//     reviews: 0,
//     category: "Italian",
//   },
//   {
//     name: "Pizza Hut",
//     address: "Rawalpindi",
//     image: img,
//     isOpen: true,
//     rating: 0,
//     reviews: 0,
//     category: "Italian",
//   },
//   {
//     name: "Dominoz",
//     address: "Murree",
//     image: img,
//     isOpen: true,
//     rating: 0,
//     reviews: 0,
//     category: "Italian",
//   },
//   {
//     name: "Pizzaiollo",
//     address: "Attock",
//     image: img,
//     isOpen: true,
//     rating: 0,
//     reviews: 0,
//     category: "Italian",
//   },
//   // Add more restaurants to
// ];



export const restaurants = [
  // Pakistani
  {
    id: 1,
    name: "Kolachi Restaurant",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.8,
    reviews: 120,
    category: "Pakistani",
  },
  {
    id: 2,
    name: "Haveli Restaurant",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.7,
    reviews: 98,
    category: "Pakistani",
  },
  {
    id: 3,
    name: "Monal Restaurant",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.9,
    reviews: 150,
    category: "Pakistani",
  },
  {
    id: 4,
    name: "Andaaz Restaurant",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.6,
    reviews: 85,
    category: "Pakistani",
  },

  // BBQ
  {
    id: 5,
    name: "Bundu Khan",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 78,
    category: "BBQ",
  },
  {
    id: 6,
    name: "Afridi BBQ",
    address: "Peshawar",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
    isOpen: true,
    rating: 4.7,
    reviews: 92,
    category: "BBQ",
  },
  {
    id: 7,
    name: "Karachi BBQ",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    isOpen: true,
    rating: 4.4,
    reviews: 65,
    category: "BBQ",
  },

  // Biryani
  {
    id: 8,
    name: "Student Biryani",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    isOpen: true,
    rating: 4.6,
    reviews: 88,
    category: "Biryani",
  },
  {
    id: 9,
    name: "Biryani Centre",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 75,
    category: "Biryani",
  },
  {
    id: 10,
    name: "Karachi Biryani House",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    isOpen: true,
    rating: 4.7,
    reviews: 95,
    category: "Biryani",
  },

  // Fast Food
  {
    id: 11,
    name: "Howdy",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
    isOpen: true,
    rating: 4.3,
    reviews: 62,
    category: "Fast Food",
  },
  {
    id: 12,
    name: "Burger Lab",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 78,
    category: "Fast Food",
  },
  {
    id: 13,
    name: "Burger O'Clock",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    isOpen: true,
    rating: 4.4,
    reviews: 70,
    category: "Fast Food",
  },

  // Desi
  {
    id: 14,
    name: "Des Pardes",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.6,
    reviews: 85,
    category: "Desi",
  },
  {
    id: 15,
    name: "Ghousia Restaurant",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 80,
    category: "Desi",
  },
  {
    id: 16,
    name: "Usmania Restaurant",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.7,
    reviews: 90,
    category: "Desi",
  },

  // Chinese
  {
    id: 17,
    name: "Ginyaki",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    isOpen: true,
    rating: 4.4,
    reviews: 72,
    category: "Chinese",
  },
  {
    id: 18,
    name: "Dynasty",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    isOpen: true,
    rating: 4.6,
    reviews: 85,
    category: "Chinese",
  },
  {
    id: 19,
    name: "Chop Chop Wok",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 78,
    category: "Chinese",
  },

  // Pizza
  {
    id: 20,
    name: "Broadway Pizza",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 80,
    category: "Pizza",
  },
  {
    id: 21,
    name: "14th Street Pizza",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.6,
    reviews: 85,
    category: "Pizza",
  },
  {
    id: 22,
    name: "Pizza Point",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
    isOpen: true,
    rating: 4.4,
    reviews: 75,
    category: "Pizza",
  },
]

export const restaurantStories = [
  {
    id: 5,
    title: "Karahi Special",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    stories: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: 5000,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: 5000,
      },
    ],
  },
  {
    id: 6,
    title: "Biryani Festival",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    stories: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: 5000,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        duration: 5000,
      },
    ],
  },
  {
    id: 7,
    title: "BBQ Delights",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    stories: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
        duration: 5000,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        duration: 5000,
      },
    ],
  },
  {
    id: 8,
    title: "Karahi Special",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    stories: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: 5000,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: 5000,
      },
    ],
  },
  {
    id: 2,
    title: "Biryani Festival",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    stories: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: 5000,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        duration: 5000,
      },
    ],
  },
  {
    id: 3,
    title: "BBQ Delights",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    stories: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
        duration: 5000,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        duration: 5000,
      },
    ],
  },
  {
    id: 4,
    title: "Fast Food Favorites",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
    },
    stories: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        duration: 5000,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        duration: 5000,
      },
    ],
  },
]

export const couponsdata = [
  {
    expireDate: "Sat Aug 10 2024 11:29:59 AM",
    code: "KARACHI20",
    discount: "20%",
    description: "EID SPECIAL OFFER",
    location: "Karachi Restaurants",
  },
  {
    expireDate: "Wed Aug 28 2024 2:00:00 PM",
    code: "LAHORE15",
    discount: "15%",
    description: "WEEKEND SPECIAL",
    location: "Lahore Restaurants",
  },
  {
    expireDate: "Tue Sep 24 2024 11:29:59 AM",
    code: "ISLAMABAD10",
    discount: "10%",
    description: "NEW USER SPECIAL",
    location: "Islamabad Restaurants",
  },
]

export const favoriteRestaurants = [
  {
    img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Kolachi Restaurant",
    location: "Karachi",
    rating: 4.8,
  },
  {
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Haveli Restaurant",
    location: "Lahore",
    rating: 4.7,
  },
  {
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    title: "Student Biryani",
    location: "Karachi",
    rating: 4.6,
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
    title: "Howdy",
    location: "Lahore",
    rating: 4.3,
  },
]

export const favoritefood = [
  {
    img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Chicken Karahi",
    rating: 4.8,
  },
  {
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    title: "Biryani",
    rating: 4.7,
  },
  {
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    title: "Seekh Kabab",
    rating: 4.6,
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
    title: "Zinger Burger",
    rating: 4.5,
  },
]

export const allrestaurants = [
  {
    id: 1,
    status: "Open",
    imageUrl:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Kolachi Restaurant",
    location: "Karachi",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: 2,
    status: "Open",
    imageUrl:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Haveli Restaurant",
    location: "Lahore",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    status: "Open",
    imageUrl:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    name: "Student Biryani",
    location: "Karachi",
    rating: 4.6,
    reviews: 88,
  },
  {
    id: 4,
    status: "Open",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
    name: "Howdy",
    location: "Lahore",
    rating: 4.3,
    reviews: 62,
  },
  {
    id: 5,
    status: "Closed",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    name: "Bundu Khan",
    location: "Lahore",
    rating: 4.5,
    reviews: 78,
  },
  {
    id: 6,
    status: "Open",
    imageUrl:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    name: "Ginyaki",
    location: "Lahore",
    rating: 4.4,
    reviews: 72,
  },
  {
    id: 7,
    status: "Closed",
    imageUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
    name: "Broadway Pizza",
    location: "Lahore",
    rating: 4.5,
    reviews: 80,
  },
  {
    id: 8,
    status: "Open",
    imageUrl:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Monal Restaurant",
    location: "Islamabad",
    rating: 4.9,
    reviews: 150,
  },
]

export const newarrivals = [
  {
    src: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Chicken Karahi",
  },
  {
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Biryani Special",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    alt: "BBQ Platter",
  },
]

export const categories = [
  { name: "Pakistani", icon: "🍲" },
  { name: "BBQ", icon: "🍖" },
  { name: "Biryani", icon: "🍚" },
  { name: "Fast Food", icon: "🍔" },
  { name: "Desi", icon: "🥘" },
  { name: "Chinese", icon: "🥢" },
  { name: "Pizza", icon: "🍕" },
]

export const CategoriesData = [
  {
    img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Pakistani",
  },
  {
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    name: "BBQ",
  },
  {
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    name: "Biryani",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
    name: "Fast Food",
  },
  {
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Desi",
  },
  {
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    name: "Chinese",
  },
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
    name: "Pizza",
  },
]

export const foodItems = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Chicken Karahi",
    price: 800,
    originalPrice: 900,
    rating: 4.8,
    reviews: 120,
    isVeg: false,
    category: "Pakistani",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    name: "Chicken Biryani",
    price: 350,
    originalPrice: 400,
    rating: 4.7,
    reviews: 98,
    isVeg: false,
    category: "Biryani",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    name: "Seekh Kabab",
    price: 250,
    originalPrice: 300,
    rating: 4.6,
    reviews: 85,
    isVeg: false,
    category: "BBQ",
  },
  // Add more items for each category
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
    name: "Margherita Pizza",
    price: 450,
    originalPrice: 500,
    rating: 4.5,
    reviews: 75,
    isVeg: true,
    category: "Italian",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
    name: "Zinger Burger",
    price: 300,
    originalPrice: 350,
    rating: 4.4,
    reviews: 65,
    isVeg: false,
    category: "Fast Food",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    name: "Chow Mein",
    price: 280,
    originalPrice: 320,
    rating: 4.3,
    reviews: 60,
    isVeg: false,
    category: "Chinese",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Butter Chicken",
    price: 550,
    originalPrice: 600,
    rating: 4.7,
    reviews: 90,
    isVeg: false,
    category: "Desi",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Pepperoni Pizza",
    price: 500,
    originalPrice: 550,
    rating: 4.6,
    reviews: 85,
    isVeg: false,
    category: "Pizza",
  },
]

// Adding the missing accordion data
export const accordionData = [
  {
    category: "Basics",
    items: [
      {
        question: "Do you have any built-in caching?",
        answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...",
      },
      {
        question: "Can I add/upgrade my plan at any time?",
        answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...",
      },
      {
        question: "What access comes with hosting plan?",
        answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...",
      },
      {
        question: "How do I change my password?",
        answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...",
      },
    ],
  },
  {
    category: "Account",
    items: [
      {
        question: "How do I change my password?",
        answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....",
      },
      {
        question: "How do I delete my account?",
        answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...",
      },
      {
        question: "How do I change my account settings?",
        answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...",
      },
      {
        question: "I forgot my password. How do i reset it?",
        answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ....",
      },
    ],
  },
]

export const termsData = [
  {
    paragraphs: [
      "Welcome to Foodie! These terms and conditions outline the rules and regulations for the use of the Foodie website and services.",
      "By accessing this website and using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please refrain from using our website and services.",
    ],
  },
  {
    title: "1. Use of Service",
    items: [
      {
        number: "1.1.",
        text: "Foodie provides a platform for users to discover, share, and engage with food-related content, including recipes, reviews, and culinary tips.",
      },
      {
        number: "1.2.",
        text: "You agree to provide accurate and complete information when creating an account on Foodie. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      },
      {
        number: "1.3.",
        text: "You agree not to use Foodie for any illegal or unauthorized purpose. You may not violate any laws in your jurisdiction when using our services.",
      },
    ],
  },
  {
    title: "2. User Content",
    items: [
      {
        number: "2.1.",
        text: "Users may submit content to Foodie, including recipes, photos, videos, and reviews ('User Content'). By submitting User Content, you grant Foodie a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content throughout the world in any media.",
      },
      {
        number: "2.2.",
        text: "You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish User Content on Foodie.",
      },
      {
        number: "2.3.",
        text: "Foodie reserves the right to review, edit, remove, or refuse to publish any User Content in its sole discretion.",
      },
    ],
  },
  {
    title: "3. Intellectual Property",
    items: [
      {
        number: "3.1.",
        text: "All content and materials available on Foodie, including but not limited to text, graphics, logos, images, and software, are the property of Foodie or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
      },
      {
        number: "3.2.",
        text: "You may not use, reproduce, modify, adapt, publish, distribute, transmit, display, or exploit any content from Foodie without the prior written consent of Foodie or the respective rights holder.",
      },
    ],
  },
  {
    title: "4. Third-Party Links",
    items: [
      {
        number: "4.1.",
        text: "Foodie may contain links to third-party websites or services that are not owned or controlled by Foodie. Foodie has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
      },
      {
        number: "4.2.",
        text: "You acknowledge and agree that Foodie shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.",
      },
    ],
  },
  {
    title: "5. Disclaimer of Warranties",
    items: [
      {
        number: "5.1.",
        text: "Foodie provides its services on an 'as-is' and 'as-available' basis, without any warranties of any kind, express or implied.",
      },
      {
        number: "5.2.",
        text: "Foodie makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, suitability, or availability of its services or the content contained therein.",
      },
    ],
  },
  {
    title: "6. Limitation of Liability",
    items: [
      {
        number: "6.1.",
        text: "In no event shall Foodie, its officers, directors, employees, or agents, be liable to you for any indirect, consequential, special, incidental, or punitive damages arising out of or in connection with your use of Foodie, whether based on warranty, contract, tort (including negligence), or any other legal theory.",
      },
    ],
  },
  {
    title: "7. Indemnification",
    items: [
      {
        number: "7.1.",
        text: "You agree to indemnify and hold harmless Foodie, its officers, directors, employees, and agents, from and against any and all claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of Foodie or your violation of these terms and conditions.",
      },
    ],
  },
  {
    title: "8. Changes to Terms",
    items: [
      {
        number: "8.1.",
        text: "Foodie reserves the right to modify or replace these terms and conditions at any time. It is your responsibility to review these terms periodically for changes. Your continued use of Foodie following the posting of any changes to these terms and conditions constitutes acceptance of those changes.",
      },
    ],
  },
]

export const privacyPolicyData = [
  {
    paragraphs: [
      "At Foodie, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website and services.",
    ],
  },
  {
    title: "1. Information We Collect",
    items: [
      {
        number: "1.1.",
        text: "Personal Information: When you create an account on Foodie, we may collect personal information such as your name, email address, and other contact details.",
      },
      {
        number: "1.2.",
        text: "User Content: When you interact with our website and services, including posting recipes, reviews, and comments, we may collect the content you submit.",
      },
      {
        number: "1.3.",
        text: "Automatically Collected Information: We may automatically collect certain information about your device, including your IP address, browser type, operating system, and other usage details when you access our website.",
      },
      {
        number: "1.4.",
        text: "Cookies: We may use cookies and similar tracking technologies to enhance your experience on Foodie. Cookies are small files stored on your device that may include an anonymous unique identifier.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    items: [
      {
        number: "2.1.",
        text: "To Provide and Improve Our Services: We use your information to provide and personalize our services, improve our website and services, and respond to your inquiries and requests.",
      },
      {
        number: "2.2.",
        text: "Communication: We may use your email address to send you updates, newsletters, and other communications related to Foodie. You may opt out of receiving these communications at any time.",
      },
      {
        number: "2.3.",
        text: "Analytics: We may use your information for analytical purposes, including tracking usage trends, monitoring the effectiveness of our marketing efforts, and gathering demographic information.",
      },
    ],
  },
  {
    title: "3. How We Share Your Information",
    items: [
      {
        number: "3.1.",
        text: "Third-Party Service Providers: We may share your information with third-party service providers that help us operate our website and provide our services, including hosting providers, analytics providers, and payment processors.",
      },
      {
        number: "3.2.",
        text: "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
      },
      {
        number: "3.3.",
        text: "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.",
      },
    ],
  },
  {
    title: "4. Data Security",
    items: [
      {
        number: "4.1.",
        text: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "5. Your Choices",
    items: [
      {
        number: "5.1.",
        text: "Account Information: You may update or delete your account information at any time by logging into your account settings.",
      },
      {
        number: "5.2.",
        text: "Cookies: You can choose to accept or decline cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of Foodie.",
      },
    ],
  },
  {
    title: "6. Children's Privacy",
    items: [
      {
        number: "6.1.",
        text: "Foodie is not intended for children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us immediately.",
      },
    ],
  },
  {
    title: "7. Changes to This Privacy Policy",
    items: [
      {
        number: "7.1.",
        text: "We may update this Privacy Policy from time to time by posting a new version on our website. You are advised to review this Privacy Policy periodically for any changes.",
      },
    ],
  },
  {
    title: "8. Contact Us",
    items: [
      {
        number: "8.1.",
        text: "If you have any questions or concerns about this Privacy Policy, please contact us.",
      },
    ],
  },
  {
    paragraphs: [
      "By using Foodie, you consent to the terms of this Privacy Policy. Thank you for trusting us with your information.",
    ],
  },
]

