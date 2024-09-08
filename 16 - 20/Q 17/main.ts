let guests: string[] =["Albert Einstein"]
console.log("Unfoetunately, I can invite only two people for dinner");
while (guests.length> 2)
    {
        let removedguest =
        guests.pop();
    console.log(`Sorry,${removedguest}, Icannot invite you to dinner.`);
    }
    guests.forEach(guest=>{
        console.log(`Dear ${guest} you are still invited to dinner.`);
    });
    guests.splice(0, guest.length);
    console.log(guests);//shows the empty list