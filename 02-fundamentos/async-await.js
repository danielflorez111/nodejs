// let getNombre = async () => {
//     return "Daniel";
// };

// let saludar = async () => {
//     let nombre = await getNombre();
//     return `Hola ${nombre}`;
// };

// saludar().then(mensaje => console.log(mensaje));


// getNombre().then((nombre) => {
//     console.log(nombre);
// }).catch((err) => {
//     console.log(err);
// });


let empleados = [
    {
        id: 1,
        nombre: "Daniel"
    },
    {
        id: 2,
        nombre: "Laura"
    },
    {
        id: 3,
        nombre: "Juan"
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

let getInfo = async (id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return salario;
}

getInfo(1).then((salario) => {
    console.log(salario);
}).catch((err) => {
    console.log(err);
});