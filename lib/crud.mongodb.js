/*
Let's create some sample data for our website.

--> For uploading data in Local MongoDB, I am using MongoDB Extension in VS Code and I used these operations mentioned below.
--> Please follow the instructions as I mentioned or check the reference link below below operating.
--> Uncomment the data one by one and run the MongoDB: Run all or Selection from Playground 

NOTE: Use should know on how to use the MongoDB Extension in VS Code otherwise gain some prevoius knowledge before jumping to the above steps.

⭐️ Use can generate data as you want this is just sample data but create a matching MongoDB Schema
*/

// Making Shop DataBase
// use("shop");

// Create Operation for Featured Products --> Use only one time
// db.createCollection("featured");

// Insert Operation for Featured Products --> Use only one time
// db.featured.insertMany([
//   {
//     name: "Lymio Men Shorts",
//     price: 499,
//     imageUrl: "https://m.media-amazon.com/images/I/71qJNrZhd1L._SY879_.jpg",
//   },
//   {
//     name: "Chinese Collor Short Kurta",
//     price: 429,
//     imageUrl: "https://m.media-amazon.com/images/I/61htv62052L._SY879_.jpg",
//   },
//   {
//     name: "Printed Kurta Pant With Dupatta",
//     price: 629,
//     imageUrl: "https://m.media-amazon.com/images/I/71Xvagl5gsL._SX679_.jpg",
//   },
//   {
//     name: "Regular Fit Printed Causal Shirt",
//     price: 469,
//     imageUrl: "https://m.media-amazon.com/images/I/51rfcSdQm1L._SY879_.jpg",
//   },
//   {
//     name: "Men's Casual Button Down Shirt",
//     price: 469,
//     imageUrl: "https://m.media-amazon.com/images/I/51-pLhPHoBL.jpg",
//   },
//   {
//     name: "Formal Korean Pant",
//     price: 999,
//     imageUrl: "https://m.media-amazon.com/images/I/51E7B1I0o-L._SY879_.jpg",
//   },
//   {
//     name: "High Waist Polycotton Trousers",
//     price: 549,
//     imageUrl: "https://m.media-amazon.com/images/I/51Z1I0OuWLL._SY879_.jpg",
//   },
//   {
//     name: "Textured Long Sleeve Casual Hawaiian Shirt",
//     price: 499,
//     imageUrl: "https://m.media-amazon.com/images/I/61AsTpnqgjL._SX679_.jpg",
//   },
//   {
//     name: "Embroidered Kurta And Pant",
//     price: 539,
//     imageUrl: "https://m.media-amazon.com/images/I/616taHvjmYL._SY879_.jpg",
//   },
//   {
//     name: "Casual Wear & Everyday Crop Tshirt",
//     price: 499,
//     imageUrl: "https://m.media-amazon.com/images/I/619yCfDUGpL._SX679_.jpg",
//   },
//   {
//     name: "Self Design Spread Collar Casual Shirt",
//     price: 379,
//     imageUrl: "https://m.media-amazon.com/images/I/71YJ3t5H0uL._SY879_.jpg",
//   },
// ]);

// Create Operation for Men Products --> Use only one time
// db.createCollection("men");

