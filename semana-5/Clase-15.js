// Vamos implementar esta funcion en el script de Clase 13 al principio.
// La idea es que antes de la carga de la window hagamos un chequeo del Storage.
/* -------------------------------------------------------------------------- */
/*                [10] FUNCION: chequeamos si existe un usuario               */
/* -------------------------------------------------------------------------- */

function chequearUsuarioValido() {

    // 👇 objeto que obtenemos del storage
    const usuario = JSON.parse(localStorage.getItem("user"))
    console.log(usuario);

    // chequeamos las propiedades del objeto
    if (usuario !== null) {
        // 
        const { email, password, rol } = usuario
        console.log("Usuario");
        console.log(` -> ${email} \n  -> ${password} \n  -> ${rol} \n  `);
    } else {
        localStorage.clear()
        location.replace("./")
    }

}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
