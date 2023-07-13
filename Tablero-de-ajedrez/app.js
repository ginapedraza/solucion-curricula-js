// Tamaño de la cuadrícula
var size = parseInt(prompt('¿Cuál será el tamaño de tu cuadrícula?'));

// Creando nuestra cuadrícula
var result = '';

for (var row = 1; row <= size; row++) {
    for (var column = 1; column <= size; column++) {
        if ((column + row) % 2 === 0) {
            result += ' ';
        } else {
            result += '#';
        }
    }
    result += '\n';
}
console.log (result);

