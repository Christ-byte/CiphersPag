function doEncryption(plainText, matrix) {
    let encryptedText = '';

    for (let i = 0; i < plainText.length; i++) {
        // Convierte el carácter a su código ASCII
        let charCode = plainText.charCodeAt(i);

        // Multiplica el código ASCII por la matriz de transformación
        let transformedCode = matrix * charCode;

        // Agrega el carácter transformado al texto cifrado
        encryptedText += String.fromCharCode(transformedCode);
    }

    return encryptedText;
}

function doDecryption(cipherText, matrix) {
    let decryptedText = '';

    for (let i = 0; i < cipherText.length; i++) {
        // Convierte el carácter a su código ASCII
        let charCode = cipherText.charCodeAt(i);

        // Divide el código ASCII por la matriz de transformación (si la matriz es invertible)
        let transformedCode = charCode / matrix;

        // Agrega el carácter transformado al texto descifrado
        decryptedText += String.fromCharCode(transformedCode);
    }

    return decryptedText;
}

function encrypt() {
    let plainText = document.getElementById('plainText').value;
    let matrix = parseInt(document.getElementById('matrix').value);
    let cipherText = doEncryption(plainText, matrix);
    document.getElementById('cipherText').innerHTML = 'Cipher Text: ' + cipherText;
}

function decrypt() {
    let cipherText = document.getElementById('cipherText').innerHTML;
    let matrix = parseInt(document.getElementById('matrix').value);
    let decryptedText = doDecryption(cipherText.substring(13), matrix);
    document.getElementById('decryptedText').innerHTML = 'Decrypted Text: ' + decryptedText;
}