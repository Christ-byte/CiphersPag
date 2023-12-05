const alfabeto = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
let matrizPlayfair = [];

function generarMatrizPlayfair(clave) {
    // Inicializar la matrizPlayfair con la clave
    matrizPlayfair = [];
    const claveSinDuplicados = [...new Set(clave.replace(/J/g, 'I'))];
    const alfabetoRestante = alfabeto.split('').filter(char => !claveSinDuplicados.includes(char));

    // Construir la primera parte de la matriz con la clave
    for (let i = 0; i < claveSinDuplicados.length; i++) {
        matrizPlayfair.push(claveSinDuplicados.slice(i * 5, (i + 1) * 5));
    }

    // Completar la matriz con el alfabeto restante
    let index = 0;
    for (let i = claveSinDuplicados.length; i < 5; i++) {
        matrizPlayfair.push(alfabetoRestante.slice(index, index + 5));
        index += 5;
    }
}

function cifrar() {
    const texto = prepararTexto(document.getElementById('inputText').value.toUpperCase());
    const clave = prepararTexto(document.getElementById('key').value.toUpperCase());
    generarMatrizPlayfair(clave);

    let resultado = "";

    for (let i = 0; i < texto.length; i += 2) {
        const parDeLetras = texto.substr(i, 2);
        const cifrado = cifrarParDeLetras(parDeLetras);
        resultado += cifrado;
    }

    document.getElementById('result').innerText = resultado;
}

function descifrar() {
    const texto = prepararTexto(document.getElementById('inputText').value.toUpperCase());
    const clave = prepararTexto(document.getElementById('key').value.toUpperCase());
    generarMatrizPlayfair(clave);

    let resultado = "";

    for (let i = 0; i < texto.length; i += 2) {
        const parDeLetras = texto.substr(i, 2);
        const descifrado = descifrarParDeLetras(parDeLetras);
        resultado += descifrado;
    }

    document.getElementById('result').innerText = resultado;
}

function prepararTexto(texto) {
    
    return texto.replace(/[^A-Z]/g, '').replace(/J/g, 'I');
}

function encontrarPosicion(letra) {
    for (let i = 0; i < matrizPlayfair.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (matrizPlayfair[i][j] === letra) {
                return { fila: i, columna: j };
            }
        }
    }
}

function cifrarParDeLetras(parDeLetras) {
    const pos1 = encontrarPosicion(parDeLetras[0]);
    const pos2 = encontrarPosicion(parDeLetras[1]);

    if (pos1 && pos2) {
        if (pos1.fila === pos2.fila) {
          
            return matrizPlayfair[pos1.fila][(pos1.columna + 1) % 5] + matrizPlayfair[pos2.fila][(pos2.columna + 1) % 5];
        } else if (pos1.columna === pos2.columna) {
            
            return matrizPlayfair[(pos1.fila + 1) % 5][pos1.columna] + matrizPlayfair[(pos2.fila + 1) % 5][pos2.columna];
        } else {
       
            return matrizPlayfair[pos1.fila][pos2.columna] + matrizPlayfair[pos2.fila][pos1.columna];
        }
    } else {
       
        return parDeLetras;
    }
}


function descifrarParDeLetras(parDeLetras) {
    const pos1 = encontrarPosicion(parDeLetras[0]);
    const pos2 = encontrarPosicion(parDeLetras[1]);

    if (pos1.fila === pos2.fila) {
        // Misma fila, cambiar columnas
        return matrizPlayfair[pos1.fila][(pos1.columna - 1 + 5) % 5] + matrizPlayfair[pos2.fila][(pos2.columna - 1 + 5) % 5];
    } else if (pos1.columna === pos2.columna) {
        // Misma columna, cambiar filas
        return matrizPlayfair[(pos1.fila - 1 + 5) % 5][pos1.columna] + matrizPlayfair[(pos2.fila - 1 + 5) % 5][pos2.columna];
    } else {
        // Formar rectángulo, intercambiar columnas
        return matrizPlayfair[pos1.fila][pos2.columna] + matrizPlayfair[pos2.fila][pos1.columna];
    }
}