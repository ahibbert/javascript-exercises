const ftoc = function(a) {
  number = (a-32)*(5/9);
  number = Math.round(number*10)/10
  return number;
};

const ctof = function(a) {
  number = a*(9/5) + 32;
  number = Math.round(number*10)/10
  return number;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
