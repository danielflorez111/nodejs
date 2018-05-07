const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBxa_9f44lAmCRS2HNo_ipW2EsJx6J2LJ4`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let formatted_address = location.formatted_address;
    let lat = location.geometry.location.lat;
    let lng = location.geometry.location.lng;

    return {
        direccion: formatted_address,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}
