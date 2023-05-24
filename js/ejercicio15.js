let A = +prompt("Introduzca un año:");

if ((A % 4) == 0) {
    if ((A % 100) == 0) {
        if ((A % 400) == 0) {
            console.log("Es bisiestro");
        } else {
            console.log("No es bisiestro");
        }
    } else {
        console.log("Es bisiestro");
    }
} else {
    console.log("No es bisiestro");
}