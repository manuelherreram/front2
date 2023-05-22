// nuevo array con listado de planes
const planesMensuales = [{
        tipo: "Básico",
        costo: 300,
        descripcion: "Podes escuchar música sin límites todo el mes."
    },
    {
        tipo: "Dúo",
        costo: 450,
        descripcion: "Música ilimitada para vos y alguien más."
    },
    {
        tipo: "Familiar",
        costo: 600,
        descripcion: "El mejor plan, hasta un total de 5 miembros."
    },
];


// Escuchamos el evento de 'carga' de la ventana 👇
window.addEventListener('load', function () {
    

})


/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.
// 1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
// conocer más música (podemos usar un confirm).
// 2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
// 3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
// 4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront"
// 5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: "Gracias por confiar en nosotros."

