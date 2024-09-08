var Magicians = ["Alice", "David", "Chris", "Chad"];
function show_magicians(magicians) {
    magicians.forEach(function (Magician) {
        console.log(Magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(Magicians); // Modifies the original array
show_magicians(Magicians); // Shows modified names
