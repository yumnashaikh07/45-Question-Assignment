//QUESTION:Seeing the world:Think of atleast five places you would like to visit
var places = ["TURKEY", "THAILAND", "BAKU", "ITALY", "PORTUGAL"];
//console.log("Original order:",places);
//console.log("Alphabetic order:",[...places].sort());
//console.log("Original order:",places);
//console.log("Reverse alphabetic order:",[...places].sort().reverse());
//console.log("Original order:",places);
// this is second way
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetic order:", places);
places.reverse();
console.log("Reverse Alphabetic order:", places);
