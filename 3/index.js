let mensaje = "Javascript es genial"
let contador = 1;
for (let i = 0; i <= mensaje.length; i++) {
    if(mensaje[i] === " "){
        contador++;
    }
}
console.log(`La cantidad de palabras que contiene la cadena es de ${contador}`);    