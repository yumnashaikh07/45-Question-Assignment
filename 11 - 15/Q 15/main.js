var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", would you like to join me for the dinner?"));
});
var unabletoattend = "Nikola Tesla";
console.log("".concat(unabletoattend, " cannot make it to the dinner."));
//Replace the guest with new guest
var newguest = "Leonardo da Vinci";
guests[guests.indexOf(unabletoattend)] = newguest;
//New Invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
