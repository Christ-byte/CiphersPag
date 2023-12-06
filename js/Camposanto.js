const pigpenCipher = {};
        
for (let i = 0; i < 26; i++) {
    const letra = String.fromCharCode(65 + i);
    pigpenCipher[letra] = `pigpen-0-${i + 1}`;
}
pigpenCipher[' '] = ' ';

function cifrar() {
    var texto = document.getElementById('inputText').value.toUpperCase();
    var resultado = "";
    
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i];
        var imagen = pigpenCipher[caracter];
        
        if (imagen) {
            resultado += `<img src="/Img/${imagen}.png" alt="${caracter}" >`;
        } else if (caracter === ' ') {
            resultado += ' '; 
        }
    }

    document.getElementById('result').innerHTML = resultado;
}
