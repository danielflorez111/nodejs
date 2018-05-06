let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: "Daniel",
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log("Usuario de base de datos", usuario);
});