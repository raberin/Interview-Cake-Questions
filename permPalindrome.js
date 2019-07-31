// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

//Create and object to store counts
//convert string into arr and sort
//Loop through string
//If that letter is undefined in object, create 1
//Everytime that letter is seen 

const permPalindrome = str => {

    //Create a set object
    let unpairedChar = new Set();

    //Loop through string
    for(let i = 0; i < str.length; i++) {

        //Check if the char is in the set, if it does delete it
        if(unpairedChar.has(str[i])){
            unpairedChar.delete(str[i])
        } else {
            unpairedChar.add(str[i]);
        }
    }

    //If the length of the set is less or equal to 1 return true
    //This accounts for the odd length of letters where it can show up only once
    return unpairedChar.size <= 1;
}