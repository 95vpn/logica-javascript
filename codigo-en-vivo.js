
let palabra = "reconocer";
let esPalindromo = false;
let arrayPalabra = palabra.toLowerCase().split("");

for (let i = 0; i < arrayPalabra.length; i++) {
    for (let j = arrayPalabra.length; j > 0; j--) {
        if(palabra[i] == palabra[j])
        {
            esPalindromo = true;
        }

        
    }
    
}

console.log(esPalindromo);