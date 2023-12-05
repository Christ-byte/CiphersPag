function cifrar() {
    const texto = prepararTexto(document.getElementById('inputText').value.toUpperCase());
    const clave = prepararTexto(document.getElementById('key').value.toUpperCase());

    if (texto.length !== clave.length) {
        alert('La longitud del texto y la clave deben ser iguales.');
        return;
    }

    const resultado = ejecutarAlgoritmo(texto, clave);
    document.getElementById('result').innerText = resultado;
}

function descifrar() {
    const textoCifrado = prepararTexto(document.getElementById('inputText').value.toUpperCase());
    const clave = prepararTexto(document.getElementById('key').value.toUpperCase());

    if (textoCifrado.length !== clave.length) {
        alert('La longitud del texto cifrado y la clave deben ser iguales.');
        return;
    }

    // Descifrado es igual al cifrado en el cifrado de Vernam
    const resultado = ejecutarAlgoritmo(textoCifrado, clave);
    document.getElementById('result').innerText = resultado;
}

function prepararTexto(texto) {
    return texto.replace(/[^A-Z]/g, '');
}

function ejecutarAlgoritmo(texto, clave) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        const charCodeTexto = texto.charCodeAt(i) - 65;  // Convertir a número entre 0 y 25
        const charCodeClave = clave.charCodeAt(i) - 65;  // Convertir a número entre 0 y 25
        const nuevoCharCode = (charCodeTexto ^ charCodeClave) + 65;  // Operación XOR y revertir la conversión
        resultado += String.fromCharCode(nuevoCharCode);
    }
    return resultado;
}