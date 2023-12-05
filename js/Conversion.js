function doConversion(plainText, base) {
    let cipherText = '';

    for (let i = 0; i < plainText.length; i++) {
        let charCode = plainText.charCodeAt(i);

        // Convierte el código ASCII a la base especificada
        let convertedValue = charCode.toString(base);

        // Agrega el valor convertido al texto cifrado
        cipherText += convertedValue + ' ';
    }

    return cipherText.trim();  // Elimina espacios adicionales al final
}

function doDecryption(cipherText, base) {
    let decryptedText = '';

    // Divide el texto cifrado en valores separados por espacio
    let values = cipherText.split(' ');

    for (let i = 0; i < values.length; i++) {
        let convertedValue = parseInt(values[i], base);

        // Convierte el valor de vuelta a un carácter y agrega al texto descifrado
        decryptedText += String.fromCharCode(convertedValue);
    }

    return decryptedText;
}

function encrypt() {
    let plainText = document.getElementById('plainText').value;
    let base = parseInt(document.getElementById('base').value);
    let cipherText = doConversion(plainText, base);
    document.getElementById('cipherText').innerHTML =  cipherText;
}

function decrypt() {
    let cipherText = document.getElementById('cipherText').innerHTML;
    let base = parseInt(document.getElementById('base').value);
    let decryptedText = doDecryption(cipherText.substring(13), base);
    document.getElementById('decryptedText').innerHTML =  decryptedText;
}