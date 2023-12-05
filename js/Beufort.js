const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function cifrar() {
    const texto = prepararTexto(document.getElementById('inputText').value.toUpperCase());
    const clave = prepararTexto(document.getElementById('key').value.toUpperCase());
    const resultado = ejecutarAlgoritmo(texto, clave, true);

    document.getElementById('result').innerText = resultado;
}

function descifrar() {
    const texto = prepararTexto(document.getElementById('inputText').value.toUpperCase());
    const clave = prepararTexto(document.getElementById('key').value.toUpperCase());
    const resultado = ejecutarAlgoritmo(texto, clave, false);

    document.getElementById('result').innerText = resultado;
}

function prepararTexto(texto) {
    return texto.replace(/[^A-Z]/g, '');
}

function ejecutarAlgoritmo(texto, clave, cifrar) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        const letraTexto = texto[i];
        const letraClave = clave[i % clave.length];
        const desplazamiento = cifrar ? alfabeto.indexOf(letraClave) : alfabeto.length - alfabeto.indexOf(letraClave);

        const indiceTexto = alfabeto.indexOf(letraTexto);
        if (indiceTexto !== -1) {
            const nuevoIndice = (indiceTexto + desplazamiento) % alfabeto.length;
            resultado += alfabeto[nuevoIndice];
        } else {
            resultado += letraTexto;
        }
    }
    return resultado;
}