// Insert Operation for Men Products --> Use only one time
// db.men.insertMany([
//   {
//     name: "Cotton Rich Solid Polo Tshirt",
//     price: 419,
//     imageUrl: "https://m.media-amazon.com/images/I/713n+TxyfCL._SY879_.jpg",
//   },
//   {
//     name: "Regular Fit low Rise Cotton Solid Stylish Cargo Track Pants",
//     price: 396,
//     imageUrl: "https://m.media-amazon.com/images/I/71r3RWbLWAL._SY879_.jpg",
//   },
//   {
//     name: "Clothing Men's Colorblocked Cotton Hoodies Sweatshirt",
//     price: 594,
//     imageUrl: "https://m.media-amazon.com/images/I/51txbLKMYEL._SY879_.jpg",
//   },
//   {
//     name: "Solid Regular Fit T-Shirt",
//     price: 426,
//     imageUrl: "https://m.media-amazon.com/images/I/51s3QfodazL._SY879_.jpg",
//   },
//   {
//     name: "Cotton Blend Mandarin Collar Short Kurta",
//     price: 459,
//     imageUrl: "https://m.media-amazon.com/images/I/61SDTiZdvHL._SX679_.jpg",
//   },
//   {
//     name: "Cargo Pants Cotton",
//     price: 649,
//     imageUrl: "https://m.media-amazon.com/images/I/61rDp+s9DkL._SY879_.jpg",
//   },
//   {
//     name: "Solid Regular Fit Shirt with Hood",
//     price: 409,
//     imageUrl: "https://m.media-amazon.com/images/I/81g0TbV8RgL._SY879_.jpg",
//   },
//   {
//     name: "Spread Collar & Full Sleeves Shirt",
//     price: 469,
//     imageUrl: "https://m.media-amazon.com/images/I/51xf++hFJSL.jpg",
//   },
//   {
//     name: "Polo T Shirt",
//     price: 419,
//     imageUrl: "https://m.media-amazon.com/images/I/61NVTARMyoL._SY879_.jpg",
//   },
//   {
//     name: "Mutipurpose Activewear Cargo Pant",
//     price: 359,
//     imageUrl: "https://m.media-amazon.com/images/I/51ZWEnfVgwL._SY879_.jpg",
//   },
//   {
//     name: "Sports Full Sleeves T-Shirt",
//     price: 262,
//     imageUrl: "https://m.media-amazon.com/images/I/616bDUoOBjL._SX679_.jpg",
//   },
//   {
//     name: "Solid Slim Fit Textured Shirt",
//     price: 399,
//     imageUrl: "https://m.media-amazon.com/images/I/61cib+x2itL._SY879_.jpg",
//   },
//   {
//     name: "Mandarin Collar One Design Casual Short Kurta",
//     price: 419,
//     imageUrl: "https://m.media-amazon.com/images/I/71okmF4khEL._SX679_.jpg",
//   },
//   {
//     name: "Stylish Solid Satin Casual Shirt",
//     price: 469,
//     imageUrl: "https://m.media-amazon.com/images/I/61R1R+tsmLL._SX679_.jpg",
//   },
//   {
//     name: "Regular Fit Mid Rise Track Pant",
//     price: 592,
//     imageUrl: "https://m.media-amazon.com/images/I/61ockSytr5L._SX679_.jpg",
//   },
//   {
//     name: "Printed Sleeveless Regular Fit T Shirt",
//     price: 169,
//     imageUrl: "https://m.media-amazon.com/images/I/71sfmqKrOPL._SY879_.jpg",
//   },
//   {
//     name: "Cotton Boxer Shorts Regular Fit Solid Shorts",
//     price: 441,
//     imageUrl: "https://m.media-amazon.com/images/I/51rfcp6bf+L._SY879_.jpg",
//   },
//   {
//     name: "Turtle Neck Soft Fabric Regular Fit Casual Wear",
//     price: 308,
//     imageUrl: "https://m.media-amazon.com/images/I/61HxXKk4wyL._SY879_.jpg",
//   },
//   {
//     name: "Solid Regular Fit Polo Casual Fit",
//     price: 399,
//     imageUrl: "https://m.media-amazon.com/images/I/71NJJsDK3aL._SY879_.jpg",
//   },
//   {
//     name: "Taped Cotton Hooded Sweatshirt",
//     price: 601,
//     imageUrl: "https://m.media-amazon.com/images/I/61pztWYvWbL._SY879_.jpg",
//   },
//   {
//     name: "Batman Logo Graphic T-Shirt",
//     price: 399,
//     imageUrl: "https://m.media-amazon.com/images/I/51DflstQNyL._SY879_.jpg",
//   },
//   {
//     name: "Casual Stylish Printed Regular Fit",
//     price: 379,
//     imageUrl: "https://m.media-amazon.com/images/I/71sH6RCW5SL._SY879_.jpg",
//   },
//   {
//     name: "Avengers Hoodie Trending Best Winter Wear",
//     price: 749,
//     imageUrl: "https://m.media-amazon.com/images/I/71HAj5vRNpL._SX679_.jpg",
//   },
// ]);

// Create Operation for women Products --> Use only one time
// db.createCollection("women");

