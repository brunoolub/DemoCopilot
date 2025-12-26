-- Crear base de datos si no existe
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'DemoDB')
BEGIN
    CREATE DATABASE DemoDB;
END
GO

USE DemoDB;
GO

-- Crear tabla Profiles
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Profiles' AND xtype='U')
BEGIN
    CREATE TABLE Profiles (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(100) NOT NULL,
        photo VARBINARY(MAX) NOT NULL
    );
END
GO