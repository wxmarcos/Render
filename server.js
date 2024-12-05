const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Render asigna dinámicamente el puerto.

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensaje: 'Lista de usuarios' });
});

app.get('/api/costos', (req, res) => {
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
        ]
        
    );
});

app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Hola, mundo!' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});