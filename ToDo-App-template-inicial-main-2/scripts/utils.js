//  funcion para cargar los errores
const setErrors = (message, field, isError = true) => {
    // console.log(field);
    if (isError) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.innerText = message
    } else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.innerText = ""
    }
}


// creo un nuevo metodo, donde verifico si está vacío el campo
const isEmpty = (message, e) => {
    // console.log(e.target);
    const field = e.target
    const fieldValue = normalizarEmail(field.value)
    // console.log(field);

    // 
    if (fieldValue.length == 0) {
        setErrors(message, field)
    } else {
        setErrors("", field, false)
    }
}

/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {

}

function normalizarTexto(texto) {
    return texto.trim()
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(e) {
    // console.log(e.target);
    const field = e.target
    const fieldValue = normalizarEmail(field.value)
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    console.log(!regex.test(fieldValue));

    if (fieldValue.length > 4 && !regex.test(fieldValue)) {
        setErrors(`🚨 Por favor ingrese un ${field.name} válido`, field)
    } else {
        setErrors("", field, false)
    }

    // console.log(fieldValue);
}

function normalizarEmail(email) {
    return email.trim().toLowerCase()
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(e) {
    // console.log(e.target);
    const field = e.target
    const fieldValue = normalizarEmail(field.value)
    // const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (fieldValue.length < 6) {
        setErrors(`¡Por favor ingrese una ${field.name} válida`, field)
    } else {
        setErrors("", field, false)
    }


}

function compararContrasenias(contrasenia_1, contrasenia_2) {

}

