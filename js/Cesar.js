function cifrar() {
    var texto = document.getElementById('inputText').value;
    var desplazamiento = parseInt(document.getElementById('shift').value);
    var resultado = "";
    
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode((charCode - 65 + desplazamiento) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode((charCode - 97 + desplazamiento) % 26 + 97);
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById('result').innerText = resultado;
}

function descifrar() {
    var texto = document.getElementById('inputText').value;
    var desplazamiento = parseInt(document.getElementById('shift').value);
    var resultado = "";
    
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode((charCode - 65 - desplazamiento + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode((charCode - 97 - desplazamiento + 26) % 26 + 97);
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById('result').innerText = resultado;
}