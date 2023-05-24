let numero = +prompt("Introduzca un numero:");

if ((numero % 2 != 0)) {
    numero = numero - 1;
}

while (numero >= 0) {
    console.log(numero);
    numero = numero - 2;
}