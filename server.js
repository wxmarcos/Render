const fs = require('fs');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Ruta para leer y enviar el contenido del archivo de texto
app.get('/api/datos', (req, res) => {
    const filePath = './data/data.txt';

    // Leer el archivo de forma asíncrona
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'No se pudo leer el archivo' });
        }

        res.send(data); // Enviar el contenido del archivo como respuesta
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
