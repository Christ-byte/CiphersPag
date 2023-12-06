const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
let salida = "";
for (var i = 0; i < this; i++) {
    salida += alfabeto[Math.floor(Math.random() * alfabeto.length)];
}

var codificarMensaje = function (mensaje, claveIngresada) {

    var salida = "";
    let textoNumerico = [];
    let claveNumerica = [];

    for (let i of mensaje) {
        textoNumerico.push(alfabeto.indexOf(i.toLowerCase()));
    }

    for (let i of claveIngresada) {
        claveNumerica.push(alfabeto.indexOf(i.toLowerCase()));
    }

    for (let i in textoNumerico) {
        salida += alfabeto[(textoNumerico[i] + claveNumerica[i]) % 26];
    }

    return salida;
}

var decodificarMensaje = function (mensaje, claveIngresada) {
    var salida = "";
    let textoNumerico = [];
    let claveNumerica = [];

    for (let i of mensaje) {
        textoNumerico.push(alfabeto.indexOf(i.toLowerCase()));
    }

    for (let i of claveIngresada) {
        claveNumerica.push(alfabeto.indexOf(i.toLowerCase()));
    }

    let out = "";
    for (let i in textoNumerico) {
        salida += alfabeto[(textoNumerico[i] - claveNumerica[i]) < 0 ? 26 + (textoNumerico[i] - claveNumerica[i]) : (textoNumerico[i] - claveNumerica[i]) % 26];
    }

    return salida;
}


function funcionBotonCifrar() {
    var claveIngresada = document.getElementById('claveIngresada').value;
    var mensaje = document.getElementById("inputMensaje").value;

    if (claveIngresada == "" || mensaje == "") {
        alert("Por favor, ingrese clave y mensaje para cifrar/descifrar.");
        return;
    }

    if (mensaje.length != claveIngresada.length) {
        alert("El texto y la clave deben tener la misma longitud.");
        return;
    }

    var resultado = codificarMensaje(mensaje, claveIngresada);
    document.getElementById("resultado").value = resultado.toUpperCase();
}


function funcionBotonDescifrar() {
    var claveIngresada = document.getElementById('claveIngresada').value;
    var mensaje = document.getElementById("inputMensaje").value;

    if (claveIngresada == "" || mensaje == "") {
        alert("Por favor, ingrese clave y mensaje para cifrar/descifrar.");
        return;
    }

    if (mensaje.length != claveIngresada.length) {
        alert("El texto y la clave deben tener la misma longitud.");
        return;
    }

    var resultado = decodificarMensaje(mensaje, claveIngresada);
    document.getElementById("resultado").value = resultado.toUpperCase();
}
