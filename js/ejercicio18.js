let valor = 0;
let acumulado = 0;
let numero = +prompt("Introduzca un numero:");

do {
    valor = valor + 1;
    acumulado = acumulado + valor;
} while (valor < numero);

console.log(acumulado);