const fibonacci = function(a) {

    if(a >= 1) {

        var first = 1;
        var second = 1;
        var next = second;

        for (var i=1; i<a-1; i++) {
            next = first + second;
            first=second;
            second = next;
            console.log(next);
        }

        return next;

    }
    else {return "OOPS";}

};

// Do not edit below this line
module.exports = fibonacci;
