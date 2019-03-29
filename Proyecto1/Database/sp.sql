
-- =============================================
-- Descripcion:	<Seleccionar la información de un Activo>
-- Parametro de Entrada: <CodigoActivo>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getActivo]
	@Codigo int
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
WHERE [Codigo] = Codigo
SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar la información de un Activo con Estado no Asignado>
-- Parametro de Entrada: <CodigoActivo, IdEstado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getActivoLi]
	@IdEstado int,
	@IdCategoria int
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
	[IdMoneda]
FROM Activo
WHERE [IdEstado] = @IdEstado AND [IdCategoria] =@IdCategoria
SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Insertar la información de un nuevo Activo>
-- Parametro de Entrada: <CodigoActivo, Nombre, Descripcion, Foto (enlace), Precio, TiempoGarantia
--VidaUtil, PorcentajeDepreciacion, FechaCompra, FechaRegistro, FechaAsignacion, CentroCosto, ValorResidual
--DetalleUbicacion, IdCategoria, IdSede, IdMoneda, IdEstado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[setActivo]
	@Codigo varchar(50),
	@Nombre varchar(50),
	@Descripcion varchar(50),
	@Foto varchar(50),
	@Precio int,
	@TiempoGar int,
	@VidaU int,
	@PorcentajeD int,
	@FechaCompra date,
	@FechaRegistro date,
	@FechaAsig date,--PONER FECHA DEL SISTEMA POR DEFECTO
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
		FechaRegistro, FechaAsignacion, CentroCosto, ValorResidual, DetalleUbicacion, IdEmpleado,IdCategoria, IdSede, IdMoneda, IdEstado) 
		VALUES (@Codigo, @Nombre, @Descripcion, @Foto, @Precio, @TiempoGar, @VidaU, @PorcentajeD, @FechaCompra,
		@FechaRegistro, @FechaAsig, @CentroCosto, @ValorResidual, @DetalleUb, NULL,@IdCategoria, @IdSede, @IdMoneda, @IdEstado) 
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Actualizar la informacion de un activo>
-- Parametro de Entrada: <CodigoActivo, Nombre, Descripcion, Foto (enlace), Precio, TiempoGarantia
--VidaUtil, PorcentajeDepreciacion, FechaCompra, FechaRegistro, CentroCosto, ValorResidual,DetalleUbicacion
--IdSede, IdMoneda>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[updateActivo]
	@Codigo varchar(50),--PUEDE SER CON IDACTIVO
	@Nombre varchar(50),
	@Descripcion varchar(50),
	@Foto varchar(50),
	@Precio int,
	@TiempoGar int,
	@VidaU int,
	@PorcentajeD int,
	@FechaCompra date,
	@FechaRegistro date,
	@CentroCosto int,
	@ValorResidual int,
	@DetalleUb varchar(50),
	@IdSede int,
	@IdMoneda int
	
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		UPDATE Activo SET
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
		[IdSede] = @IdSede, 
		[IdMoneda] = @IdMoneda 
		WHERE @Codigo = [Activo].Codigo
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Seleccionar Activos de una categoria especifica>
-- Parametro de Entrada: <IdCategoria>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getActivoCat]
	@IdCategoria int
AS
SET NOCOUNT ON

SELECT [Activo].IdActivo, [Activo].Codigo, [Activo].Nombre,
	[Activo].Descripcion

FROM Activo
WHERE [IdCategoria] = @IdCategoria
SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Asignar un activo a un empleado>
-- Parametro de Entrada: <IdActivo, IdEmpleado, FechaAsignacion, IdEstado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[asigActivo]
	@IdActivo int,
	@IdEmpleado int,
	@FechaAsig date,
	@IdEstado int
	
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		UPDATE Activo SET 
		[IdEstado] = @IdEstado,
		[IdEmpleado] = @IdEmpleado,
		[FechaAsignacion] = @FechaAsig
		WHERE @IdActivo = [Activo].IdActivo
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Desasignar un activo a un empleado>
-- Parametro de Entrada: <IdActivo, IdEstado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[quitarActivo]
	@IdActivo int,
	@IdEstado int
	
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		UPDATE Activo SET 
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

