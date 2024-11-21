/**
    1- Install TypeScript: npm install -g typescript
    2- Run the TypeScript compiler: tsc product.ts
    3- This will generate a product.js file.
    4- Run: node product.js to test your project
**/

// Task 4

/*
Create a TypeScript interface for a Product with the following properties:
    name: string
    price: number
*/
interface Product {
  name: string;
  price: number;
}

/*
Write a function that:
    Accepts an array of Product objects.
    Returns the total price of all products.
*/
function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

// Test
let products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

let total = calculateTotalPrice(products);
console.log(`Total Price: $${total}`);

/////////////////////////////////

// Task 5

function isValidEmail(email: string): boolean {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
//tests
console.log(isValidEmail("m.aldadah24@gmail.com"));
console.log(isValidEmail("mansour.com"));
console.log(isValidEmail("mansour@.com"));
console.log(isValidEmail("@gmail.com"));
console.log(isValidEmail("mansour@gmail.c"));
console.log(isValidEmail("mansour@gmail."));
