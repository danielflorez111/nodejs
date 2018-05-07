const axios = require('axios');

const getClima = async (lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=2bd203ce015d123c4d0f0e98483474a2`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}