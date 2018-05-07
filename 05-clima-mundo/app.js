const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

// getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//         getClima(resp.lat, resp.lng)
//             .then((temp) => console.log(temp))
//             .catch((err) => console.log(err));
//     })
//     .catch((err) => console.log(err));

let getInfo = async (direccion) => {
    try {
        let location = await getLugarLatLng(direccion);
        let temp = await getClima(location.lat, location.lng);
        return `El temperatura en ${location.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar la temperatura en ${location.direccion}`
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));