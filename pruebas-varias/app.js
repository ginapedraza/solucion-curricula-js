 
function salute(nombre = 'Gina', edad = 35) {
    console.log(`Hola mi nombre es ${nombre}  y tengo + ${edad} años`);
}

salute();


//Funciones declaradas VS funciones expresadas

funcionDeclarada();

function funcionDeclarada() {
    console.log('Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada');
}

funcionDeclarada();

// función anónima
const funcionExpresada = function () {
console.log('esto es una función expresada, es decir una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición, javascript nos dira...');
}

funcionExpresada();
