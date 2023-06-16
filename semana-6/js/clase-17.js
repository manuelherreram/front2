// 🚩 Primero que nada vamos a enlazar el HTML con este nuevo script y a su vez
// vamos a comentar la linea que lo vincula con el script de la clase 16.
// La idea es desarrollar en este script las nuevas y mejoradas funcionalidades.

/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: Consulta a la API                       */
/* -------------------------------------------------------------------------- */
// En este caso vamos a consultar a un servidor del cual nos vamos a traer la data.
// Esta API tiene su documentación en: https://jsonplaceholder.typicode.com/
// Vamos a implementar el endpoint que nos devuelve comentarios para mostrarlos en pantalla.

function consultaApi(endpoint) {
    fetch(endpoint)
        .then(objetoRespuestaJSON => {
            // console.log(objetoRespuestaJSON);
            if (objetoRespuestaJSON.ok) {
                return objetoRespuestaJSON.json()
            }
            return Promise.reject(objetoRespuestaJSON) // Con esto yo me aseguro de que si la respueta es rechazada, puedo enviar al catch un objeto con el tipo de error para ser evaluado
        })
        .then(datosJS => {
            // console.log(datosJS);
            renderizarElementos(datosJS)
        })
        .catch(err => {
            console.log(err.status)
            if (err.status == 404) {
                console.warn("La ruta que estás buscando no existe, o algo de eso no va bien")
            } else if (err.status == 400) {
                console.warn("El usuario ya se encuentra registrado / Alguno de los datos requeridos está incompleto")
            } else if (err.status == 500) {
                console.warn("Error del servidor")
            } else if (err.status == 401) {
                console.warn("\✋🏼 ¡No está autirizado a acceder a la URL! ")
                alert("\✋🏼 ¡No está autirizado a acceder a la URL! ")
            } else {
                console.error("La URL es incorrecta! ")
                alert("\🛑 ¡La URL es incorrecta o no existe! ")
            }

        })
}

/* -------------------------------------------------------------------------- */
/*                      [5] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
// Vamos a reimplementar la escucha del click lanzar las nuevas funciones.

const boton = document.querySelector('button');
const endpoint = 'https://jsonplaceholder.typicode.com/comments';

boton.addEventListener("click", () => {
    console.log("Click para ver los comentarios");

    consultaApi(endpoint)

    console.log("Fin del evento");
})


/* -------------------------------------------------------------------------- */
/*                      [6] FUNCION: renderizar elementos                     */
/* -------------------------------------------------------------------------- */
// Acá vamos a reutilizar la función de renderizar renderizarElementos, implementando
// el .map() y .join() para obtener el resultado esperado.

function renderizarElementos(listado) {
    // console.log(listado);
    const comentarios = document.querySelector(".comentarios")

    /// Metodo con .forEach()
    /*
    console.log(listado);
    comentarios.innerHTML = ""
    listado.forEach(item => {
        comentarios.innerHTML += `
            <div class="comentario">
                <h4>${item.email}</h4>
                <p>${item.body}</p>
            </div>
        `
    });
    console.log(listado);
    */

    /// Metodo con .map()
    // /*
    // const listaMap = listado.map(item => {
    //     return `
    //         <div class="comentario">
    //             <h4>${item.email}</h4>
    //             <p>${item.body}</p>
    //         </div>
    //     `
    // })

    // console.log(listado);
    // console.log(listaMap);


    // comentarios.innerHTML = listaMap
    // comentarios.innerHTML = listaMap.join("")

    ///Resumiendo
    comentarios.innerHTML = listado.map(item => {
        return `
            <div class="comentario">
                <h4>${item.email}</h4>
                <p>${item.body}</p>
            </div>
        `
    }).join("")

    console.log(listado);


    // */

}

/* ----------------------------- Mesa de trabajo ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                              Mejoras de código                             */
/* -------------------------------------------------------------------------- */
// En este caso no debemos desarrollar una nueva funcionalidad necesariamente. Aunque
// siempre que lo creas necesario va a estar bien modularizar en funciones el código.
// Queda a criterio del grupo generar o no nuevas funciones.
// En este caso deberan cumplir con nuevos requerimientos que necesita la aplicación.
// 1- En el caso de la consulta a la API, si la misma no es satisfactoria, deberá arrojar
// un error que se le muestre al usuario.
// 2- Para lograr ver el error podemos forzarlo modificando el endpoint incorrectamente,
// para detectar y arrojar el error deben implementar el bloque try().catch()
// 3- Si los comentarios llegan y se cargan correctamente, el botón de "Ver comentarios"
// debe desaparecer de la interfaz. Así evitamos que se vuelva a llamar a la API.
// 4- Solo deben cargarse los primeros 10 comentarios que nos llegan.