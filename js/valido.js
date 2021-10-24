function valida_envia(){
    //valido el nombre
    if (document.fvalida.validarNombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;

    
}

/*function validarEmail(validarEmail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(validarEmail)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }*/