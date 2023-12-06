function cifrar(textoPlano)
{ 
    return btoa(textoPlano);
}

function descifrar(textoCifrado)
{
    return atob(textoCifrado);
}

function funcionBotonCifrar(){
    var mensaje = document.getElementById("inputMensaje").value; 

    if(mensaje == ""){
      alert("Por favor, ingresa el mensaje para cifrar/descifrar.");
      return;
    }
    
    var resultado = cifrar(mensaje);
    document.getElementById("resultado").value = resultado;
}

function funcionBotonDescifrar(){
    var mensaje = document.getElementById("inputMensaje").value;
  
    if(mensaje == ""){
      alert("Por favor, ingresa el mensaje para cifrar/descifrar.");
      return;
    }
  
    var resultado = descifrar(mensaje);
    document.getElementById("resultado").value = resultado;
} 
