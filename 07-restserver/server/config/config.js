// Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Expiración del token
process.env.CADUCIDAD_TOKEN = '48h';

// Seed token
process.env.SEED = process.env.SEED || 'secret';

// Base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:123456@ds121730.mlab.com:21730/cafe'
}

process.env.URLDB = urlDB;

// Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '225702865465-69dtp12s876g2m6o84mqgfmkvqhnjalo.apps.googleusercontent.com';