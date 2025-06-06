const TEXTO = document.getElementById("texto"); // capturar texto introducido

function mostrarTextoAlReves() { //llamar funcion

    let texto = (TEXTO.value); //conversión dato HTML a dato JS
    console.log("El contenido es:", texto); //comprobar
    longitud = texto.length; //tamaño texto
    console.log("La longitud es:", longitud);
    let tInvertido = ''

    for (let i = texto.length - 1; i >= 0; i--) { //bucle que iniciara como valor de indice la longitud del array - 1 en honor a los numeros del array que empiezan de 0, luego sera mientras indice sea mallor que 0 y restara el valor d e la posicion hasta el 0

        tInvertido += texto[i]; //dar el valor de la inversion a una nueva variable, al poner += va añadiendo el contenido del array que va recorriendo en vez de sustituirlo en tInvertido
        console.log(tInvertido);

    } //bucle recorrer array

    document.getElementById("respuesta").innerHTML = `${tInvertido} `;
}


function contarVocales() {

    let texto = (TEXTO.value);
    console.log(texto);
    let inicio = 0;

    let final = texto.length;
    console.log(final);
    let cVocales = 0;
    console.log(cVocales);
    let aVocales = ["a", "e", "i", "o", "u"];


    for (i = inicio; i < final; i++) { //recorrer arraya usando como inicio del indice los valores dados por als varoiables

        if (aVocales.includes(texto[i])) { //si la posición del indice esta incluida en aVocales se cumple la condición

            cVocales++;

        }

    }

    document.getElementById("respuesta").innerHTML = `${cVocales}`;

}

function contarPalabras() {

    let texto = (TEXTO.value);
    console.log(texto);
    let inicio = 0;
    console.log(inicio);
    let final = texto.length;
    console.log(final);
    let cPalabras = 0;
    let enPalabra = false;
    for (i = 0; i < final; i++) {

        const char = texto[i];
        if (/[a-zA-Z0-9]/.test(char)) {
            if (!enPalabra) {
                enPalabra = true; // Comprobar palabra
                cPalabras++; // Incremento
            }
        } else {
            enPalabra = false; // Salimos de una palabra
        }
    }

    document.getElementById("respuesta").innerHTML = `${cPalabras}`;

}