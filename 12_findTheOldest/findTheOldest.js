const findTheOldest = function(arr) {
    let age = 0;
    let detail;

    
    for (item of arr){
        if (typeof item.yearOfDeath === 'undefined'){
            let today = new Date();
            age = today.getFullYear() - item.yearOfBirth;
            detail = item;
        }
        if (item.yearOfDeath - item.yearOfBirth > age){
            age = item.yearOfDeath - item.yearOfBirth;
            detail = item;
        }
    }
    return detail;
};

// Do not edit below this line
module.exports = findTheOldest;
