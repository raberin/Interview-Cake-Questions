//Remove Even Integers from Array
const rmvEvenIntegers = arr => {
  return arr.filter(e => e % 2 !== 0);
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const rmvEvenIntegers = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? arr.splice(i, 1) : null;
  }
  return arr;
};

//Merge Two Sorted Arrays
//O(nlgn) - time
const mergeTwoArr = (arr1, arr2) => {
  let merged = arr1.concat(arr2);
  return merged.sort((a, b) => a - b);
};

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

//O(n)
let mergeTwoArr = (arr1, arr2) => {
  let merged = [];

  //Create indexes for arr1, arr2, merged
  let arr1Index = 0;
  let arr2Index = 0;
  let mergedIndex = 0;

  //Loop through until merged is as big as both arr combined
  while (merged.length < arr1.length + arr2.length) {
    //If value in arr1 is less than arr2 OR no more vals in arr2
    if (arr1[arr1Index] < arr2[arr2Index] || arr2Index === arr2.length) {
      merged.push(arr1[arr1Index]);
      arr1Index++;
      mergedIndex++;
      console.log(`arr1Index = ${arr1Index}, mergedIndex = ${mergedIndex}`);
    } else {
      merged.push(arr2[arr2Index]);
      arr2Index++;
      mergedIndex++;
      console.log(`arr2Index = ${arr2Index}, mergedIndex = ${mergedIndex}`);
    }
  }
  return merged;
};

let arr1 = [1, 1, 3, 3, 7, 7, 2, 2, 99, 4, 4];
//First Non-Repeating Integer In an Array
//O(nlgn) - Time
let nonRepeat = arr => {
  //Sort the arr from smallest to biggest
  let sortedArr = arr.sort((a, b) => a - b);

  //Loop through every 2 indexes and check number to right
  for (let i = 0; i < sortedArr.length; i += 2) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      return sortedArr[i];
    }
  }
  return "Theyre all doubles";
};
