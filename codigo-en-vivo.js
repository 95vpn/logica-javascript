// #region Verificar si una palabra es palíndrom
/*
Descripción:
Una palabra es palíndromo si se lee igual de izquierda a derecha que de derecha a izquierda.
Ejemplo:
Entrada: "reconocer" → Salida: true
Entrada: "hola" → Salida: false
*/

function getPalimdrom(word) {
	const resetWord = word.toLowerCase().trim();
	console.log(resetWord);
	const reverse = resetWord.split('').reverse().join('');
	console.log(reverse);
	return resetWord === reverse;
}

console.log(getPalimdrom('radar'));
console.log(getPalimdrom('hola'));

function esPalindromo(str) {
	const cadenaLimpia = str.toLowerCase().replace(/[^a-z0-9]/g, '');

	let izquierda = 0;
	let derecha = cadenaLimpia.length - 1;

	while (izquierda < derecha) {
		if (cadenaLimpia[izquierda] !== cadenaLimpia[derecha]) {
			return false;
		}
		izquierda++;
		derecha--;
	}

	return true;
}

console.log(esPalindromo('radar'));
console.log(esPalindromo('hola'));

// #region Escribe una función que reciba un arreglo de palabras y devuelva un objeto donde las claves sean las longitudes de las palabras y los valores sean arreglos con las palabras que tienen esa longitud. Recibes: ["hola", "adiós", "sol", "luz", "estrella"] Obtienes { 3: ["sol", "luz"], 4: ["hola"], 5: ["adiós"], 8: ["estrella"]}

function getWords(arr) {
	const obj = {};
	for (const element of arr) {
		const lengthWord = element.length;
		console.log(lengthWord);
		if (!obj[lengthWord]) {
			obj[lengthWord] = [];
		}
		obj[lengthWord].push(element);
	}
	return obj;
}

console.log(getWords(['hola', 'adiós', 'sol', 'luz', 'estrella']));
