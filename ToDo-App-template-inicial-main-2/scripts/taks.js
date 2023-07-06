// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
// console.log(localStorage.jwt);
if (!localStorage.jwt) {
  location.replace("index.html")
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {
  // inicializamos la librería de AOS
  AOS.init();


  /* ---------------- variables globales y llamado a funciones ---------------- */
  const URL = "https://todo-api.ctd.academy/v1";
  const token = JSON.parse(localStorage.jwt)

  const formCrearTarea = document.querySelector('.nueva-tarea');
  const nuevaTarea = document.querySelector('#nuevaTarea');
  const btnCerrarSesion = document.querySelector('#closeApp');

  obtenerNombreUsuario()
  consultarTareas()



  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
    // const cerrarSesion = confirm(" ¿Está seguro de que desea cerrar sesión?")

    // if (cerrarSesion) {
    //   localStorage.clear()
    //   location.replace("index.html")
    // }

    //  agregar la librería del sweetAlert 
    Swal.fire({
      title: '¿Está seguro de cerrar sesión?',
      // text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, deseo salir!',
      cancelButtonText: '¡Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Hasta Luego!',
          'Te esperamos pronto.',
          'success'
        )
        setTimeout(() => {
          localStorage.clear()
          location.replace("index.html")

        }, 850);
      }
    })
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {
      method: "GET",
      headers: {
        authorization: token
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
        authorization: token
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
    event.preventDefault()
    console.log("Crear tarea");
    console.log(nuevaTarea.value);

    const payload = {
      description: nuevaTarea.value.trim()
    }

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      }
    }

    console.log("Creando uan tarea en la base de datos");
    fetch(`${URL}/tasks`, settings)
      .then(res => res.json())
      .then(data => {
        console.log("Promesa cumplida");
        console.log(data);
        consultarTareas()
      })
      .catch(err => console.log(err))

    // Limpiamos el form
    formCrearTarea.reset();

  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    // Obtener los listados y limpiar el contenido que tenga, para que no se sobreescriban las "tarjetas"
    const tareasPendientes = document.querySelector(".tareas-pendientes")
    const tareasTerminadas = document.querySelector(".tareas-terminadas")
    tareasPendientes.innerHTML = ""
    tareasTerminadas.innerHTML = ""

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
           <li 
            class="tarea" 
            data-aos="flip-up" 
            data-aos-easing="ease-in-back"
           >
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
        <li 
          class="tarea" 
          data-aos="zoom-in" 
          data-aos-easing="ease-in"
          data-aos-duration="450"

        >
             <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
             <div class="descripcion">
               <p class="nombre">${tarea.description}</p>
               <p class="timestamp">${fecha.toLocaleDateString()}</p>
             </div>
           </li>
         `
      }
      numeroFinalizados.innerHTML = contador

    })
  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    const btnCambioEstado = document.querySelectorAll(".change")

    btnCambioEstado.forEach(boton => {
      // A cada boton le asignaremos una funcionalidad
      boton.addEventListener("click", (e) => {
        console.log("Cambio de estado de la tarea...");
        console.log(e.target);
        console.log(e.target.id);

        const id = e.target.id
        const uri = `${URL}/tasks/${id}`
        const payload = {}

        // Segun el tipo de boton que fue clickeado, podemos cambiar el estado de la tarea
        if (e.target.classList.contains("incompleta")) {
          // si esta completa, la paso a pendiente
          payload.completed = false
        } else {
          // Sino, está pendiente y la paso a completada
          payload.completed = true
        }
        const settings = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            authorization: token
          },
          body: JSON.stringify(payload)
        }

        fetch(uri, settings)
          .then(res => {
            console.log(res)
            // Vuelvo a consultar la tareas actualizadas y volverlas a pitnar en pantalla (renderizar)
            consultarTareas()
          })
          .catch(err => console.log(err))
      })
    })





  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {





  };

});