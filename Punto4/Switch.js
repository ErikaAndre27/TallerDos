// Crea una variable con el día de la semana (ej: "lunes") y muestre:
// • "Es lunes, inicio de semana"
// • "Es viernes, casi fin de semana"
// • "Es sábado o domingo, fin de semana"
// • Para cualquier otro día: "Es un día entre semana"

let dia = "Martes";

switch (dia){
    case "Lunes":
        console.log("Es lunes, inicio de semana");
        break;
    case "Viernes":
        console.log("Es viernes, casi fin de semana");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Es sábado o domingo, fin de semana");
        break;
    case "Martes":
    case "Miércoles":
    case "Jueves":
        console.log("Es un día entre semana");
        break;
    default:
        console.log("Lo siento, la palabra no está escrita correctamente, intenta con la primera en mayúscula");
        break;
}

