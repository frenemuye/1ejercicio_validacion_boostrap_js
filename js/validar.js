var sw_validacion = 0, sw_validacion_email = 0, sw_validacion_zip = 0;
function validar1() {
  var val1, val2;

  val1 = document.getElementById("exampleInputEmail1").value;
  val2 = document.getElementById("exampleInputPassword1").value;

  //alert('el resultado de email es: ' + val1);    alert('el resultado de clave es: ' + val2);

  if (val1 == null || val2 == null || val1 == "" || val2 == "")
    alert("Falta uno o varios campos");
  else validarEmail(val1);
}

function validar2() {
  valor1 = document.getElementById("inputEmail4").value;
  valor2 = document.getElementById("inputPassword4").value;
  valor3 = document.getElementById("inputAddress").value;
  valor4 = document.getElementById("inputAddress2").value;
  valor5 = document.getElementById("inputCity").value;
  valor6 = document.getElementById("inputState").value;
  valor7 = document.getElementById("inputZip").value;

  //alert('el resultado de email es: ' + valor1);   alert('el resultado de clave es: ' + valor2);  alert('el resultado de direccion es: ' + valor3);   alert('el resultado de opcional es: ' + valor4);
  //alert('el resultado de city es: ' + valor5);  alert('el resultado de estado es: ' + valor6);  alert('el resultado de zip es: ' + valor7);

  if (
    valor1 == null ||
    valor2 == null ||
    valor3 == null ||
    valor5 == null ||
    valor6 == "Escoger..." ||
    valor7 == null ||
    valor1 == "" ||
    valor2 == "" ||
    valor3 == "" ||
    valor5 == "" ||
    valor7 == ""
  ) {
    alert("Falta uno o varios campos");
    sw_validacion = 0;
  } else {
    sw_validacion = 1;
    validarEmail(valor1);
    validarZip(valor7);
    alert ("validacion: "+sw_validacion+"zip: "+sw_validacion_zip+" email: "+sw_validacion_email );
    if ( sw_validacion == 1 && sw_validacion_email == 1 && sw_validacion_zip == 1 ) {
      location.href = "https://www.google.com";
    }
  }
}

function validarEmail(x) {
  validadordeEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //esprexion que contiene el valor de un email valido
  if (validadordeEmail.test(x)) {
    sw_validacion_email = 1;
    //alert("La dirección de email " + x + " es correcta.");
  } else {
    //document.getElementById('mensaje').className="btn btn-danger";//color rojo, boton con mensaje
    alert("La dirección de email " + x + " es incorrecta.");
    sw_validacion_zip = 0;
  }
}

function validarZip(y) {
  if (isNaN(y)) {
    //document.getElementById('inputZip').className="btn btn-alert";//color rojo, boton con mensaje
    alert("El zip debe ser numero!");
    sw_validacion_zip = 0;
  } else {
    sw_validacion_zip = 1;
  }
}
