// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

//O(n^2) - time
const flightMovie = (flightLength, movieLengths) => {

    //loop over each array  
    for(let i = 0; i < movieLengths.length; i++){
        for(let j = 0; j < movieLengths.length; j++){
            //Checks if its the same index if so, skip 
            if(i === j){
                continue;
            }
            if(movieLengths[i] + movieLengths[j] === flightLength){
                return true;
            }
        }
    }
    return false;
}

//O(n) - time
//Using a set, one can add values into an array that is unique
function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Movie lengths we've seen so far
    const movieLengthsSeen = new Set();
  
    for (let i = 0; i < movieLengths.length; i++) {
      const firstMovieLength = movieLengths[i];
  
      const matchingSecondMovieLength = flightLength - firstMovieLength;
      if (movieLengthsSeen.has(matchingSecondMovieLength)) {
        return true;
      }
      //Appends value into the end of a set
      movieLengthsSeen.add(firstMovieLength);
    }
  
    // We never found a match, so return false
    return false;
  }