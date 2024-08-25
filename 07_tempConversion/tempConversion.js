const convertToCelsius = function(num) {

  let ans = (num-32)/1.8;
  return Number(ans.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let ans =num *(9/5) + 32;
  return Number(ans.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


