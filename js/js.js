window.onload=()=>{
    let form = document.querySelector("#registroForm");
    form.nombre.addEventListener("input", validarNombre);
    form.apellido.addEventListener("input", validarApellido);
    form.edad.addEventListener("input", validarEdad);
    form.telefono.addEventListener("input", validarTelefono);
    form.email.addEventListener("input", validarEmail);
    form.pass1.addEventListener("input", validarPass1);
    form.pass2.addEventListener("input", validarPass2);

    form.reset.addEventListener("click", ()=>{
        inputs=document.querySelectorAll("input"); // Es un array de todos los input del html

        inputs.forEach(element => {
            element.classList.remove("errorInput"); // Borra el borde rojo de los input que tengan error
            element.classList.remove("validoInput");
        });

        let mensajeError=document.querySelectorAll(".msn"); // Con esto estamos eliminando los mensajes de error que haya en el html
        mensajeError.forEach(mensaje=> {
            mensaje.textContent="";
        })
    })

}

function validarFormulario(){
    if (validarNombre() && validarApellido() && validarEdad() && validarEmail() && validarPass1() && validarPass2() && validarTelefono()) {
        return true;
    }else{
        return false;
    }
}

/*** Validar Nombre *****/

function validarNombre() {
    let nombre=document.querySelector("#nombre");
    let msnError=document.querySelector(".nombreError");

    if (!nombre.value.trim()) { // Si está vacío
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent = "El nombre es obligatorio";
        return false;
    }else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent = "El nombre sólo puede contener letras y espacios";
        return false;
    }else{
        nombre.classList.remove("errorInput");
        nombre.classList.add("validoInput");
        msnError.textContent="";
        return true;
    }
}

/*** Validar Apellido *****/

function validarApellido() {
    let nombre=document.querySelector("#apellido");
    let msnError=document.querySelector(".apellidoError");

    if (!apellido.value.trim()) { // Si está vacío
        apellido.classList.add("errorInput");
        apellido.classList.remove("validoInput");
        msnError.textContent = "El apellido es obligatorio";
        return false;
    }else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)){
        apellido.classList.add("errorInput");
        apellido.classList.remove("validoInput");
        msnError.textContent = "El apellido sólo puede contener letras y espacios";
        return false;
    }else{
        apellido.classList.remove("errorInput");
        apellido.classList.add("validoInput");
        msnError.textContent="";
        return true;
    }
}


/** Validar Edad ******/
function validarEdad() {
let edad = document.querySelector("#edad");
let msnError = document.querySelector(".edadError");

if (isNaN(edad.value) || !edad.value.trim() ) {
    edad.classList.add("errorInput");
    edad.classList.remove("validoInput");
    msnError.textContent="Edad sólo puede contener números";
    return false;
}else if (edad.value<=0 || edad.value>100) {
    edad.classList.add("errorInput");
    edad.classList.remove("validoInput");
    msnError.textContent="Edad debe ser mayor que 0 y menor que 100";
    return false;
}else{
    edad.classList.remove("errorInput");
    edad.classList.add("validoInput");
    msnError.textContent="";
    return true;
}
    
}


// Validar teléfono
//Existe la posibilidad de evaluar una expresión regular con la función match
function validarTelefono() {
    let telefono = document.querySelector("#telefono");
    let msnError = document.querySelector(".telefonoError");


if (!telefono.value.trim()) {
    telefono.classList.add("errorInput");
    telefono.classList.remove("validoInput");
    msnError.textContent="El teléfono sólo puede contener números";
    return false;
    
}else if (!/^[6789]\d{8}$/.test(telefono.value)){
    apellido.classList.add("errorInput");
    apellido.classList.remove("validoInput");
    msnError.textContent = "El telefono debe empezar por [6,7,8,9] y de longitud 9 números";
    return false;

}else{
    telefono.classList.remove("errorInput");
    telefono.classList.add("validoInput");
    msnError.textContent="";
    return true;
}
}


// Validar Email
function validarEmail() {
    let email = document.querySelector("#email");
    let msnError = document.querySelector(".emailError");


if (!email.value.trim()) {
    email.classList.add("errorInput");
    email.classList.remove("validoInput");
    msnError.textContent="El mail es obligatorio";
    return false;

}else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)){
   email.classList.add("errorInput");
   email.classList.remove("validoInput");
    msnError.textContent = "El mail debe ser válido";
    return false;

}else{
    email.classList.remove("errorInput");
    email.classList.add("validoInput");
    msnError.textContent="";
    return true;
}
}

//Validar Contraseña
function validarPass1() {
    let pass1 = document.querySelector("#pass1");
    let msnError = document.querySelector(".pass1Error");

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass1.value)){
       pass1.classList.add("errorInput");
       pass1.classList.remove("validoInput");
         msnError.textContent = "La contraseña debe contener 8 caracteres, de los cuales 1 mayúscula, 1 minúscula y 1 letra";
         return false;

     }else{
        pass1.classList.remove("errorInput");
        pass1.classList.add("validoInput");
         msnError.textContent="";
         return true;
     }

     // Añadir la condición para que la contraseña no pueda quedar vacía
}
function validarPass2() {
    let pass1 = document.querySelector("#pass1");
    let pass2 = document.querySelector("#pass2");
    let msnError = document.querySelector(".pass2Error");

    if (pass1.value!==pass2.value || !pass2.value.trim()){
       pass2.classList.add("errorInput");
       pass2.classList.remove("validoInput");
         msnError.textContent = "Las contraseñas no son iguales";
         return false;

     }else{
        pass1.classList.remove("errorInput");
        pass1.classList.add("validoInput");
        pass2.classList.remove("errorInput");
        pass2.classList.add("validoInput");
         msnError.textContent="";
         return true;
     }
}


