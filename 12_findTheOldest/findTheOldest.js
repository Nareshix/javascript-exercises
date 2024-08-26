const findAge = person => {
    if (person.yearOfDeath === undefined){
        let currentYear = new Date().getFullYear() 
        return currentYear - person.yearOfBirth; 
    }
    return person.yearOfDeath - person.yearOfBirth;
}
const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => findAge(current) > findAge(oldest) ? current : oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
