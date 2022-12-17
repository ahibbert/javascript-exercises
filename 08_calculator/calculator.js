const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(a) {
  var b = 0;
	for (var i = a.length -1; i >= 0; i--) {
    b = b + a[i];
  }
  return b;

};

const multiply = function(a) {
  var b = 1;
	for (var i = a.length -1; i >= 0; i--) {
    b = b * a[i];
  }
  return b;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {

  var b = 1;

	for (var i = a; i > 0; i--) {
    b = b * i;
  }
  
  return b;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