-- =============================================
-- Descripcion:	<Seleccionar Provincias>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getProvincia]
AS
SET NOCOUNT ON

SELECT [Provincia].Nombre, [Provincia].IdProvincia
FROM Provincia


SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar los tipos de puesto>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getPuesto]
AS
SET NOCOUNT ON

SELECT [Puesto].Nombre, [Puesto].IdPuesto
FROM Puesto


SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Insertar un nuevo puesto>
-- Parametro de Entrada: <NombrePuesto>
-- Parametro de Salida: <Ninguno>
-- =============================================
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

-- =============================================
-- Descripcion:	<Seleccionar los tipos de estado>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getEstado]
AS
SET NOCOUNT ON

SELECT [Estado].Nombre, [Estado].IdEstado
FROM Estado


SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Insertar un nuevo estado>
-- Parametro de Entrada: <NombreEstado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[setEstado]
	@NombreE varchar(50)

AS
BEGIN
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Estado(Nombre) VALUES (@NombreE)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Seleccionar los Departamentos de la sede>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getDepartamento]

AS
SET NOCOUNT ON

SELECT [Departamento].Nombre, [Departamento].IdDepartamento
FROM Departamento

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Inserta un nuevo departamento>
-- Parametro de Entrada: <NombreDepartamento>
-- Parametro de Salida: <Ninguno>
-- =============================================
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

-- =============================================
-- Descripcion:	<Seleccionar las sedes>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getSede]
AS
SET NOCOUNT ON

SELECT [Sede].Nombre, [Sede].IdSede FROM Sede

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Agregar una nueva sede>
-- Parametro de Entrada: <NombreSede>
-- Parametro de Salida: <Ninguno>
-- =============================================
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

-- =============================================
-- Descripcion:	<Seleccionar los tipos de moneda>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getMonedas]
AS
SET NOCOUNT ON

SELECT [Moneda].Nombre, [Moneda].IdMoneda FROM Moneda

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Agregar un nuevo tipo de moneda>
-- Parametro de Entrada: <NombreMoneda>
-- Parametro de Salida: <Ninguno>
-- =============================================
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

-- =============================================
-- Descripcion:	<Seleccionar los tipos de categoria>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getCategoria]
AS
SET NOCOUNT ON

SELECT [Categoria].Nombre, [Categoria].IdCategoria FROM Categoria

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Insertar una Nueva Categoria>
-- Parametro de Entrada: <NombreCategoria, Tangible(booleano)>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[setCategoria]
	@NombreC varchar(50)

AS
BEGIN
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Categoria(Nombre) VALUES (@NombreC)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Seleccionar los cantones>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getCanton]
AS
SET NOCOUNT ON

SELECT [Canton].Nombre, [Canton].IdCanton FROM Canton

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar los distritos>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getDistrito]
	@IdCanton int

AS
SET NOCOUNT ON

SELECT [Distrito].Nombre, [Distrito].IdDistrito FROM Distrito
WHERE [IdCanton] = @IdCanton

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Validacion para el inicio de sesion de un usuario>
-- Parametro de Entrada: <CorreoEmpleado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROCEDURE sp_Login
    @CorreoEmp nvarchar(50)   
AS   

    SELECT Contrasena
	FROM Empleado
    WHERE Correo= @CorreoEmp;  
GO 

-- =============================================
-- Descripcion:	<Sleccionar informacion del empleado a partir del login>
-- Parametro de Entrada: <CorreoEmpleado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getEmpleado]
	@CorreoEmp varchar
AS
SET NOCOUNT ON

