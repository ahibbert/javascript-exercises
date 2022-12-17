const removeFromArray = function(arrayToFix, a,b,c,d) {

    removeValFromIndex = [];

    for (var i = 0; i < arrayToFix.length; i++) {
        // Iterate over numeric indexes from 0 to 5, as everyone expects.
        if (arrayToFix[i]==a||arrayToFix[i]==b||arrayToFix[i]==c||arrayToFix[i]==d) { 
            removeValFromIndex.push(i);
        }
    }

    for (var i = removeValFromIndex.length -1; i >= 0; i--) {
        arrayToFix.splice(removeValFromIndex[i],1);
    }

    return arrayToFix;

};

// Do not edit below this line
module.exports = removeFromArray;
