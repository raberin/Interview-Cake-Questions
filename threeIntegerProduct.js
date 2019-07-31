// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

//Sort the arr
//Grab the last 3 numbers
let biggestProduct = arr => {
    let sortedArr = arr.sort((a,b) => {
        return a-b;
    })

    return sortedArr[sortedArr.length-1] * sortedArr[sortedArr.length-2] * sortedArr[sortedArr.length-3]
}