let A = +prompt("Introduzca un numero:");
i = 0;
acumulado = 0;

while (i < A) {
    i = i + 1;
    if ((i % 2 != 0)) {
        acumulado = acumulado + i;
    }
}

console.log(acumulado);