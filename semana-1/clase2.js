/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve 1, 2 o 3 según la elección del usuario.
// Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

function pedirJugada() {
    // empezar con la varialbe eleccion por defecto en 0
    let eleccion = 0
   
    do {
        eleccion = parseInt(prompt("Ingrese para jugar: 1(piedra), 2(papel), 3(tijera)"))
    } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3);
    console.log("---------------------");
    console.log("La eleccion del jugador es: " );
    console.log(eleccion);
    console.log("---------------------");
    
    return eleccion
}


/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
    // let numero = parseInt((Math.random() * 3) +1)
    // let numero = parseInt(Math.random() * 3 + 1)
    let numero = Math.floor(Math.random()*(3-1+1)+1)
//  Math.floor(Math.random()*(max-min+1)+min)
   /// random me da un valor entre 0 y 1 -> [0 , 1) 
   /// Math.random() * max  + min;
    console.log("---------------------");
    console.log("La eleccion del Computador  es: " );
    console.log(numero);
    console.log("---------------------");
    
    // finalmente retorno el valor de la eleccion aleatoria
    return numero
}



/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

function compararJugadas() {
    const RESULTADOS_POSIBLES = ['¡Genial, ganaste!', 'Esto fue un empate.', 'Una lástima, perdiste.'];

    const eleccionJugador =  pedirJugada()
    const eleccionComputadora = jugadaRandom()

    // por defecto el jugador gana
    let resultaRonda = RESULTADOS_POSIBLES[0]

    // Revisar en caso de que empate
    if (eleccionJugador == eleccionComputadora) {
        resultaRonda = RESULTADOS_POSIBLES[1]
    } else if (
        (eleccionJugador === 1 && eleccionComputadora == 2) || (eleccionJugador === 2 && eleccionComputadora === 3) || (eleccionJugador === 3 && eleccionComputadora === 1)
    ) {
        resultaRonda = RESULTADOS_POSIBLES[2]       
    }

    console.log("---------------------");
    console.log("El resultado es: " );
    console.log(resultaRonda);
    console.log("---------------------");
    
    return resultaRonda
   
}

// const resultadoDePartida = compararJugadas()
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.



