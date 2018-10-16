// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. 
// But for multiples of five (5, 10, 15, etc.) print "Chicken" instead
//  of the number and for the multiples of seven (7, 14, 21, etc.) 
// print "Monkey". For numbers which are multiples of both five and 
// seven print "ChickenMonkey".


// To determine if a number can be evenly divided by 5 or 7, 
// use the JavaScript remainder operator.


// You can start with this simpler version that outputs even numbers 
// to the console and ignores odd numbers. 
// You need to refactor this code to meet the requirements above.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  // Divide the current number by 2, and check if the remainder is 0
  if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("Chicken Monkey") // Only 2, 4, 6 will appear        
  }
  else if (currentNumber % 5  === 0) {
        // document.write(`${currentNumber}`," ", "chicken ")
        console.log("Chicken")
  }
  else if (currentNumber % 7  === 0) {
        // document.write(`${currentNumber}`," ", "Monkey ")
        console.log("Monkey")
  }
  else {
    console.log(currentNumber)
  }
}



      // for (i = 0; i < currentNumber; i++) {
//   if (currentNumber[i] === 5) {
//     currentNumber = "chicken"
//   }
// }
    


//     if (currentNumber  === 5) {
//       currentNumber = "Chicken"
//       console.log(currentNumber)
//     }    
//     if (currentNumber === 7) {
//       currentNumber = "Monkey"
//       console.log(currentNumber)
//     } else { let currentNumber = 1
//     }
// }