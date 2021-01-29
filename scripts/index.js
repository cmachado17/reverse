const convertir = (e) => {
  e.preventDefault();

  let palabra = document.getElementById("entrada").value;

  if (palabra.length != 0) {
    let x = palabra.length;
    let palabraInvertida = "";

    while (x >= 0) {
      palabraInvertida = palabraInvertida + palabra.charAt(x);
      x--;
    }
    document.getElementById("destino").innerHTML = palabraInvertida;

    document.getElementById("entrada").value = ""
  } else {
    document.getElementById("destino").innerHTML = "Debes ingresar una palabra!";
  }
};

const check = (e) =>{
    tecla = (document.all) ? e.keyCode : e.which;

    patron = /[A-Za-z]/;
    tecla_final=String.fromCharCode(tecla);
    return patron.test(tecla_final)
}