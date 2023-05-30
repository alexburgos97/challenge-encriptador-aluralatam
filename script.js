function Encriptar(){ //Funcion para encriptar texto y puedo hacerlo con todas las letras del abecedario que quisiera
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    // i = es para que tome letras mayusculas y minusculas
    // m = para que tome en cuenta multiples lineas
    // g = para que tome en cuenta toda la linea o la oracion

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function Desencriptar(){ //Simplemente en esta funcion cambio los valores de lo encuentra en cada palabra de la letra encriptada
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    // i = es para que tome letras mayusculas y minusculas
    // m = para que tome en cuenta multiples lineas
    // g = para que tome en cuenta toda la linea o la oracion

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

function Copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}