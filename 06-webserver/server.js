const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    let salida = {
        nombre: 'Daniel',
        edad: 25,
        url: req.url
    }

    res.send(salida);

    // res.send('Hola mundo');
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});