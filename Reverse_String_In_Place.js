//Write a function that takes an array of characters and reverses the letters in place.

//Steps
/*
1. Make reverse string function
 - Split string into arr
 - Loop across the arr or characters to the middle of arr
 - Switch letters between first and last letter of word
2. Implement reverse string function into a forEach
 */

// const reverseString = str => {
//     let strArr = str.split('');
// }

//Steps
const reversed = arrOfChars => {

    //Loop through arr moving towards middle
    for(let i = 0; i < Math.floor(arrOfChars.length/2); i++) {

        //Swapping characters
        //Make temp variable to store left value
        let temp = arrOfChars[i];

        //Switch left value with value opposite to it
        arrOfChars[i] = arrOfChars[arrOfChars.length - i - 1];

        //Replace right value with temp variable which is the first character of arr
        arrOfChars[arrOfChars.length - i - 1] = temp;

    }
}

//Easier To read function using while loop
function reverse(arrayOfChars) {

    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;

    while (leftIndex < rightIndex) {

        // Swap characters
        const temp = arrayOfChars[leftIndex];
        arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
        arrayOfChars[rightIndex] = temp;

        // Move towards middle
        leftIndex++;
        rightIndex--;
    }
}

let characters = ['a', "b", "c", "d", "e"];
reversed(characters)
console.log(characters);
