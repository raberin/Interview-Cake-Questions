/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jArray = J.split('');
    let sArray = S.split('');
    let count = 0

    for(let i = 0; i < jArray.length; i++){
        for(let j = 0; j < sArray.length; j++){
            if(jArray[i] === sArray[j]){
                count++;
            }
        }
    }
    return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));