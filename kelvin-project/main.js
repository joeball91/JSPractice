//kelvin forecast for the day - this wont change
const kelvin = 293;

//converting kelvin to celsius, celsius is 273 less degrees
var celsius = kelvin - 273;

//converting celsius to fahrenheit & rounding decimal down
var fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
