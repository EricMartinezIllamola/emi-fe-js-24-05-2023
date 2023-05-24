let nota = +prompt("Introduce tu nota:");

switch (true) {
    case (nota <= 4):
        console.log("Insuficiente");
        break;
    case (nota <= 6):
        console.log("Aprobado");
        break;
    case (nota <= 8):
        console.log("Notable");
        break;
    case (nota <= 10):
        console.log("Excelente");
        break;
    default:
        console.log("Introduce una nota valida");
        break;
}