let X =prompt("Introduzca un numero:");
let i = 0;
let acumulado = 0;
let A = "1";
let N = 0;

while (i < X.length) {
    A = X[i];
    N = Number(A);
    acumulado = acumulado + N;
    i = i + 1;
}

console.log(acumulado);