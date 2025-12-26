const express = require('express');
const sql = require('mssql');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de Multer para subir archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configuración de la base de datos SQL Server
const config = {
  server: 'medvesoft.tplinkdns.com',
  database: 'DemoCopilot',
  user: 'sa', // Reemplaza con tu usuario de SQL Server
  password: 'H0rmiga2024', // Reemplaza con tu contraseña
  port: 1433,
  options: {
    trustedConnection: true, // Cambiar a false para usar usuario/contraseña
    enableArithAbort: true,
    trustServerCertificate: true,
    encrypt: false, // Para conexiones remotas
  },
};

// Conectar a la base de datos
sql.connect(config).then(() => {
  console.log('Conectado a SQL Server');
}).catch(err => {
  console.error('Error conectando a SQL Server:', err);
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para subir perfil
app.post('/upload', upload.single('photo'), async (req, res) => {
  const name = req.body.name;
  const photo = req.file ? req.file.buffer : null;

  if (!name || !photo) {
    return res.status(400).send('Nombre y foto son requeridos');
  }

  try {
    const request = new sql.Request();
    await request.input('name', sql.NVarChar, name)
                  .input('photo', sql.VarBinary, photo)
                  .query('INSERT INTO Profiles (name, photo) VALUES (@name, @photo)');
    res.send('Perfil guardado exitosamente');
  } catch (err) {
    console.error('Error guardando en DB:', err);
    res.status(500).send('Error guardando el perfil: ' + err.message);
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});