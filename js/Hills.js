function cifrar() {
    const texto = prepararTexto(document.getElementById('inputText').value.toUpperCase());
    const clave = prepararClave(document.getElementById('key').value.toUpperCase());

    if (!clave) {
        alert('La clave debe ser una matriz cuadrada invertible de tamaño 2x2 o 3x3.');
        return;
    }

    const resultado = ejecutarAlgoritmo(texto, clave, true);
    document.getElementById('result').innerText = resultado;
}

function descifrar() {
    const textoCifrado = prepararTexto(document.getElementById('inputText').value.toUpperCase());
    const clave = prepararClave(document.getElementById('key').value.toUpperCase());

    if (!clave) {
        alert('La clave debe ser una matriz cuadrada invertible de tamaño 2x2 o 3x3.');
        return;
    }

    const resultado = ejecutarAlgoritmo(textoCifrado, clave, false);
    document.getElementById('result').innerText = resultado;
}

function prepararTexto(texto) {
    return texto.replace(/[^A-Z]/g, '');
}

function prepararClave(clave) {
    // Obtener la dimensión de la matriz cuadrada
    const dimension = Math.sqrt(clave.length);

    // Verificar que la clave sea una matriz cuadrada invertible de tamaño 2x2 o 3x3
    if (Number.isInteger(dimension) && (dimension === 2 || dimension === 3)) {
        return crearMatrizClave(clave, dimension);
    }

    return null;
}

function crearMatrizClave(clave, dimension) {
    const matriz = [];
    let index = 0;

    for (let i = 0; i < dimension; i++) {
        const fila = [];
        for (let j = 0; j < dimension; j++) {
            fila.push(clave.charCodeAt(index) - 65);  // Convertir a número entre 0 y 25
            index++;
        }
        matriz.push(fila);
    }

    return matriz;
}

function ejecutarAlgoritmo(texto, clave, cifrar) {
    const dimension = clave.length;
    let resultado = "";

    for (let i = 0; i < texto.length; i += dimension) {
        const bloqueTexto = texto.substr(i, dimension);
        const bloqueNumeros = bloqueTexto.split('').map(char => char.charCodeAt(0) - 65);

        let resultadoBloque = [];

        for (let j = 0; j < dimension; j++) {
            let suma = 0;

            for (let k = 0; k < dimension; k++) {
                const valorClave = cifrar ? clave[j][k] : clave[k][j];
                suma += valorClave * bloqueNumeros[k];
            }

            const resultadoCaracter = (suma % 26 + 26) % 26;  // Asegurar resultado positivo
            resultadoBloque.push(resultadoCaracter);
        }

        resultado += resultadoBloque.map(num => String.fromCharCode(num + 65)).join('');
    }

    return resultado;
}