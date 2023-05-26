let palabra = prompt("Introduzca una palabra:");
let sum = 0;
let A = 0;

let palabraX = palabra.toLocaleLowerCase();

for (let i = 0; i < palabra.length; i++) {
    if (palabraX[i] == "a" || palabraX[i] == "e" || palabraX[i] == "i" || palabraX[i] == "o" || palabraX[i] == "u") {
        A = 1;
    } else {
        A = 0;
    }
    sum = sum + A;
}

console.log(`La palabra introducida contiene ${sum} vocales`);