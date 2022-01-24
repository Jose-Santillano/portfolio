//  Servidor

const express = require('express');
const path = require('path');

//Aplicación Express
const app = express();

//Asignamos la ruta estatica.
app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

//Asignamos la ruta del "index.html".
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
})

//Lanzamos el servidor.
app.listen(process.env.PORT || 3000, () => console.log('Server is working...'));