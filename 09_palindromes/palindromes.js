const reverseString = function(word) {

    let reverseWord = "";
    let i = word.length;

    while (i>=0) {
        reverseWord=reverseWord+word.charAt(i);
        i=i-1;
    }

    return(reverseWord);

};

const palindromes = function (a) {

    console.log(a);

    a=a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    a=a.replace(/\s/g, '');
    a=a.toLowerCase();

    console.log(a);
    console.log(reverseString(a));

    var result = false;
    if (a==reverseString(a)) {result = true};
    return result;

};




// Do not edit below this line
module.exports = palindromes;
