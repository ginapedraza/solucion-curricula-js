// Preguntar la temperatura en celsius
var temperatureCelcius = parseInt(prompt('¿Cuál es la tempersatura actual en grados Celcius °C?'));
//Convirtiendo °C a °F
var celciusToFarenheit = (temperatureCelcius*1.8) + 32;
// Mostrar resultado en la consola
console.log('La temperatura en Farenheit es ' + celciusToFarenheit);
