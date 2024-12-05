const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Render asigna dinámicamente el puerto.

app.use(express.json());

app.get('/', (req, res) => {
    res.send('DASASDASSAD');
});

app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Hola, mundo!' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});