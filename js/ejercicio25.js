let frase = prompt("Introduzca una frase:");
let palabras = frase.split(" ");
i = 0;

for (const iterator of palabras) {
    console.log(palabras[i]);
    i = i + 1;
}