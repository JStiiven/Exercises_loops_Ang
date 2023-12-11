let mensaje = "Somos SENA"

for (let i = 0; i <= mensaje.length; i++){
    if (mensaje[i] === "E"){
        console.log("La cadena contiene E");
    }
}

let contador = 0;
for (let o = 0; o <= mensaje.length; o++) {
    if (mensaje[o] === "o") {
        contador++;
    }
}
console.log(`La letra "o" aparece ${contador} veces en la cadena`);