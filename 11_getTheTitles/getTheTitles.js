const getTheTitles = function(book) {
    let ans = [];
    for (arr of book){
        ans.push(arr.title);
    }
    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
