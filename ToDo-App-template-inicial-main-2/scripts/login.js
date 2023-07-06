window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    //    const form = document.querySelector("form")
    const form = document.forms[0]
    const email = document.querySelector("#inputEmail")
    const password = document.querySelector("#inputPassword")
    const url = "https://todo-api.ctd.academy/v1"



    // Aqui en este punto yo me encargo de mandar un a llamar la las funcion normalizar Texto y las validaciones

    // Valido si los campos están vacios
    email.addEventListener("blur", e => isEmpty(`⚠️ Se requiere que ingrese su ${email.name}`, e))
    password.addEventListener("blur", e => isEmpty(`⚠️ Se requiere que ingrese su ${password.name}`, e))

    // Valido que los campos tengan los requierimientos necesarios en tiempo real
    email.addEventListener("input", validarEmail)
    password.addEventListener("input", validarContrasenia)


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        console.log("Preaparando datos.... ");

        // Estaría bueno en este punto agregar funciones que me permitan validar el tipo de datos que recibo de los inputs, asi los normalizo antes de pasarlo al objeto "payload", estas funciones para validar, se encuentran en el utils.js

        // Crear el cuerpo de la request nuestro payload
        const payload = {
            email: normalizarEmail(email.value),
            password: normalizarTexto(password.value)
        }
        // console.log(payload);

        // Configuramos la request del fetch()
        const settings = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // lanzar la consulta de login a la API
        realizarLogin(settings)

        // Limpiamos los campos del formulario,
        form.reset()
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
        // console.log(settings);
        console.log("Lanzamos la consulta a la API...");

        fetch(`${url}/users/login`, settings)
            .then(response => {
                console.log(response);
                if (response.ok) return response.json()

                // Algunos de los datos es incorrecots
                console.log("algunos de los datos es incorrecto");
                return Promise.reject(response)
            })
            .then(data => {
                console.log("Promesa cumplida... ");
                console.log(data);
                if (data.jwt) {
                    // Gardar en el LocalStorage el objeto con el token (DNI)
                    localStorage.setItem("jwt", JSON.stringify(data.jwt))

                    // Redirieccionamos a la página con nuestro dashboard
                    location.replace("./mis-tareas.html")
                }
            })
            .catch(err => {
                console.log(err);
                if (err.status == 400) {
                    console.warn("Contraseña incorrecta")
                    alert("Contraseña incorrecta")
                } else if (err.status == 404) {
                    console.warn("El usuario no existe")
                    alert("El usuario no existe")
                } else {
                    console.error("Error del servidor | url no existe")
                    alert("Error del servidor | url no existe")
                }
            })
    };
});