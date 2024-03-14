// Creating a Guest List Array
let guestList = ["Maria","Ayesha","Areeba","Iqra"];

// making variable for those who cant come

let dontCome = guestList[0];

// print the name of guest who cant come

console.log(dontCome, "Nai Ahh Sakti han");

// Add or Remove guest from Guest List Arry
guestList.splice(0, 1, "Amirr");

// Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table for Dinner.");

// Adding a new guest at starting index of arry
guestList.unshift("Ali");

// Addindg a new at ending index of arry
guestList.push("Zain");

// Get a middle index of our guest List array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0,"Salman");

// print message updated list
console.log("Updated list of our guests");

// Sending a invitation message to our guest one by one with their name
guestList.forEach(oneguest => console.log(`Salam ${oneguest},would you like to dinner with me`));

