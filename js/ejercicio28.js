let numero = +prompt("Introduzca un numero:");
let sum = 0;
let A = 0;

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        A = 1;
    } else {
        A = 0;
    }
    sum = sum + A;
}

if (sum == 0) {
    console.log("El numero es primo");
} else {
    console.log("El numero no es primo");
}