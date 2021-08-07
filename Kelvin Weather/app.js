//Setting the temperature in K.
const kelvin = 0; 

//Converting kelvin to celsius.
let celsius = kelvin - 273;

//Converting celsius to fahrenheit.
let fahrenheit = celsius*(9/5) + 32;

//Rounding the result of converting celsius to fahrenheit.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius*(33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