// Insert Operation for women Products --> Use only one time
// db.women.insertMany([
//   {
//     name: "Stylish Midi Party Dress",
//     price: 389,
//     imageUrl: "https://m.media-amazon.com/images/I/61-ehgCJ+bL._SX679_.jpg",
//   },
//   {
//     name: "Straight Cotton Straight Kurta Palazzo Suit",
//     price: 1799,
//     imageUrl: "https://m.media-amazon.com/images/I/71lZYLY2iqL._SY879_.jpg",
//   },
//   {
//     name: "Slim Fit Mid Rise Slim Polyamide Sports Tights",
//     price: 390,
//     imageUrl: "https://m.media-amazon.com/images/I/61QwG3RyRbL._SY879_.jpg",
//   },
//   {
//     name: "Oversized Shirt",
//     price: 469,
//     imageUrl: "https://m.media-amazon.com/images/I/71f3SP2zNKL._SY879_.jpg",
//   },
//   {
//     name: "Solid High Waist with Pockets Cargo Pants",
//     price: 569,
//     imageUrl: "https://m.media-amazon.com/images/I/61c0YM3aMPL._SY879_.jpg",
//   },
//   {
//     name: "Co ord Western Jumpsuit",
//     price: 549,
//     imageUrl: "https://m.media-amazon.com/images/I/61Jmz481BTL._SY879_.jpg",
//   },
//   {
//     name: "Pajama Set",
//     price: 449,
//     imageUrl: "https://m.media-amazon.com/images/I/51EVgUZ-qnL._SY879_.jpg",
//   },
//   {
//     name: "Floral Printed Rayon Short Kurta",
//     price: 319,
//     imageUrl: "https://m.media-amazon.com/images/I/81I1eWlaKZL._SY879_.jpg",
//   },
//   {
//     name: "High Rise Straight Jeans",
//     price: 499,
//     imageUrl: "https://m.media-amazon.com/images/I/71CyfBi3qqL._SY879_.jpg",
//   },
//   {
//     name: "Trendy Long One Piece Summer Outfit",
//     price: 439,
//     imageUrl: "https://m.media-amazon.com/images/I/61q8ePa8hXL._SY879_.jpg",
//   },
//   {
//     name: "Slim Fit Solid Rib Knit Stretchable Top",
//     price: 330,
//     imageUrl: "https://m.media-amazon.com/images/I/61BBlDNERFL._SX679_.jpg",
//   },
//   {
//     name: "Embroidered Anarkali Kurta Set",
//     price: 1549,
//     imageUrl: "https://m.media-amazon.com/images/I/71KfiqC77ZL._SY879_.jpg",
//   },
//   {
//     name: "Korean Casual Short Sleeve Loose Fit Top",
//     price: 359,
//     imageUrl: "https://m.media-amazon.com/images/I/719Fun5OPUL._SY879_.jpg",
//   },
//   {
//     name: "Relaxed Cotton Flared Palazzo",
//     price: 479,
//     imageUrl: "https://m.media-amazon.com/images/I/81xSBBdmG+L._SY879_.jpg",
//   },
//   {
//     name: "Cotton Hand Block Printed with Straight Kurta Pant",
//     price: 499,
//     imageUrl: "https://m.media-amazon.com/images/I/81Y2n5cy3RL._SY879_.jpg",
//   },
//   {
//     name: "Skinny Fit Gym High Waist Workout Trackpants",
//     price: 329,
//     imageUrl: "https://m.media-amazon.com/images/I/61hKRZkosGL._SX679_.jpg",
//   },
//   {
//     name: "Solid Slim Fit T-Shirt with Classic Round Neck",
//     price: 248,
//     imageUrl: "https://m.media-amazon.com/images/I/61hLb3DSS4L._SY879_.jpg",
//   },
//   {
//     name: "Casual Regular Sleeves Crepe Solid Fit and Flare Dress",
//     price: 308,
//     imageUrl: "https://m.media-amazon.com/images/I/51ngQyslUML._SX679_.jpg",
//   },
//   {
//     name: "Relaxed Fit Pants",
//     price: 449,
//     imageUrl: "https://m.media-amazon.com/images/I/71Qox1JaZeL._SY879_.jpg",
//   },
//   {
//     name: "Lightweight Flared Dress for Casual & Holiday",
//     price: 469,
//     imageUrl: "https://m.media-amazon.com/images/I/61u6tRaB7rL._SY879_.jpg",
//   },
//   {
//     name: "Floral Print Rayon A-Line Kurta",
//     price: 439,
//     imageUrl: "https://m.media-amazon.com/images/I/71lkKHXJyOL._SY879_.jpg",
//   },
//   {
//     name: "Casual Slanted Pocket Elastic Waist Tapered Pants",
//     price: 469,
//     imageUrl: "https://m.media-amazon.com/images/I/61tWMvGFYfL._SY879_.jpg",
//   },
//   {
//     name: "Casual Hooded Sweatshirt, Cozy & Stylish Outerwear",
//     price: 749,
//     imageUrl: "https://m.media-amazon.com/images/I/31zHLVgWvPL.jpg",
//   },
// ]);

