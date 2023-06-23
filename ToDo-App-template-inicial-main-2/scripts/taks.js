// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
// console.log(localStorage.jwt);
if (!localStorage.jwt) {
  location.replace("index.html")
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {
  /* ---------------- variables globales y llamado a funciones ---------------- */
  const URL = "https://todo-api.ctd.academy/v1";
  const token = localStorage.jwt

  const formCrearTarea = document.querySelector('.nueva-tarea');
  const nuevaTarea = document.querySelector('#nuevaTarea');
  const btnCerrarSesion = document.querySelector('#closeApp');

  obtenerNombreUsuario()
  consultarTareas()



  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function (e) {
    const cerrarSesion = confirm(" ¿Está seguro de que desea cerrar sesión?")

    if (cerrarSesion) {
      localStorage.clear()
      location.replace("index.html")
    }
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {
      method: "GET",
      headers: {
        authorization: JSON.parse(token)
      }
    }


    fetch(`${URL}/users/getMe`, settings)
      .then(res => (res.ok) ? res.json() : Promise.reject(res))
      .then(data => {
        console.log(data);
        const nombreDeUsuario = document.querySelector(".user-info p")
        nombreDeUsuario.textContent = data.firstName
      })
      .catch(error => {
        console.log(error);
      })
  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const settings = {
      method: "GET",
      headers: {
        authorization: JSON.parse(token)
      }
    }

    fetch(`${URL}/tasks`, settings)
      .then(res => (res.ok) ? res.json() : Promise.reject(res))
      .then(tareas => {
        console.log("Tareas del usuario");
        console.log(tareas);

        renderizarTareas(tareas)
        botonesCambioEstado()
        botonBorrarTarea()

      })
      .catch(error => {
        console.log(error);
      })




  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {

  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    // Obtener los listados y limpiar el contenido que tenga, para que no se sobreescriban las "tarjetas"
    const tareasPendientes = document.querySelector('.tareas-pendientes');
    const tareasTerminadas = document.querySelector('.tareas-terminadas');
    tareasPendientes.innerHTML = "";
    tareasTerminadas.innerHTML = "";

    //Buscamos el contador de tareas en verde de nuestro html
    const numeroFinalizados = document.querySelector("#cantidad-finalizadas")
    let contador = 0
    numeroFinalizados.innerHTML = contador

    listado.forEach(tarea => {
      // Creamos una tarea intermedia para analizar la fecha
      let fecha = new Date(tarea.createdAt)

      if (tarea.completed) {
        contador++
        tareasTerminadas.innerHTML += `
          <li class="tarea">
            <div class="hecha">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </li>
        `
      } else {
        tareasPendientes.innerHTML += `
       <li class="tarea">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${fecha.toLocaleDateString()}</p>
            </div>
          </li>
        `
      }

    });







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {





  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {





  };

});