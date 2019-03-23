
--UNIR PERSONA EMPLEADO Y TABLAX CON ACTIVO
--Selecciona la infotmacion de un activo
CREATE OR ALTER PROC [dbo].[getActivo]
	@IdActivo int
AS
SET NOCOUNT ON

SELECT [IdActivo],
	[Codigo],
	[Nombre],
	[Descripcion],
	[Foto],
	[Precio],
	[TiempoGarantia],
	[VidaUtil],
	[PorcentajeDepreciacion],
	[FechaCompra],
	[FechaRegistro],
	[CentroCosto],
	[ValorResidual],
	[DetalleUbicacion],
	[IdCategoria],
	[IdSede],
	[IdMoneda],
	[IdEstado]
FROM Activo
WHERE [IdActivo] = @IdActivo
SET NOCOUNT OFF
GO

--Insertar un nuevo activo
CREATE OR ALTER PROC [dbo].[setActivo]
	@Codigo varchar(50),
	@Nombre varchar(50),
	@Descripcion varchar(50),
	@Foto varchar(50),
	@Precio int,
	@TiempoGar date,
	@VidaU int,
	@PorcentajeD int,
	@FechaCompra date,
	@FechaRegistro date,
	@CentroCosto int,
	@ValorResidual int,
	@DetalleUb varchar(50),
	@IdCategoria int,
	@IdSede int,
	@IdMoneda int,
	@IdEstado int
	
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Activo (Codigo, Nombre, Descripcion, Foto, Precio, TiempoGarantia, VidaUtil, PorcentajeDepreciacion, FechaCompra,
		FechaRegistro, CentroCosto, ValorResidual, DetalleUbicacion, IdCategoria, IdSede, IdMoneda, IdEstado) 
		VALUES (@Codigo, @Nombre, @Descripcion, @Foto, @Precio, @TiempoGar, @VidaU, @PorcentajeD, @FechaCompra,
		@FechaRegistro, @CentroCosto, @ValorResidual, @DetalleUb, @IdCategoria, @IdSede, @IdMoneda, @IdEstado) 
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

--Actualizar un Activo
CREATE OR ALTER PROC [dbo].[updateActivo]
	@IdActivo int,
	@Codigo varchar(50),
	@Nombre varchar(50),
	@Descripcion varchar(50),
	@Foto varchar(50),
	@Precio int,
	@TiempoGar date,
	@VidaU int,
	@PorcentajeD int,
	@FechaCompra date,
	@FechaRegistro date,
	@CentroCosto int,
	@ValorResidual int,
	@DetalleUb varchar(50),
	@IdCategoria int,
	@IdSede int,
	@IdMoneda int,
	@IdEstado int
	
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		UPDATE Activo SET
		[Codigo] = @Codigo,
		[Nombre] = @Nombre, 
		[Descripcion] = @Descripcion, 
		[Foto] = @Foto, 
		[Precio] = @Precio, 
		[TiempoGarantia] = @TiempoGar, 
		[VidaUtil] = @VidaU, 
		[PorcentajeDepreciacion] = @PorcentajeD, 
		[FechaCompra] = @FechaCompra,
		[FechaRegistro] = @FechaRegistro, 
		[CentroCosto] = @CentroCosto, 
		[ValorResidual] = @ValorResidual, 
		[DetalleUbicacion] = @DetalleUb,
		[IdCategoria] = @IdCategoria, 
		[IdSede] = @IdSede, 
		[IdMoneda] = @IdMoneda, 
		[IdEstado] = @IdEstado 
		WHERE @IdActivo = [Activo].IdActivo
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO



--Selecciona las Provincias
CREATE OR ALTER PROC [dbo].[getProvincias]
	--@IdProvincia int
AS
SET NOCOUNT ON

SELECT [Provincia].Nombre, [Provincia].IdProvincia
FROM Provincia


SET NOCOUNT OFF
GO

--Selecciona los tipos de puesto
CREATE OR ALTER PROC [dbo].[getPuesto]
AS
SET NOCOUNT ON

SELECT [Puesto].Nombre, [Puesto].IdPuesto
FROM Puesto


SET NOCOUNT OFF
GO

