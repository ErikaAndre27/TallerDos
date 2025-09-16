// 1. Declara con let una variable llamada ciudad y cámbiale el valor.

let ciudad = "Bogotá";

console.log("(Momento 1) La ciudad es: "+ciudad);

ciudad= "Cali";

console.log("(Momento 2)La ciudad es: "+ciudad);
console.log("_______________________________");
// 2. Declara con const una variable llamada pais e intenta cambiarle el valor (¿qué
// sucede?).

const pais = "Colombia";
//pais = "México";

console.log("País: "+ pais);
console.log ("No se deja cambiar, muestra error y no compila, ya que es un valor constante, no se puede reasignar");
console.log("_______________________________");

// 3. Declara con var una variable llamada color y cámbiala dentro de un bloque {}.
// Explica qué diferencia viste con let.

let color = "Morado";

if (true){
    color = "Azul";
}

console.log("El color es: "+ color);
console.log("Let se puede reasignar siempre y cuando esté dentro del bloque en el que se declara (incluye otros bloques creados adentro), si no no se puede acceder")
console.log("Var no tiene esa limitación, se puede acceder desde cualquier punto, tiene alcance global.")



