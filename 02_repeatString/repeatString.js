const repeatString = function(str, int) {
    if (int < 0){
        return 'ERROR';
    }
    
    let ans = '';
    for (let i = 0; i < int; ++i){
        ans += str;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
