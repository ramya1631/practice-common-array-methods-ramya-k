// Task 1: Create the Order System

  let orders = [
    ["Latte", "Tea", "Espresso"], // Drinks
    ["Croissant", "Muffin", "Bagel"] // Pastries
  ];

  // Task 2: Log the number of drinks and number of pastries using .length

  let numberOfDrinks = orders[0].length;
  let numberOfPastries = orders[1].length;

  console.log("Number of drinks:", numberOfDrinks);
  console.log("Number of pastries:", numberOfPastries);

  // Task 3: Access Orders Using Bracket Notation

  // 1st Combination: First drink and last pastry
  console.log("First drink:", orders[0][0]); // "Latte"
  console.log("Last pastry:", orders[1][2]); // "Bagel"

  // 2nd Combination: Second drink and first pastry
  console.log("Second drink:", orders[0][1]); // "Tea"
  console.log("First pastry:", orders[1][0]); // "Croissant"

  // 3rd Combination: Last drink and second pastry
  console.log("Last drink:", orders[0][2]); // "Espresso"
  console.log("Second pastry:", orders[1][1]); // "Muffin"

  // Task 4: Access a specific drink and pastry dynamically

  let row = 0; // Drinks row
  let item = 1; // Second drink (Tea)
  console.log("Dynamically accessed drink:", orders[row][item]); // Output: "Tea"

  row = 1; // Pastries row
  item = 0; // First pastry (Croissant)
  console.log("Dynamically accessed pastry:", orders[row][item]); // Output: "Croissant"


// Task 5: Loop through drinks dynamically

console.log("Drinks available:");
for (let i = 0; i < orders[0].length; i++) {
  console.log(orders[0][i]); // Logs each drink
}

// Task 6: Add a new drink dynamically

orders[0].push("Flat White"); // Adding "Flat White" to the drinks category

// Log the updated number of drinks
console.log("Updated number of drinks:", orders[0].length); // Output: 4

// Dynamically select an order using variables
let selectedRow = 0; // Drinks category
let selectedItem = 3; // Newly added drink ("Flat White")
console.log("Selected drink dynamically:", orders[selectedRow][selectedItem]); // Output: "Flat White"

selectedRow = 1; // Pastries category
selectedItem = 1; // Selecting "Muffin"
console.log("Selected pastry dynamically:", orders[selectedRow][selectedItem]); // Output: "Muffin"