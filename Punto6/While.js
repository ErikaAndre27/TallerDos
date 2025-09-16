// Haz un programa que pida un número y repita la palabra "Hola" esa cantidad de veces
// usando while

let mensaje ="Ingrese un número,: ";
let respuesta;

function LeerDatos(mensaje, callback){

    const readline = require("readline");

    const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    rl.question(mensaje, (respuesta)=>{
        rl.close();
        callback(respuesta);
    });
    
}

LeerDatos(mensaje, (respuesta)=>{
    let numero = parseInt(respuesta);
    let contador = 0;
    while (contador<numero){
        contador++;
        console.log("Hola");
    }
})
