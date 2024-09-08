let friends : string[]= ["Alice" ,"Bob" , "Charlie"];
console.log(friends[3]); //Intentional error: arrays are zero-index, so index 3 is out of bound
friends[2] = "Charlie" ; // Correcting the error by accessing a valid index