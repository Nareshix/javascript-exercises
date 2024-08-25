const sumAll = function(num1, num2) {
    // if num % 1 === 0, means its an integer, else its a float
    if (num1 < 0 || num2 < 0 || !Number.isSafeInteger(num1) || !Number.isSafeInteger(num2)){ 
        return 'ERROR';
    }
    bigger = Math.max(num1,num2);
    smaller = Math.min(num1,num2);

    let total = 0;
    for (let i = smaller; i <= bigger; ++i){
        total += i;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
