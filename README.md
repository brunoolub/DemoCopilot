# Perfil de Usuario

Una aplicación web que permite subir una foto de perfil, mostrar el nombre y guardar los datos en SQL Server.

## Cómo usar

1. Configura la base de datos SQL Server ejecutando el script `create_table.sql` en tu servidor local.
2. Instala las dependencias: `npm install`
3. Inicia el servidor: `npm start`
4. Abre `http://localhost:3000` en tu navegador.
5. Ingresa tu nombre, selecciona una foto y haz clic en "Guardar Perfil".

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Express
- Multer
- MSSQL

## Notas

- Asegúrate de tener SQL Server corriendo localmente con una base de datos llamada 'DemoDB'.
- La foto se guarda como binario en la base de datos.