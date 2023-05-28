/*Funcion para recargar la página cuando se hace clicl en la imagen de "A"de alura*/
  document.addEventListener("DOMContentLoaded", function () {
    var logoreload = document.getElementById("logoreload");
    logoreload.addEventListener("click", function () {
      location.reload();
    });
  });

/*Funcion para hacer desaparecer el div*/

function chauDiv() {
  var inputDesencriptar = document.getElementById("msjencriptado");
  if (inputDesencriptar.value.length > 1) {
    document.getElementById("myDIV").style.display = "none";
  }
}

/*Funcion para recargar encriptar*/

function encriptar() {
  var mensaje = document.getElementById("mensaje").value;
  var mensajeEncriptado = "";

  /*Validar campos*/
  var input = document.getElementById('mensaje');
  var texto = input.value;

  // Verificar si el texto contiene caracteres no permitidos, solo admite ? y !
  var caracteresProhibidos = /[A-ZÁÉÍÓÚÜÑ@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/]+/;
  if (caracteresProhibidos.test(texto)) {
    // Si se encuentra un caracter no permitido, mostrar un mensaje de error
    alert("El texto no puede contener letras mayúsculas, acentos ni caracteres especiales.");
    // Limpiar el campo de texto
    input.value = '';
    return false;
  }

  mensajeEncriptado = mensaje.replace(/e/g, "enter");
  mensajeEncriptado = mensajeEncriptado.replace(/i/g, "imes");
  mensajeEncriptado = mensajeEncriptado.replace(/a/g, "ai");
  mensajeEncriptado = mensajeEncriptado.replace(/o/g, "ober");
  mensajeEncriptado = mensajeEncriptado.replace(/u/g, "ufat");

  document.getElementById("msjencriptado").value = mensajeEncriptado;
  document.getElementById("mensaje").value = "";
  chauDiv();

  return true;
}

function desencriptar() {
  var mensajeEncriptado = document.getElementById("mensaje").value;
  var mensaje = "";

    /*Validar campos*/
    var input = document.getElementById('mensaje');
    var texto = input.value;
  
    // Verificar si el texto contiene caracteres no permitidos, solo admite ? y !
    var caracteresProhibidos = /[A-ZÁÉÍÓÚÜÑ@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/]+/;
    if (caracteresProhibidos.test(texto)) {
      // Si se encuentra un caracter no permitido, mostrar un mensaje de error
      alert("El texto no puede contener letras mayúsculas, acentos ni caracteres especiales.");
      // Limpiar el campo de texto
      input.value = '';
      return false;
    }
  
  mensaje = mensajeEncriptado.replace(/enter/g, "e");
  mensaje = mensaje.replace(/imes/g, "i");
  mensaje = mensaje.replace(/ai/g, "a");
  mensaje = mensaje.replace(/ober/g, "o");
  mensaje = mensaje.replace(/ufat/g, "u");

  document.getElementById("msjencriptado").value = mensaje;
  document.getElementById("mensaje").value = "";
  chauDiv();

  return true;
}

function copiarTexto() {
  var mensajeEncriptado = document.getElementById("msjencriptado");
  mensajeEncriptado.select();
  document.execCommand("copy");
  alert("¡Texto copiado!");
}



