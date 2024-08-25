const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if (array.length == 0){
    return 0;
  }  
  return array.reduce((accumulate, num) => accumulate + num);
};

const multiply = function(array) {
  return array.reduce((accumulate, num) => accumulate * num);
};

const power = function(num1,num2) {
  return num1**num2;
};

const factorial = function(num) {
  let total = 1
  if (num == 0){
    return 1;
  }
  else{
    for (let i = 1; i <= num; ++i){
      total *= i;
    }
    return total;
  }
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
