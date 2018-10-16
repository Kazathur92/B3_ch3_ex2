// Practice: Take a Number - Battle of the Bands
// A local nightclub is having a Battle of the Bands night in a 
// few months. They expect many bands to sign up because the grand 
// prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an 
// argument. The function will increment a global variable by one each
//  time it is invoked, and return that number, and the band name 
// concatenated together.


const bandNumber = 1
let counter = bandNumber;  //we made a new variable because we cannot change the const but we can change this one.

const takeNumber = function (bandName) {

    let  string = `${counter}. ${bandName}`   //this assigns the counter and the band name to the string
    counter++                                //adds one to the counter
    return string;                           //this returns the string
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console