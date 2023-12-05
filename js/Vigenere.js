function cifrar() {
    var texto = document.getElementById('inputText').value.toUpperCase();
    var clave = document.getElementById('key').value.toUpperCase();
    var resultado = "";

    for (var i = 0, j = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            var shift = clave.charCodeAt(j) - 65;
            resultado += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            j = (j + 1) % clave.length;
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById('result').innerText = resultado;
}

function descifrar() {
    var texto = document.getElementById('inputText').value.toUpperCase();
    var clave = document.getElementById('key').value.toUpperCase();
    var resultado = "";

    for (var i = 0, j = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            var shift = clave.charCodeAt(j) - 65;
            resultado += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
            j = (j + 1) % clave.length;
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById('result').innerText = resultado;
}