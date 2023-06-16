/* -------------------------------------------------------------------------- */
/*                [1] FUNCION: esperamos la carga de la ventana               */
/* -------------------------------------------------------------------------- */
window.addEventListener("load", () => {
    const formulario = document.querySelector("form")

    formulario.addEventListener("submit", (e) => {
        e.preventDefault()

        postearComentario()

    })
})

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: capturamos los datos del form                 */
/* -------------------------------------------------------------------------- */
function capturarDatos() {
    const titulo = document.querySelector("#titulo")
    const comentario = document.querySelector("#comentario")

    // Armamos jel objeto basado en lo que nos pide api
    let objeto = {
        title: titulo.value,
        body: comentario.value,
        userId: 1,
    }

    return objeto

}

/* -------------------------------------------------------------------------- */
/*                    [3] FUNCION: enviar(postear) a la API                   */
/* -------------------------------------------------------------------------- */
// Nos basamos en la documentacion de la API:
const uri = "https://jsonplaceholder.typicode.com/"
const endpoint = `${uri}posts/`

function postearComentario() {
    // 👇 usamos nuestra funcion para capturar los datos y guardarlos como objeto
    const datos = capturarDatos()

    // Armamos las configuraciones (armar la bomba 💣)
    // La API acepta el json datos, para eso necesitamos stringificarlo los datos
    //  este payload puede llevar otros nombres como configurafcion, config, settings
    const payload = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    fetch(endpoint, payload)
        .then(response => {
            if (!response.ok) return Promise.reject(response)
            return response.json()
        })
        .then(objetoDeDatos => {
            console.log(objetoDeDatos);
            renderizarRespuesta(objetoDeDatos)
        })
        .catch(e => console.log(e))


}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: renderizar respuesta                     */
/* -------------------------------------------------------------------------- */

function renderizarRespuesta(datos) {
    const div = document.querySelector(".respuesta")

    const template = `
        <p>✅ Datos cargados en el servidor</p>
        <p>
            Title: ${datos.title}
        </p>
        <p>
            Body: ${datos.body}
        </p>
    `
    div.innerHTML = template

}


/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// En este caso vamos a trabajar la conexion con APIS,
// en el siguiente DOC vamos a poder ver nuestra tarea
// 👇
// https://docs.google.com/document/d/1ZiCPf7IICvtp6rwfxoq5Wh5dJUROKqNw/preview