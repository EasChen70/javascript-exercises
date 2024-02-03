const removeFromArray = function(arr, ...num) {
    //filter: for each element, make exclude anything in num array, because rest parameter makes an array
    let newArr = arr.filter(element => !num.includes(element));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
