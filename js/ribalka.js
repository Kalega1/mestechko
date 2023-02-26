// Define the player's inventory
var playerInventory = [];

// Define the fishing mini-game function
function fishingMiniGame() {
  // Cast the line
  console.log("Casting the line...");
  
  // Generate a random number to determine if the player catches a fish
  var randomNumber = Math.random();
  
  // If the random number is less than 0.5, the player catches a fish
  if (randomNumber < 0.5) {
    console.log("You caught a fish!");
    
    // Generate a random weight for the fish
    var fishWeight = Math.floor(Math.random() * 10) + 1;
    
    // Display a message with the fish name and weight
    console.log("You caught a trout weighing " + fishWeight + " pounds!");
    
    // Add the fish to the player's inventory
    playerInventory.push("Trout");
  } else {
    console.log("You didn't catch anything this time.");
  }
  
  // Update the player's inventory display
  updateInventoryDisplay();
}

// Define the function to update the player's inventory display
function updateInventoryDisplay() {
  // Get the inventory display element
  var inventoryDisplay = document.getElementById("inventory-display");
  
  // Clear the current inventory display
  inventoryDisplay.innerHTML = "";
  
  // Loop through the items in the player's inventory and add them to the display
  for (var i = 0; i < playerInventory.length; i++) {
    var item = playerInventory[i];
    
    // Create a new element for the item and add it to the display
    var itemElement = document.createElement("div");
    itemElement.innerText = item;
    inventoryDisplay.appendChild(itemElement);
  }
}

// Call the fishing mini-game function when the player clicks on a button
document.getElementById("cast-line-button").addEventListener("click", fishingMiniGame);
// Define the player's inventory
var playerInventory = [];

// Define an array of possible fish names
var fishNames = [
  "Trout",
  "Bass",
  "Salmon",
  "Catfish",
  "Tuna",
  "Mackerel",
  "Perch",
  "Walleye",
  "Crappie",
  "Pike"
];

// Define the fishing mini-game function
function fishingMiniGame() {
  // Cast the line
  console.log("Casting the line...");
  
  // Generate a random number to determine if the player catches a fish
  var randomNumber = Math.random();
  
  // If the random number is less than 0.5, the player catches a fish
  if (randomNumber < 0.5) {
    console.log("You caught a fish!");
    
    // Generate a random weight for the fish
    var fishWeight = Math.floor(Math.random() * 10) + 1;
    
    // Generate a random name for the fish
    var fishNameIndex = Math.floor(Math.random() * fishNames.length);
    var fishName = fishNames[fishNameIndex];
    
    // Display a message with the fish name and weight
    console.log("You caught a " + fishName + " weighing " + fishWeight + " pounds!");
    
    // Add the fish to the player's inventory
    playerInventory.push(fishName);
  } else {
    console.log("You didn't catch anything this time.");
  }
  
  // Update the player's inventory display
  updateInventoryDisplay();
}

// Define the function to update the player's inventory display
function updateInventoryDisplay() {
  // Get the inventory display element
  var inventoryDisplay = document.getElementById("inventory-display");
  
  // Clear the current inventory display
  inventoryDisplay.innerHTML = "";
  
  // Loop through the items in the player's inventory and add them to the display
  for (var i = 0; i < playerInventory.length; i++) {
    var item = playerInventory[i];
    
    // Create a new element for the item and add it to the display
    var itemElement = document.createElement("div");
    itemElement.innerText = item;
    inventoryDisplay.appendChild(itemElement);
  }
}

// Call the fishing mini-game function when the player clicks on a button
document.getElementById("cast-line-button").addEventListener("click", fishingMiniGame);
