/**
 * To compile TypeScript to JavaScript:
 * 1. Install TypeScript: npm install -g typescript
 * 2. Run the TypeScript compiler: tsc product.ts
 * 3. This will generate a product.js file that can be used in your project.
 */
/*
Write a function that:
    Accepts an array of Product objects.
    Returns the total price of all products.
*/
function calculateTotalPrice(products) {
  return products.reduce(function (total, product) {
    return total + product.price;
  }, 0);
}
// Test
var products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];
var total = calculateTotalPrice(products);
console.log("Total Price: $".concat(total));
/////////////////////////////////
// Task 5
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
//tests
console.log(isValidEmail("m.aldadah24@gmail.com"));
console.log(isValidEmail("mansour.com"));
console.log(isValidEmail("mansour@.com"));
console.log(isValidEmail("@gmail.com"));
console.log(isValidEmail("mansour@gmail.c"));
console.log(isValidEmail("mansour@gmail."));
