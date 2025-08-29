
let palabra = "reconocer";
let esPalindromo = false;
let arrayPalabra = palabra.toLowerCase().split("");

function palabrasIguales(arrayPalabra)
{
    for (let i = 0; i < arrayPalabra.length; i++) {
    for (let j = arrayPalabra.length; j > 0; j--) {
        if(palabra[i] == palabra[j])
        {
            esPalindromo = true;
        }   
    }
    return esPalindromo;
}

}
console.log(palabrasIguales("reconocer"))


let arreglo = ["hola", "adios", "sol", "luz", "estrella"];
let obj = {};

for (const element of arreglo) {
    console.log(element.length)
    const lengthWord = element.length
    if(obj[lengthWord] != 0)
    {
        obj[lengthWord] = lengthWord;
        console.log(obj[lengthWord])
    }
    // obj[lengthWord].push(element)
    console.log(obj[lengthWord])

}