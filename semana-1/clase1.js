/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
// function iniciarJuego() {
//     // Saludo al usuario
//     alert("Bienvenido al popular juego de piedra papel o tijera de Frontend 2.");
//     // Guardar en una variable el nombre ingresado. 
//     const nombre = prompt("Ingrese su nombre por favor: ");

//     // alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
//     alert(`Gracias por jugar ${nombre}. ¡Mucha suerte!`);

//     console.log("---------------------");
//     console.log("El nombre del jugador es: ");
//     console.log(nombre);
//     console.log("---------------------");
    
//     return nombre
// }

// // creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
// const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


function iniciarJuego() {
    let nombre = "";
    // Saludo al usuario
    alert("Bienvenido al popular juego de piedra papel o tijera de Frontend 2.");
    // Guardar en una variable el nombre ingresado. 

    do {
        nombre = prompt("Ingrese su nombre por favor: ");        
    } while (!isNaN(nombre) && nombre.length >= 3);

    nombre = nombre.toUpperCase()

    // alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
    alert(`Gracias por jugar ${nombre}. ¡Mucha suerte!`);

    console.log("---------------------");
    console.log("El nombre del jugador es: ");
    console.log(nombre);
    console.log("---------------------");
    
    return nombre
}
// main()

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
// const nombreJugador = iniciarJuego();