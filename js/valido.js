window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const validarNombre = document.getElementById('validarNombre')
    const validarApellido = document.getElementById('validarApellido')
    const email = document.getElementById('validarEmail')
    const verificarEmail = document.getElementById('verificarEmail')
    const validarMensaje = document.getElementById('validarMensaje')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {

        const nombreValor = validarNombre.value.trim()
        const apellidoValor = validarApellido.value.trim()
        const emailValor = email.value.trim()
        const emailConfirmaValor = verificarEmail.value.trim()
        const mensajeValor = validarMensaje.value.trim()
  
       
        if(!mensajeValor){
            //console.log('CAMPO VACIO')
            validaFalla(validarMensaje, 'Campo vacío')
        }else{
            validaOk(validarMensaje)
        }
        if(!nombreValor){
            //console.log('CAMPO VACIO')
            validaFalla(validarNombre, 'Campo vacío')
        }else{
            validaOk(validarNombre)
        }
        if(!apellidoValor){
            //console.log('CAMPO VACIO')
            validaFalla(validarApellido, 'Campo vacío')
        }else{
            validaOk(validarApellido)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }

        if(!emailConfirmaValor){
            validaFalla(verificarEmail, 'Confirme su email') 
        }else if(emailValor !== emailConfirmaValor){
            validaFalla(verificarEmail, 'Los email no coinciden')
        } else {
            validaOk(verificarEmail)
        }


        
        
    }
    
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
        
        formControl.className = 'form-control falla'
    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})
