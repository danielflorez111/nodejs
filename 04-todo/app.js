const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = getListado();
        for (let tarea of listado) {
            console.log('==== To do ===='.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
        }
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log('Actualizado', actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log('Borrado', borrado);
        break;

    default:
        console.log('Comando no reconocido');
}