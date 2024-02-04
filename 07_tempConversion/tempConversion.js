const convertToCelsius = function(num) {
  if(num == 32){
    return 0;
  }
  let result = (5/9);
  result *= (num - 32);
  return parseFloat(result.toFixed(1))
};

const convertToFahrenheit = function(num) {
  if(num == 0){
    return 32;
  }
  let result = (9/5) * num;
  result += 32;
  return parseFloat(result.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
