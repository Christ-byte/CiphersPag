function cifrar(mensaje, clave) {    
    textoCifrado = "";
    for (i = 0; i < mensaje.length; i++) { 
        if (i < clave.length) {
            textoCifrado += String.fromCharCode((((mensaje.charCodeAt(i) - 97) + (clave.charCodeAt(i) - 97) + 26) % 26) + 97); 
        } else {
            textoCifrado += String.fromCharCode((((mensaje.charCodeAt(i) - 97) + (mensaje.charCodeAt(i - clave.length) - 97) + 26) % 26) + 97);
        }    
    } 
    return textoCifrado; 
}

function descifrar(mensaje, clave) {    
    textoPlano = "";
    for (i = 0; i < mensaje.length; i++) { 
        if (i < clave.length) {
            textoPlano += String.fromCharCode((((mensaje.charCodeAt(i) - 97) - (clave.charCodeAt(i) - 97) + 26) % 26) + 97); 
        } else {
            textoPlano += String.fromCharCode((((mensaje.charCodeAt(i) - 97) - (mensaje.charCodeAt(i - clave.length) - 97) + 26) % 26) + 97);
        }
    } 
    return textoPlano; 
}

function funcionBotonCifrar() {
    var mensaje = document.getElementById('inputMensaje').value.toLowerCase().replace(/[^a-z]/g, ""); 
    var claveIngresada = document.getElementById('claveIngresada').value.toLowerCase().replace(/[^a-z]/g, "");
    
    if (claveIngresada == "" || mensaje == "") {
        alert("Error");
        return;
    }

    var resultado = cifrar(mensaje, claveIngresada);
    document.getElementById("resultado").value = resultado.toUpperCase();
}

function funcionBotonDescifrar() {
    var mensaje = document.getElementById('inputMensaje').value.toLowerCase().replace(/[^a-z]/g, ""); 
    var claveIngresada = document.getElementById('claveIngresada').value.toLowerCase().replace(/[^a-z]/g, "");

    if (claveIngresada == "" || mensaje == "") {
        alert("Error");
        return;
    }

    var resultado = descifrar(mensaje, claveIngresada);
    document.getElementById("resultado").value = resultado.toUpperCase();
}
