const sumAll = function(a,b) {

    let result = 0;
    if (a>b) {
        let z = b;
        b=a;
        a=z;
    }

    if (a>0 && b>0 && typeof a == 'number' && typeof b == 'number') {
        for (var i=0; i<=b-a; i++) {
            result = result + a + i;
        }
    }
    else { 
        result = 'ERROR'
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
