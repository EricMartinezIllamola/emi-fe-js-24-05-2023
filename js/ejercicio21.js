let valor = 0;
let acumulado = 1;
let numero = +prompt("Introduzca un numero:");

do {
    valor = valor + 1;
    acumulado = acumulado * valor;
} while (valor < numero);

console.log(acumulado);