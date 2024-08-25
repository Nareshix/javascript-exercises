const palindromes = function (word) { 
    word = word.replace(/\W/, '');
    word = word.toLowerCase();

    if (word === word.split('').reverse().join('')){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