// Create Operation for discounted Products --> Use only one time
// db.createCollection("discount");

// Insert Operation for discounted Products --> Use only one time
// db.discount.insertMany([
//   {
//     name: "Men's Black Slim Fit Joggers",
//     beforeDiscountPrice: 1999,
//     discountPercentage: 58,
//     price: 839,
//     imageUrl: "https://m.media-amazon.com/images/I/519X02vsiPL._SX679_.jpg",
//   },
//   {
//     name: "Men's Full Sleeve Regular Fit Tshirt",
//     beforeDiscountPrice: 1099,
//     discountPercentage: 76,
//     price: 269,
//     imageUrl: "https://m.media-amazon.com/images/I/51k3JS8PQdL.jpg",
//   },
//   {
//     name: "Women's Cotton Relaxed Fit Anarkali Kurta",
//     beforeDiscountPrice: 2399,
//     discountPercentage: 73,
//     price: 651,
//     imageUrl: "https://m.media-amazon.com/images/I/71XymOCzWTL._SY879_.jpg",
//   },
//   {
//     name: "Stylish Summer and Travel Wear for Men",
//     beforeDiscountPrice: 1999,
//     discountPercentage: 76,
//     price: 489,
//     imageUrl: "https://m.media-amazon.com/images/I/61EoolEoCBL._SY879_.jpg",
//   },
//   {
//     name: "Cotton Blend Stitched Slim Fit Shirt",
//     beforeDiscountPrice: 1799,
//     discountPercentage: 81,
//     price: 348,
//     imageUrl: "https://m.media-amazon.com/images/I/71O-r5I0PtL._SX679_.jpg",
//   },
//   {
//     name: "Cottonblend Half Sleeve Oversized Regular Fit",
//     beforeDiscountPrice: 1099,
//     discountPercentage: 76,
//     price: 269,
//     imageUrl:
//       "https://m.media-amazon.com/images/I/31oMVlLqIPL._SY445_SX342_.jpg",
//   },
//   {
//     name: "Boy's Cotton Regular Fit Hooded Sweatshirt",
//     beforeDiscountPrice: 1200,
//     discountPercentage: 71,
//     price: 349,
//     imageUrl: "https://m.media-amazon.com/images/I/A1nKBsGcMlL._SX679_.jpg",
//   },
//   {
//     name: "Women's Printed Cotton Short Kurti",
//     beforeDiscountPrice: 719,
//     discountPercentage: 48,
//     price: 419,
//     imageUrl: "https://m.media-amazon.com/images/I/81LpjoPNdlL._SY879_.jpg",
//   },
//   {
//     name: "Girls Cotton Hooded Sweatshirt",
//     beforeDiscountPrice: 1200,
//     discountPercentage: 71,
//     price: 349,
//     imageUrl: "https://m.media-amazon.com/images/I/71VIqahuW0L._SX679_.jpg",
//   },
//   {
//     name: "CR7 Men Cotton Hooded Sweatshirt",
//     beforeDiscountPrice: 2799,
//     discountPercentage: 68,
//     price: 899,
//     imageUrl: "https://m.media-amazon.com/images/I/61hB0uM6SsL._SX679_.jpg",
//   },
//   {
//     name: "Women Cotton Printed Tshirt in Ribbed Neck",
//     beforeDiscountPrice: 1299,
//     discountPercentage: 65,
//     price: 449,
//     imageUrl: "https://m.media-amazon.com/images/I/61fQB1Z+j4L._SX679_.jpg",
//   },
// ]);

// Create Operation for cart Products --> Use only one time
// db.createCollection("cart");

// Insert Operation for cart Products --> Use only one time
// db.cart.insertMany([
//   {
//     name: "Casual Hooded Sweatshirt, Cozy & Stylish Outerwear",
//     price: 749,
//     imageUrl: "https://m.media-amazon.com/images/I/31zHLVgWvPL.jpg",
//   },
//   {
//     name: "Sports Full Sleeves T-Shirt",
//     price: 262,
//     imageUrl: "https://m.media-amazon.com/images/I/616bDUoOBjL._SX679_.jpg",
//   },
//   {
//     name: "Printed Kurta Pant With Dupatta",
//     price: 629,
//     imageUrl: "https://m.media-amazon.com/images/I/71Xvagl5gsL._SX679_.jpg",
//   },
// ]);

// For Reference
// https://www.mongodb.com/docs/manual/reference/operator/query/
