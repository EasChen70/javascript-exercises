const repeatString = function(string, num) {
    if(num < 0) return "ERROR";
    let hold = "";
    for(let i = 0; i < num; i++){
        hold += string;
    }
    return hold;
};

// Do not edit below this line
module.exports = repeatString;
