/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
    // 👇 establecemos un objeto vacío para despues rellenarlo
    const objetoInformacion = {
        nombre: "",
        password: "",
        telefono: "",
        hobbies: [],
        nacionalidad: ""
    }

    // capturamos todos los nodos
    // fielldset Datos
    const nom = document.querySelector("#nom")
    const pass = document.querySelector("#pass")
    const tel = document.querySelector("#tel")
    
    //Fieldset listado-hobbies
    const hobbies = document.querySelectorAll("[name=hobbies]")
    
    //Fieldset pais de nacimiento
    const nacionalidad = document.querySelectorAll("[name=nacionalidad]")
    console.log(nacionalidad);
    
    // 👇 rellenamos el objeto con la info correspondiente
    objetoInformacion.nombre = nom.value
    objetoInformacion.password = pass.value
    objetoInformacion.telefono = tel.value
    
    // recorremos los checkbox
    hobbies.forEach ( hobbie => {
        // Cada hobbie seleccionado lo sumamos al listado de hobbies
        if (hobbie.checked) {
            objetoInformacion.hobbies.push(hobbie.id)
        }
    })
    
    // recorremos los radio
    nacionalidad.forEach( nacion => {
        // la nacionalidad seleccionada es la que se guarda en el objeto
        if (nacion.checked) {
            objetoInformacion.nacionalidad = nacion.id
        }
    })
    
        // la nacionalidad seleccionada es la que se guarda en el objeto
        

    return objetoInformacion
};

// 

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */
const form = document.querySelector("form")

form.addEventListener("submit", (e) => { 
    // prevenimos el default para que no se intente enviar
    e.preventDefault()

    // utilizamos nuestra funcion para capturar los datos
    const datos = capturarDatosFormulario()
    console.log(datos);

    const errores = validarInformacion(datos);
    console.log(errores);

    // mostramos los errores presentes
    renderizarErrores(errores);

    // mostramos mensaje de exito si no hay errores
    mostrarMensajeExito(errores);
    
 })


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de objetoInformacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(usuario) {
    let errores = [];
    // 👇 desarrollar aqui la funcion
    
    // Validar el nombre
    if (!isNaN(usuario.nombre) || usuario.nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres y no debe contener números.")
    }

    // Validar el password
    if (usuario.password.trim().length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.")
    }

    // Validar Teléfono
    if (usuario.telefono.length < 10) {
        errores.push("No es un teléfono válido.")
    }
    
    // Validariamos Hobbies
    if (usuario.hobbies.length > 4) {
        errores.push("Sólo es posible seleccionar 4 hobbies.")
    }
    
    // Validar Nacionalidad
    if (usuario.nacionalidad == "") {
        errores.push("Debe seleccionar una nacionalidad.")
    }


    return errores;
}