-- Agregar Puestos
CREATE OR ALTER PROC [dbo].[setPuesto]
	@NombreP varchar(50)

AS
BEGIN
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Puesto(Nombre) VALUES (@NombreP)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

--Selecciona los departamentos
CREATE OR ALTER PROC [dbo].[getDepartamento]

AS
SET NOCOUNT ON

SELECT [Departamento].Nombre, [Departamento].IdDepartamento
FROM Departamento

SET NOCOUNT OFF
GO

--Agregar Departamentos
CREATE OR ALTER PROC [dbo].[setDepartamento]
	@NombreD varchar(50)

AS
BEGIN
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Departamento(Nombre) VALUES (@NombreD)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- Selecciona las sedes
CREATE OR ALTER PROC [dbo].[getSede]
AS
SET NOCOUNT ON

SELECT [Sede].Nombre, [Sede].IdSede FROM Sede

SET NOCOUNT OFF
GO

--Agregar Sedes
CREATE OR ALTER PROC [dbo].[setSede]
	@NombreS varchar(50)

AS
BEGIN
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Sede(Nombre) VALUES (@NombreS)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

--Selecciona tipos de monedas
CREATE OR ALTER PROC [dbo].[getMonedas]
AS
SET NOCOUNT ON

SELECT [Moneda].Nombre, [Moneda].IdMoneda FROM Moneda

SET NOCOUNT OFF
GO

--Agregar monedas
CREATE OR ALTER PROC [dbo].[setMoneda]
	@NombreM varchar(50)

AS
BEGIN
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Moneda(Nombre) VALUES (@NombreM)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO


-- Seleccionar cont
CREATE OR ALTER PROC [dbo].[Validacion]
	@CorreoEmp varchar

AS
SET NOCOUNT ON

SELECT [Empleado].Contrasena FROM Empleado WHERE @CorreoEmp = [Empleado].Correo

SET NOCOUNT OFF

GO

-- Selecciona informacion del empleado a partir del login
CREATE OR ALTER PROC [dbo].[getEmpleado]
	@CorreoEmp varchar
AS
SET NOCOUNT ON

SELECT [Persona].Nombre, [Persona].Apellido1, [Persona].Apellido2, [Empleado].Foto
FROM Empleado
INNER JOIN Persona ON [Empleado].IdPersona = [Persona].IdPersona
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE @CorreoEmp = [Empleado].Correo

SET NOCOUNT OFF
GO

--Insertar un Nuevo Empleado
CREATE OR ALTER PROCEDURE [dbo].[setEmpleado]
	@Nombre varchar(50),
	@Apellido1 varchar(25),
	@Apellido2 varchar(25),
	@Cedula varchar(10),
	@FechaN int
	--@FechaIngreso date,
	--@Contraseña varchar(50),
	--@Correo varchar (50),
	--@IdSede int,
	--@IdDepartamento int,,
	--@IdPuesto int,
	--@Foto varchar(50)
	 
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Persona (Nombre, Apellido1, Apellido2, FechaNacimiento, Cedula)--FechaIngreso, IdDepartamento, IdSede, IdPuesto, Correo, Contrasena, Foto 
		VALUES (@Nombre, @Apellido1, @Apellido2, @FechaN, @Cedula)--@FechaIngreso ,@IdDepartamento, @IdSede, @IdPuesto, @Correo, @Contrasena, @Foto
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

--Agregar Usuario


--Asignar un activo a un empleado QUEDA PENDIENTE DE DEFINIR
CREATE OR ALTER PROC [dbo].[setActivoXEmpleado]
	@IdEmpleado int,
	@IdActivo int,
	@FechaA date
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		INSERT INTO ActivoXEmpleado(FechaAsignacion, IdActivo, IdEmpleado) 
		VALUES (@FechaA, @IdActivo, @IdEmpleado)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO


--Seleccionar los activos que tiene un empleado se le puede agregar mas informacion
CREATE OR ALTER PROC [dbo].[getActivoXEmpleado]
	@IdEmpleado int
AS
SET NOCOUNT ON

