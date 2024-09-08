let guests : string[] =["Albert Einstein","Marie Curie", "Nikola Tesla"];
guests.forEach
    (
guests=>{
console.log(`Dear ${guests}, would you like to join me for the dinner?`);
        }
    )
let unabletoattend = "Nikola Tesla";
console.log(`${unabletoattend} cannot make it to the dinner.`);
//Replace the guest with new guest
let newguest = "Leonardo da Vinci";
guests[guests.indexOf(unabletoattend)] = newguest;
//New Invitation
guests.forEach

    (
    guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
            }
    )
