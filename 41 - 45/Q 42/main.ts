let Magicians: string[] = ["Alice", "David", "Chris" ,"Chad"];

function show_magicians(magicians: string[]) {
  magicians.forEach((Magician) => {
    console.log(Magician);
  });
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}

make_great(Magicians); // Modifies the original array
show_magicians(Magicians); // Shows modified names




