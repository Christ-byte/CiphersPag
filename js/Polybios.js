const cuadricula = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
];
function cifrar() {
    var texto = document.getElementById('inputText').value.toUpperCase();
    var resultado = "";
    
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i];
        if (caracter === ' ') {
            resultado += ' ';
        } else {
            var coordenadas = encontrarCoordenadas(caracter);
            resultado += coordenadas.join('');
        }
    }

    document.getElementById('result').innerText = resultado;
}

function descifrar() {
    var texto = document.getElementById('inputText').value;
    var resultado = "";
    
    for (var i = 0; i < texto.length; i += 2) {
        var coordenadas = texto.substring(i, i + 2);
        if (coordenadas !== ' ') {
            var letra = encontrarLetra(coordenadas);
            resultado += letra;
        } else {
            resultado += ' ';
            i--; 
        }
    }

    document.getElementById('result').innerText = resultado;
}

function encontrarCoordenadas(letra) {
    for (var i = 0; i < cuadricula.length; i++) {
        for (var j = 0; j < cuadricula[i].length; j++) {
            if (cuadricula[i][j] === letra) {
                return [i + 1, j + 1];
            }
        }
    }
    return [];
}

function encontrarLetra(coordenadas) {
    var fila = parseInt(coordenadas[0]) - 1;
    var columna = parseInt(coordenadas[1]) - 1;
    return cuadricula[fila][columna];
}