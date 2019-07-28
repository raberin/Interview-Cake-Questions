const message = [ 'c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l' ];


function reverseCharacters(message, leftIndex, rightIndex) {

    // Walk towards the middle, from both sides
    while (leftIndex < rightIndex) {

        // Swap the left char and right char
        const temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

let reverseWords = (arr) => {
    //First we reverse all the characters in the message.
    reverseCharacters(message, 0, message.length - 1);
    //This gives use the right words, but all the words are reversed.

    //Now we gotta reverse the words.
    let currentWordStartIndex = 0;
    for(let i = 0; i <= message.length; i++) {

        //Find the end of the current aka the SPACE
        if(i === message.length || message[i] === ' '){

            //We reverse the current word
            reverseCharacters(message, currentWordStartIndex, i - 1);
            //Change the new index to the next word
            currentWordStartIndex = i + 1
        }
    }
}

reverseWords(message)

console.log(message.join(''));