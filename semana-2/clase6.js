const listadoNoticias = [{
        titulo: "La emoción de Lisandro Martínez",
        epigrafe: "La increíble ovación de los hinchas de Manchester United al defensor argentino: 'Quise llorar'.",
        foto: "./img/futbol.webp"
    },
    {
        titulo: "La renuncia de Liz Truss",
        epigrafe: "Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.",
        foto: "./img/boris.webp"
    },
    {
        titulo: "Los motivos",
        epigrafe: "Una escuela argentina fue elegida entre las diez mejores del mundo.",
        foto: "./img/escuela.webp"
    }
]

// Vamos a trabajar con nodos de manera dinámica, sobre todo crearlos desde JS en vez de que estén estáticos en el HTML
// Para eso vamos a valernos de array listadoNoticias que tenemos más arriba
// ¿Cual es la idea? utilizar la información que nos llega del listado para presentarla en pantalla.

// Primero, mantengamos el HTML vinculado solo con clase5 y clase6 👌

/* -------------------------- PRACTICANDO ATRIBUTOS ------------------------- */
// Completemos correctamente el 'alt' de cada imagen con la frase "miniatura de noticia"
// const imagenes = document.querySelectorAll(".noticias article img")
// console.log(imagenes);
// console.log(`alt: ${imagenes[0].getAttribute("alt") }`);
// imagenes[0].setAttribute("alt","miniatura de la noticia")
// console.log(`alt: ${imagenes[0].getAttribute("alt") }`);

// for (let i = 0; i < imagenes.length; i++) {
//     imagenes[i].setAttribute("alt", "miniatura de la noticia")
//     console.log(imagenes[i]);    
// }


/* ---------------------- PRACTICANDO CREACION DE NODOS --------------------- */
// 1- Ahora vamos a ir al HTML y eliminar los 3 Article que se encuentran en el main.
// 2- Comentamos la parte de este código de "Practicando atributos"
// 3- Vamos a crear de a uno e insertarlos en el HTML usando un bucle👇

const main = document.querySelector("main")

listadoNoticias.forEach( (noticia) => {
    // 1er paso. crear los elementos
    const article = document.createElement("article")
    const h2  = document.createElement("h2")
    const img  = document.createElement("img")
    const p  = document.createElement("p")

    //2 completamos los nodos con sus propiedades
    h2.innerText = noticia.titulo
    img.setAttribute("src", noticia.foto)
    img.setAttribute("alt", "miniatura de la noticia" )
    p.innerText = noticia.epigrafe

    //3  armar los nodos dentro de la etiqueta donde van 
    article.appendChild(h2)
    article.appendChild(img)
    article.appendChild(p)

    // 4  finalmente lo insertamos en el HTML
    main.appendChild(article)
})

const noticiasTech = {
    titulo: "Elon Musk comparó a Soros con Magneto",
    imagen: "https://statics.eleconomista.com.ar/2023/05/crop/64638b3b4461d__420x280.webp",
    epigrafe: "Magneto se convierte en tendencia en Twitter después de que Musk comparara a Soros con el personaje de X-Men"
}

main.innerHTML += `
    <article>
        <h2>${noticiasTech.titulo} </h2>
        <img src="${noticiasTech.imagen}" alt="Elon Musk Enojado" >
        <p>${noticiasTech.titulo}</p>
    </article>
` 


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
// Una vez que solo tenemos el código comentado podemos empezar la practica.
// 1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
// 2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas Literales (con comillas invertidas -> ``)
// 3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML para insertar la plantilla creada.
// Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
// document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`;

function renderizandoElementos() {
    // desarrollar la consigna aquí


}
renderizandoElementos();