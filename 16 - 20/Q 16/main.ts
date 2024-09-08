let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonard da Vinci"];
console.log("Great News! I found a bigger dinner table!");
//Adding more gusts
guests.unshift("Isac Newton");
guests.splice(guests.length / 2,0, "Charles Darwin");
guests.push("Ada Lovelace");
guests.forEach(guest =>
    {
        console.log(`Dear ${guest}, would you like to join me for dinner?`);
    }
);