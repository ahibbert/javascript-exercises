const reverseString = function(word) {

    let reverseWord = "";
    let i = word.length;

    while (i>=0) {
        reverseWord=reverseWord+word.charAt(i);
        i=i-1;
    }

    return(reverseWord);

};

// Do not edit below this line
module.exports = reverseString;
