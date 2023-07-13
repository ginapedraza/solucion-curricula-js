// Preguntando nombre y apellido
var name = prompt('¿Cuál es tu nombre y apellido?');
// Obteniendo primera Inicial
var firstInitial = name.slice(0,1);
// Buscando posición del segundo caracter
var secondInitialPosition = name.indexOf(' ') +1;
// Obteniendo segunda Inicial
var secondInitial = name.slice(secondInitialPosition, secondInitialPosition+1)
// Mostrando resultado en la web
document.write('Tus iniciales son ' + firstInitial.toUpperCase() + secondInitial.toUpperCase())
document.write