SELECT [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2, [Empleado].Foto
FROM Empleado
WHERE @CorreoEmp = [Empleado].Correo

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Insertar un Nuevo empleado>
-- Parametro de Entrada: <NombreEmpleado, Apellido1, Apellido2, Cedula, FechaNacimiento, FechaIngreso, Correo
--Contrasena, IdSede, IdDepartamento, IdPuesto, Foto>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROCEDURE [dbo].[setEmpleado]
	@Nombre varchar(50),
	@Apellido1 varchar(25),
	@Apellido2 varchar(25),
	@Cedula varchar(10),
	@FechaN date,
	@FechaIngreso date,
	@Correo varchar (50),
	@Contrasena varchar(50),
	@IdSede int,
	@IdDepartamento int,
	@IdPuesto int,
	@Foto varchar(50)
	 
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Empleado (Nombre, Apellido1, Apellido2, Cedula,FechaNacimiento, FechaIngreso, 
		IdDepartamento, IdSede, IdPuesto, Correo, Contrasena, Foto)
		VALUES (@Nombre, @Apellido1, @Apellido2, @Cedula, @FechaN, @FechaIngreso ,
		@IdDepartamento, @IdSede, @IdPuesto, @Correo, @Contrasena, @Foto)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Seleccionar los activos que tiene un empleado>
-- Parametro de Entrada: <IdEmpleado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getActivoXEmpleado]
	@IdEmpleado int
AS
SET NOCOUNT ON

SELECT [Activo].Codigo, [Activo].Nombre, [Activo].Descripcion,
[Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2
FROM Activo
INNER JOIN Empleado ON [Activo].IdEmpleado = [Empleado].IdEmpleado 
WHERE @IdEmpleado = [Empleado].IdEmpleado

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar los empleados de un departamento en especifico>
-- Parametro de Entrada: <IdDepartamento>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getEmpleadoXDep]
	@IdDepartamento int
AS
SET NOCOUNT ON

SELECT [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2,
[Empleado].Cedula, [Empleado].Fechaingreso, [Puesto].Nombre
FROM Empleado
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE @IdDepartamento = [Empleado].IdDepartamento

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar los empleados que trabajan en un mismo puesto>
-- Parametro de Entrada: <IdPuesto>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getEmpleadoXPuest]
	@IdPuesto int
AS
SET NOCOUNT ON

SELECT [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2,
[Empleado].Cedula, [Empleado].Fechaingreso, [Departamento].Nombre, [Sede].Nombre
FROM Empleado
INNER JOIN Departamento ON [Empleado].IdDepartamento = [Departamento].IdDepartamento
INNER JOIN Sede ON [Empleado].IdSede = [Sede].IdSede
WHERE @IdPuesto = [Empleado].IdPuesto

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar a los empleado de una sede>
-- Parametro de Entrada: <IdSede>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getEmpleadoXSede]
	@IdSede int
AS
SET NOCOUNT ON

SELECT [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2,
[Empleado].Cedula, [Empleado].Fechaingreso, [Departamento].Nombre, [Puesto].Nombre
FROM Empleado
INNER JOIN Departamento ON [Empleado].IdDepartamento = [Departamento].IdDepartamento
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE @IdSede = [Empleado].IdSede

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar a los empleados que entraron en un rango de fechas>
-- Parametro de Entrada: <FechaInicial, FechaFinal>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getEmpleadoFechaI]
	@FechaInicial date,
	@FechaFinal date
AS
SET NOCOUNT ON

SELECT [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2,
[Empleado].Cedula, [Empleado].Fechaingreso, [Departamento].Nombre, [Puesto].Nombre
FROM Empleado
INNER JOIN Departamento ON [Empleado].IdDepartamento = [Departamento].IdDepartamento
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE [Empleado].Fechaingreso BETWEEN @FechaInicial AND @FechaFinal

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar a un empleado que tiene un activo en especifico>
-- Parametro de Entrada: <CodigoActivo>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getEmpleadoXActivo]
	@CodigoActivo int
AS
SET NOCOUNT ON

SELECT [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2,
[Departamento].Nombre, [Puesto].Nombre, [Sede].Nombre
FROM Activo
INNER JOIN Empleado ON [Activo].IdEmpleado = [Empleado].IdEmpleado
INNER JOIN Departamento ON [Empleado].IdDepartamento = [Departamento].IdDepartamento
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
INNER JOIN Sede ON [Empleado].IdSede = [Sede].Nombre
WHERE @CodigoActivo = [Activo].Codigo

SET NOCOUNT OFF
GO

