/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
        id: "x123",
        nombre: "Nevermind",
        imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
        like: false
    },
    {
        id: "y456",
        nombre: "Thriller",
        imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
        like: true
    },
    {
        id: "z789",
        nombre: "The wall",
        imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
        like: false
    },
    {
        id: "a987",
        nombre: "Abbey Road",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
        like: false
    },
    {
        id: "b654",
        nombre: "Origin of Symmetry",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
        like: false
    },
    {
        id: "c321",
        nombre: "Back in Black",
        imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
        like: false
    }
];



/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
    const nombreUsuario = document.querySelector("#nombreUsuario")
    let usuario = ""
    
    // Pedir el nombre de usuario hasta que sea válido
    do {
        usuario = prompt("Ingrese su nombre de usuario: ").toLowerCase()
        console.log(usuario);
    } while ( usuario == null || usuario == "" || usuario.length < 3);

    // Divido el nombre completo de la variable  "usuario" en el array "nombres" con el método split()
    //let  nombres = usuario.split(" ")
    // console.log(nombres);

    // // Con este for reemplazamos cada elemento del array "nombres" y paso a mayúscula cada "nombre" del array
    // for (let i = 0; i < nombres.length; i++) {
    //     nombres[i] = nombres[i].charAt(0).toUpperCase() + nombres[i].slice(1)        
    // }
    // console.log(nombres);

    // Mismo plan usando un map
    let nombres = usuario.split(" ").map( nombre => (nombre.charAt(0).toUpperCase() + nombre.slice(1)))
    console.log(nombres);

    // vuelvo a asignar al String "usuario" la unión de los elementos del array "nombres" con el método join(" "), para unir los strings en uno sólo, agregando un espacio entre cada uno de ellos gracias al parámetro (" ")
    usuario = nombres.join(" ")
    console.log(usuario);

    // insertamos el nombre obtenido en el HTML
    nombreUsuario.innerText = usuario
}
obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
    const covers = document.querySelector(".covers")
    // Para asergurarnos de vaciar cualquier contenido que la UL haya tenido por defecto en el HTML
    covers.innerHTML = ""

    // Recorrer el listado e insertamos en el HTML a través de las templateLiterals
    listado.forEach((album) => {
        covers.innerHTML += `
            <li data-id="${album.id}" >
                <image src="${album.imagen}" alt="${album.nombre}" >
                <p> ${album.nombre} </p>
                <i id="${album.id}" class="fa fa-heart ${ album.like ? "favorito" : "" }  " > </i>
            </li>
        `
           // ☝ importante repasar el operador ternario, en este caso si el album tiene su
    // propiedad like en true, se le agrega la clase "favorito" al elemento
    });
};

renderizarAlbumes(albumesFamosos);



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil() {
    // desarrollar la función 👇
    const cantAlbums = document.getElementById('cant-albums'),
        cantFavoritos= document.getElementById("cant-favoritos")
    let contadorAlbum=0
    let contadorFavoritos=0
    
    albumesFamosos.forEach(album =>{
        contadorAlbum++
        if (album.like) {
            contadorFavoritos++
        }
    })
    console.log(contadorAlbum)
    console.log(contadorFavoritos)

    if (contadorAlbum == 1){
        cantAlbums.innerText = contadorAlbum + " album" 
    }else{
        cantAlbums.innerText = contadorAlbum + " albumes" 
    } 
    if (contadorFavoritos == 1){
        cantFavoritos.innerText = contadorFavoritos + " favorito" 
    }else{
        cantFavoritos.innerText = contadorFavoritos + " favoritos" 
    } 
}
mostrarDatosEnPerfil();

