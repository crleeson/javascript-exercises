let THIRTY_TWO = 32;

const convertToCelsius = function (tempFarenheit) {
  let CONVERSION_FACTOR = (1.0 * 5) / 9;

  return Math.round((tempFarenheit - THIRTY_TWO) * CONVERSION_FACTOR * 10) / 10;
};

const convertToFahrenheit = function (tempCelsius) {
  let CONVERSION_FACTOR = (1.0 * 9) / 5;

  return Math.round((tempCelsius * CONVERSION_FACTOR + THIRTY_TWO) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
