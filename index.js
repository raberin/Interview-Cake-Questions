//Your company built an in-house calendar tool called HiCal.
// You want to add a feature to see the times in a day when everyone is available.
//To do this, you’ll need to know when any team is having a meeting.
// In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime.
// These integers represent the number of 30-minute blocks past 9:00am

//input = [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

//output =   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

//1st sort meetings by start time

//O(nlgn) time and O(n) space
const mergeRanges = arr => {
    //Sorts the arr startTime
    let sortedArr = arr.sort((a, b) => {
        return a.startTime - b.startTime;
    });

    //initialize the mergedMeetings arr with the earliest meeting
    let mergedMeetings = [sortedArr[0]];

    for(let i = 1; i < sortedArr.length; i++){
        let currentMeeting = sortedArr[i];
        //Last value of the merged meetings arr
        let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        //If the current meeting overlaps with the last merged meeting, use the later end time of the two.
        if(currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
        } else {
            //Add the current meeting since it doesnt overlap
            mergedMeetings.push(currentMeeting);
        }
    }
};

let input = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

console.log(mergeRanges(input));

