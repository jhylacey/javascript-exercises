const convertToCelsius = far => +((far - 32) / 1.8000).toFixed(1);

const convertToFahrenheit = cels => +((cels * 1.8000) + 32.00).toFixed(1);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
