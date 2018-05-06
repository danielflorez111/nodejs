const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archive => console.log(`Archivo creado: ${archive}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}