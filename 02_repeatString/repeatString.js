const repeatString = function(word, repeats) {
    let answer = "";

    if (repeats < 0) {
        answer = "ERROR"    
    }
    else {
        for (i in [...Array(repeats).keys()]) {
            answer = answer + word;
        }
    }
    
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