SELECT [Activo].Codigo, [Activo].Nombre, [Activo].Descripcion,
[Persona].Nombre, [Persona].Apellido1, [Persona].Apellido2
FROM ActivoXEmpleado
INNER JOIN Empleado ON [ActivoXEmpleado].IdEmpleado = [Empleado].IdEmpleado
INNER JOIN Persona ON [Empleado].IdPersona = [Persona].IdPersona
INNER JOIN Activo ON [ActivoXEmpleado].IdActivo = [Activo].IdActivo 
WHERE @IdEmpleado = [Empleado].IdEmpleado

SET NOCOUNT OFF
GO

--Selecciona los empleados de un departamento en especifico
CREATE OR ALTER PROC [dbo].[getEmpleadoXDep]
	@IdDepartamento int
AS
SET NOCOUNT ON

SELECT [Persona].Nombre, [Persona].Apellido1, [Persona].Apellido2,
[Persona].Cedula, [Empleado].Fechaingreso, [Puesto].Nombre
FROM Empleado
INNER JOIN Persona ON [Empleado].IdPersona = [Persona].IdPersona
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE @IdDepartamento = [Empleado].IdDempartamento

SET NOCOUNT OFF
GO

--Seleccionar los empleados que trabajan en un mismo puesto
CREATE OR ALTER PROC [dbo].[getEmpleadoXPuest]
	@IdPuesto int
AS
SET NOCOUNT ON

SELECT [Persona].Nombre, [Persona].Apellido1, [Persona].Apellido2,
[Persona].Cedula, [Empleado].Fechaingreso, [Departamento].Nombre, [Sede].Nombre
FROM Empleado
INNER JOIN Persona ON [Empleado].IdPersona = [Persona].IdPersona
INNER JOIN Departamento ON [Empleado].IdDempartamento = [Departamento].IdDepartamento
INNER JOIN Sede ON [Empleado].IdSede = [Sede].IdSede
WHERE @IdPuesto = [Empleado].IdPuesto

SET NOCOUNT OFF
GO

-- Selecciona a los empleados por sede
CREATE OR ALTER PROC [dbo].[getEmpleadoXSede]
	@IdSede int
AS
SET NOCOUNT ON

SELECT [Persona].Nombre, [Persona].Apellido1, [Persona].Apellido2,
[Persona].Cedula, [Empleado].Fechaingreso, [Departamento].Nombre, [Puesto].Nombre
FROM Empleado
INNER JOIN Persona ON [Empleado].IdPersona = [Persona].IdPersona
INNER JOIN Departamento ON [Empleado].IdDempartamento = [Departamento].IdDepartamento
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE @IdSede = [Empleado].IdSede

SET NOCOUNT OFF
GO

--Selecciona a empleados en un rango de fecha de ingreso
CREATE OR ALTER PROC [dbo].[getEmpleadoFechaI]
	@FechaInicial date,
	@FechaFinal date
AS
SET NOCOUNT ON

SELECT [Persona].Nombre, [Persona].Apellido1, [Persona].Apellido2,
[Persona].Cedula, [Empleado].Fechaingreso, [Departamento].Nombre, [Puesto].Nombre
FROM Empleado
INNER JOIN Persona ON [Empleado].IdPersona = [Persona].IdPersona
INNER JOIN Departamento ON [Empleado].IdDempartamento = [Departamento].IdDepartamento
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE [Empleado].Fechaingreso BETWEEN @FechaInicial AND @FechaFinal

SET NOCOUNT OFF
GO

-- Selecciona al empleado que tiene un activo 
CREATE OR ALTER PROC [dbo].[getEmpleadoXActivo]
	@IdActivo int
AS
SET NOCOUNT ON

SELECT [Persona].Nombre, [Persona].Apellido1, [Persona].Apellido2,
[Departamento].Nombre, [Puesto].Nombre, [Sede].Nombre
FROM ActivoXEmpleado
INNER JOIN Empleado ON [ActivoXEmpleado].IdEmpleado = [Empleado].IdEmpleado
INNER JOIN Persona ON [Empleado].IdPersona = [Persona].IdPersona
INNER JOIN Departamento ON [Empleado].IdDempartamento = [Departamento].IdDepartamento
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
INNER JOIN Sede ON [Empleado].IdSede = [Sede].Nombre
WHERE @IdActivo = [ActivoXEmpleado].IdActivo

SET NOCOUNT OFF
GO



