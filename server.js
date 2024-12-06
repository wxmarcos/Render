const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Render asigna dinámicamente el puerto.

app.use(express.json()); // Middleware para permitir solicitudes con cuerpo JSON

// Ruta GET para obtener la lista de costos de proyectos
app.get('/api/reportes', (req, res) => {
    res.json([
        {
            "id_reporte_costos": 133,
            "anio": 2024,
            "costo_mensual_proyecto": 0,
            "mes": 11,
            "proyecto_id": "a6e2167f-67a1-4f60-b9e9-6bae7bc3a15",
            "proyecto_data": "Sistema de Gestión de Inventarios"
        },
        {
            "id_reporte_costos": 134,
            "anio": 2024,
            "costo_mensual_proyecto": 0,
            "mes": 12,
            "proyecto_id": "a6e2167f-67a1-4f60-b9e9-6bae7bc3a15",
            "proyecto_data": "Sistema de Gestión de Inventarios"
        },
        {
            "id_reporte_costos": 135,
            "anio": 2024,
            "costo_mensual_proyecto": 0,
            "mes": 11,
            "proyecto_id": "0d4e3470-4dc8-4fda-a08f-bb822cb9fc7f",
            "proyecto_data": "Sistema de Gestión de Proyectos"
        },
        {
            "id_reporte_costos": 136,
            "anio": 2024,
            "costo_mensual_proyecto": 0,
            "mes": 12,
            "proyecto_id": "0d4e3470-4dc8-4fda-a08f-bb822cb9fc7f",
            "proyecto_data": "Sistema de Gestión de Proyectos"
        },
        {
            "id_reporte_costos": 137,
            "anio": 2024,
            "costo_mensual_proyecto": 0,
            "mes": 11,
            "proyecto_id": "a6e2167f-67a1-4f60-b9e9-6bae7bc3a15",
            "proyecto_data": "Sistema de Gestión de Inventarios"
        }
    ]);
});

// Ruta POST para agregar un nuevo reporte de costos
app.post('/api/reportes', (req, res) => {
    const newCost = req.body; // Recibe los datos del nuevo reporte de costos

    // Validación básica
    if (!newCost.id_reporte_costos || !newCost.anio || !newCost.costo_mensual_proyecto || !newCost.mes || !newCost.proyecto_id || !newCost.proyecto_data) {
        return res.status(400).json({ error: 'Faltan datos necesarios en la solicitud' });
    }

    // En un caso real, agregaríamos el nuevo reporte a una base de datos o archivo

    res.status(201).json({ message: 'Reporte de costos agregado', proyecto: newCost });
});

// Ruta PUT para actualizar un reporte de costos existente
app.put('/api/reportes/:id', (req, res) => {
    const { id } = req.params; // Obtiene el ID del reporte a actualizar desde la URL
    const updatedCost = req.body; // Recibe los datos actualizados del cuerpo de la solicitud

    // Validación básica
    if (!updatedCost.anio || !updatedCost.costo_mensual_proyecto || !updatedCost.mes || !updatedCost.proyecto_data) {
        return res.status(400).json({ error: 'Faltan datos para actualizar el reporte' });
    }

    // Aquí, como ejemplo, solo devolvemos el reporte actualizado
    res.json({ message: 'Reporte de costos actualizado', id, updatedCost });
});

// Ruta GET para obtener los costos
app.get('/api/costos', (req, res) => {
    res.json([
        {
          "id": 2070,
          "rolId": "1f14a491-e26d-4092-86ea-d76f20c165d1",
          "costo": 0,
          "fecha": "0001-12-01",
          "rolData": "Desarrollador - Senior",
          "anio": 1,
          "mes": 12
        },
        {
          "id": 2092,
          "rolId": "1f14a491-e26d-4092-86ea-d76f20c165d1",
          "costo": 100,
          "fecha": "2024-01-01",
          "rolData": "Desarrollador - Senior",
          "anio": 2024,
          "mes": 1
        },
        // Agregar más datos si es necesario
    ]);
});

// Ruta POST para agregar un nuevo reporte de costos
app.post('/api/costos', (req, res) => {
    const newCost = req.body; // Recibe los datos del nuevo reporte de costos

    // Validación básica
    if (!newCost.id || !newCost.rolId || !newCost.costo || !newCost.fecha || !newCost.rolData || !newCost.anio || !newCost.mes) {
        return res.status(400).json({ error: 'Faltan datos necesarios en la solicitud' });
    }

    // En un caso real, agregaríamos el nuevo reporte a una base de datos o archivo

    res.status(201).json({ message: 'Reporte de costos agregado', costo: newCost });
});

// Ruta PUT para actualizar un reporte de costos existente
app.put('/api/costos/:id', (req, res) => {
    const { id } = req.params; // Obtiene el ID del reporte a actualizar desde la URL
    const updatedCost = req.body; // Recibe los datos actualizados del cuerpo de la solicitud

    // Validación básica
    if (!updatedCost.rolId || !updatedCost.costo || !updatedCost.fecha || !updatedCost.rolData || !updatedCost.anio || !updatedCost.mes) {
        return res.status(400).json({ error: 'Faltan datos para actualizar el reporte' });
    }

    // Aquí, como ejemplo, solo devolvemos el reporte actualizado
    res.json({ message: 'Reporte de costos actualizado', id, updatedCost });
});

// Ruta GET para devolver un saludo
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Hola, mundo!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
