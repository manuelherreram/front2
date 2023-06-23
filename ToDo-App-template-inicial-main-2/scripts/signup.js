window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const nombre = document.querySelector("#inputNombre");
    const apellido = document.querySelector("#inputApellido");
    const email = document.querySelector("#inputEmail");
    const password = document.querySelector("#inputPassword");
    const passwordRepedida = document.querySelector("#inputPasswordRepetida");
    const url = "https://todo-api.ctd.academy/v1";

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Preparando datos para el registro...");

        // Estaría bueno en este punto agregar funciones que me permitan validar el tipo de datos que recibo de los inputs, asi los normalizo antes de pasarlo al objeto "payload", estas funciones para validar, se encuentran en el utils.js

        const payload = {
            firstName: nombre.value,
            lastName: apellido.value,
            email: email.value,
            password: password.value
        }

        const settings = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        }
        // Lanzamos la consulta de login a la API con nuestro setting como parametro
        realizarRegister(settings);

        // Limpio los campos del formulario
        form.reset()
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        fetch(`${url}/users`, settings)
            .then(response => (response.ok) ? response.json() : Promise.reject(response))
            .then(data => {
                // console.log(data.jwt)// El objeto data me devuelve la propiedad jwt
                if (data.jwt) {
                    localStorage.setItem("jwt", JSON.stringify(data.jwt));
                    location.replace('mis-tareas.html');
                }
            })
            .catch((error) => {
                if (error.status == 400) {
                    console.warn("El usuario ya se encuentra registrado / Alguno de los datos requeridos está incompleto");
                    alert("El usuario ya se encuentra registrado / Alguno de los datos requeridos está incompleto");
                } else if (error.status == 500) {
                    console.warn("Error del servidor");
                    alert("Error del servidor");
                }
            });
    };
});