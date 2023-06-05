/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
  
};

// ponemos en true solo cuando estén correctos
const estadoErroresOK = {
  
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');


/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */
function mostrarErrores() {
    // por cada small mostramos u ocultamos el error
    
}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */

// 👇 por cada cambio en el formulario actualizamos
formulario.addEventListener('change', function () {

    // 👇 actualizo el estado de la pantalla con los datos
    

    // 👇 actualizo el estado del error segun el estado del usuario
    

    // finalmente muestro los errores presentes

});


/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */
function validarEmail(email) {
    let resultado = false;

    // // EJEMPLO VALIDACIÓN A MANO 👇
    // if (email.includes('@') && email.includes('.') && !email.includes(' ') && email.length > 5) {
    //     resultado = true;
    // } 

    // EJEMPLO CON EXPRESION REGULAR 👇
    
}

function validarPassword(password) {
    

    // si pasa las pruebas lo damos por válido 👇
    
}

function validarRol(rol) {

    // si pasa las pruebas lo damos por válido 👇
    
}

function validarTerminos(verificacion) {
    

    // si pasa las pruebas lo damos por válido 👇
    
}


/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener('submit', function (evento) {
    // prevenimos el default para manejar nososotro el comportamiento
    

});




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página de 
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.

function navegarPaginaExito() {
    //   desarrollar la funcion aqui

}
