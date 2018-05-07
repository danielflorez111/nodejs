const argv = require('yargs')
    .command('crear', 'Crear un Todo', {
        descripcion: {
            demand: true,
            alias: 'd',
        }
    })
    .command('actualizar', 'Actualizar un Todo', {
        descripcion: {
            demand: true,
            alias: 'd',
        },
        completado: {
            default: true,
            alias: 'c'
        }

    })
    .command('borrar', 'Borrar un Todo', {
        descripcion: {
            demand: true,
            alias: 'd',
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}