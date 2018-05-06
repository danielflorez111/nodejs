const { crearArchivo } = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];

crearArchivo(parametro)
    .then(archive => console.log(`Archivo creado: ${archive}`))
    .catch(err => console.log(err));