USE [Proyecto1BDA]
-- =============================================
-- Descripcion:	<Seleccionar la información de un Activo>
-- Parametro de Entrada: <CodigoActivo>
-- Parametro de Salida: <Ninguno>
-- =============================================
GO
CREATE OR ALTER PROC [dbo].[getActivo]
	@Codigo varchar(50)
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
	[IdCategoria],
	[IdMoneda],
	[IdEstado]
FROM Activo
WHERE [Codigo] = @Codigo
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

SELECT [Activo].Codigo, [Activo].IdEmpleado, [Activo].FechaAsignacion, [Activo].DetalleUbicacion
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
	@Foto varchar(500),
	@Precio int,
	@TiempoGar int,
	@VidaU int,
	@PorcentajeD float,
	@FechaCompra date,
	@FechaAsig date,
	@CentroCosto int,
	@ValorResidual int,
	@IdCategoria int,
	@IdMoneda int,
	@IdEstado int,
	@IdSede int
	
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Activo (Codigo, Nombre, Descripcion, Foto, Precio, TiempoGarantia, VidaUtil, PorcentajeDepreciacion, FechaCompra,
		FechaRegistro, FechaAsignacion, CentroCosto, ValorResidual, DetalleUbicacion, IdEmpleado,IdCategoria, IdSede, IdMoneda, IdEstado) 
		VALUES (@Codigo, @Nombre, @Descripcion, @Foto, @Precio, @TiempoGar, @VidaU, @PorcentajeD, @FechaCompra,
		@FechaAsig, NULL, @CentroCosto, @ValorResidual, NULL, NULL,@IdCategoria, @IdSede, @IdMoneda, @IdEstado) 
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
	@Foto varchar(500),
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

SELECT [Activo].Codigo, [Activo].Nombre,
	[Activo].Descripcion

FROM Activo
WHERE [IdCategoria] = @IdCategoria
SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar el estado de un activo>
-- Parametro de Entrada: <Codigo>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getActivoEst]
	@Codigo varchar(50)
AS
SET NOCOUNT ON

SELECT [Activo].IdEstado, [Estado].Nombre

FROM Activo
INNER JOIN Estado ON [Activo].IdEstado = [Estado].IdEstado
WHERE [Codigo] = @Codigo
SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Asignar un activo a un empleado> YA NO SE USA
-- Parametro de Entrada: <IdActivo, IdEmpleado, FechaAsignacion, IdEstado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[asigActivo]
	@Codigo varchar(50),
	@Cedula varchar(50),
	@IdEstado int,
	@DetalleUbi varchar(100),
	@FechaAsig date
	
AS
BEGIN
	DECLARE
	@IdSede int,
	@IdEmpleado int

	SELECT @IdEmpleado = Empleado.IdEmpleado FROM Empleado
	WHERE @Cedula = [Empleado].Cedula;

	SELECT @IdSede = SedeXEmpleado.IdSede FROM SedeXEmpleado
	WHERE @IdEmpleado = [SedeXEmpleado].IdEmpleado;

	BEGIN TRAN
	BEGIN TRY
		UPDATE Activo SET 
		[IdEstado] = @IdEstado,
		[IdEmpleado] = @IdEmpleado,
		[IdSede] = @IdSede,
		[DetalleUbicacion]= @DetalleUbi,
		[FechaAsignacion] = @FechaAsig
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
-- Descripcion:	<Desasignar un activo a un empleado>
-- Parametro de Entrada: <IdActivo, IdEstado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[quitarActivo]
	@Codigo varchar(50),
	@IdEstado int
	
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		UPDATE Activo SET 
		[IdEstado] = @IdEstado,
		[IdSede] = NULL,
		[DetalleUbicacion] = NULL,
		[IdEmpleado] = NULL,
		[FechaAsignacion] = NULL
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
-- Descripcion:	<Cambia el estado de una sede>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[cerrarSede]
	@IdSede int,
	@FechaSalida date

AS
SET NOCOUNT ON

	UPDATE Sede SET 
	[IdEstado] = 2
	WHERE @IdSede = [Sede].IdSede

	UPDATE SedeXEmpleado
	SET [SedeXEmpleado].FechaSalida = @FechaSalida
	WHERE @IdSede = SedeXEmpleado.IdSede

	UPDATE Empleado 
	SET [Empleado].IdDepartamento = 11,
	[Empleado].IdPuesto = 25 
	FROM SedeXEmpleado
	INNER JOIN Empleado ON SedeXEmpleado.IdEmpleado = Empleado.IdEmpleado
	WHERE @IdSede = SedeXEmpleado.IdSede

SET NOCOUNT OFF
GO


-- =============================================
-- Descripcion:	<Agregar una nueva sede>
-- Parametro de Entrada: <NombreSede>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[setSede]
	@NombreS varchar(50),
	@Ubicacion varchar(100),
	@IdDistrito int,
	@IdEstado int

AS
BEGIN
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Sede(Nombre, DetalleUbicacion, IdDistrito, IdEstado) VALUES (@NombreS, @Ubicacion, @IdDistrito, @IdEstado)
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Seleccionar la informacion de la sede en donde trabaja el empelado>
-- Parametro de Entrada: <IdEmpleado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[infoSedeXEmpleado]
	@IdEmpleado int
AS
SET NOCOUNT ON

SELECT [SedeXEmpleado].IdSede, [Sede].Nombre, [Distrito].Nombre, [Canton].Nombre,
[Provincia].Nombre, [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2
FROM SedeXEmpleado
INNER JOIN Sede ON [SedeXEmpleado].IdSede = [Sede].IdSede
INNER JOIN Distrito  ON [Sede].IdDistrito = [Distrito].IdDistrito
INNER JOIN Canton ON [Distrito].IdCanton = [Canton].IdCanton
INNER JOIN Provincia ON [Canton].IdProvincia = [Provincia].IdProvincia
INNER JOIN Empleado ON [SedeXEmpleado].IdEmpleado = [Empleado].IdEmpleado
WHERE @IdEmpleado = [SedeXEmpleado].IdEmpleado 
SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar los administradores de las sedes>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getAdmi]
AS
SET NOCOUNT ON

SELECT [SedeXEmpleado].IdSede, [Sede].Nombre, [Empleado].Nombre, [Empleado].Apellido1,
[Empleado].Apellido2
FROM SedeXEmpleado
INNER JOIN Sede ON [SedeXEmpleado].IdSede = [Sede].IdSede
INNER JOIN Empleado ON [SedeXEmpleado].IdEmpleado = [Empleado].IdEmpleado
WHERE [Empleado].IdPuesto = 1 OR [Empleado].IdPuesto = 2
SET NOCOUNT OFF
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
	@NombreC varchar(50),
	@Tangible bit

AS
BEGIN
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Categoria(Nombre, Tangible) VALUES (@NombreC, @Tangible)
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
	@IdProvincia int
AS
SET NOCOUNT ON

SELECT [Canton].Nombre, [Canton].IdCanton FROM Canton
WHERE @IdProvincia = [Canton].IdProvincia

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
CREATE OR ALTER PROC sp_login
    @CorreoEmp nvarchar(50)   
AS   
	SELECT *
	FROM Empleado
    WHERE Correo= @CorreoEmp;
GO  

-- =============================================
-- Descripcion:	<Seleccionar informacion de todos los empleados>
-- Parametro de Entrada: <Ninguno>
-- Parametro de Salida: <Ninguno>
-- =============================================
 CREATE OR ALTER   PROC [dbo].[getEmpleados]

AS
SET NOCOUNT ON

SELECT [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2,
	[Empleado].Cedula,[Empleado].Correo, [Empleado].Contrasena, [Empleado].Foto, 
	[SedeXEmpleado].FechaIngreso, [Departamento].Nombre, [Puesto].Nombre
FROM SedeXEmpleado
INNER JOIN Empleado ON [SedeXEmpleado].IdEmpleado = [Empleado].IdEmpleado
INNER JOIN Departamento ON [Empleado].IdDepartamento = [Departamento].IdDepartamento
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE [Empleado].IdEstado = 1 AND [SedeXEmpleado].FechaSalida IS NULL

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Insertar un Nuevo empleado>
-- Parametro de Entrada: <NombreEmpleado, Apellido1, Apellido2, Cedula, FechaNacimiento, FechaIngreso, Correo
--Contrasena, IdSede, IdDepartamento, IdPuesto, Foto>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER   PROCEDURE [dbo].[setEmpleado]
	@Nombre varchar(50),
	@Apellido1 varchar(25),
	@Apellido2 varchar(25),
	@Cedula varchar(10),
	@FechaN date,
	@FechaActual date,
	@Correo varchar (50),
	@Contrasena varchar(50),
	@IdDepartamento int,
	@IdPuesto int,
	@IdSede int,
	@Foto varchar(500)
	
	
	 
AS
BEGIN
	DECLARE
	@IdEmpleado int 
	
	BEGIN TRAN
	BEGIN TRY
		INSERT INTO Empleado (Nombre, Apellido1, Apellido2, Cedula,FechaNacimiento, Correo,
		Contrasena, IdDepartamento, IdPuesto, Foto)
		VALUES (@Nombre, @Apellido1, @Apellido2, @Cedula, @FechaN ,
		 @Correo, @Contrasena,@IdDepartamento, @IdPuesto, @Foto)
		
		SELECT @IdEmpleado = Empleado.IdEmpleado FROM Empleado WHERE @Cedula = Empleado.Cedula
		
		INSERT INTO [SedeXEmpleado] (IdSede,IdEmpleado,FechaIngreso,FechaSalida)
		VALUES (@IdSede,@IdEmpleado,@FechaActual,null)

		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Actualiza la información de un empleado>
-- Parametro de Entrada: <Cedula, Correo, Contrasena, Foto>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[updateEmpleadoInfo]
	@Cedula varchar(50),
	@Correo varchar(50),
	@Contrasena varchar(50),
	@Foto varchar(500)
	
AS
BEGIN
	DECLARE
	@IdEmpleado int 
	SELECT @IdEmpleado = Empleado.IdEmpleado FROM Empleado WHERE @Cedula = Empleado.Cedula
	
	BEGIN TRAN
	BEGIN TRY

		UPDATE Empleado SET 
		[Correo] = @Correo,
		[Contrasena]=  @Contrasena,
		[Foto] = @Foto
		WHERE @Cedula = [Empleado].Cedula

		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Actualiza la información de la sede, del puesto y del departamento>
-- Parametro de Entrada: <Cedula, IdDepartamento, IdSede, IdPuesto, FechaSalida, FechaIngreso>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[cambioEmpleado]
	@Cedula varchar(50),
	@IdDepartamento int,
	@IdSede int,
	@IdPuesto int,
	@FechaSalida date,
	@FechaIngreso date
	
AS
BEGIN
	DECLARE
		@IdEmpleado int

		SELECT @IdEmpleado = Empleado.IdEmpleado FROM Empleado WHERE @Cedula = Empleado.Cedula

	BEGIN TRAN
	BEGIN TRY
		UPDATE SedeXEmpleado SET 
		[FechaSalida] = @FechaSalida
		WHERE @IdEmpleado = [SedeXEmpleado].IdEmpleado AND FechaSalida IS NULL

		INSERT INTO SedeXEmpleado(IdSede, IdEmpleado, FechaIngreso, FechaSalida)
		VALUES (@IdSede, @IdEmpleado, @FechaIngreso, NULL)

		UPDATE Empleado SET 
		[IdDepartamento] = @IdDepartamento,
		[IdPuesto] = @IdPuesto
		WHERE @IdEmpleado = [Empleado].IdEmpleado

		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO


-- =============================================
-- Descripcion:	<Inactivar la cuenta de un empleado>
-- Parametro de Entrada: <IdEmpleado>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[desEmpleado]
	@Cedula varchar(50)
	
AS
BEGIN
	DECLARE
		@IdEmpleado int

	SELECT @IdEmpleado = Empleado.IdEmpleado FROM Empleado WHERE @Cedula = Empleado.Cedula  

	BEGIN TRAN
	BEGIN TRY
		UPDATE Empleado SET 
		[IdEstado] = 2
		WHERE @Cedula = [Empleado].Cedula

		UPDATE Activo SET
		[IdEstado] = 4
		WHERE IdEmpleado = @IdEmpleado

		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO



-- =============================================
-- Descripcion:	<Cambiar el administrado de una sede>
-- Parametro de Entrada: <IdAdminViejo, IdAdminNuevo, IdSede>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[updateAdmin]
	@IdAdminV varchar(50),
	@IdAdminN varchar(50),
	@FechaSalida date,
	@FechaIngreso date,
	@IdSede int
	
AS
BEGIN
	DECLARE
	@IdEmpleadoN int,
	@IdEmpleadoV int

	SELECT @IdEmpleadoN = Empleado.IdEmpleado FROM Empleado WHERE @IdAdminN = Empleado.Cedula
	SELECT @IdEmpleadoV = Empleado.IdEmpleado FROM Empleado WHERE @IdAdminV = Empleado.Cedula

	BEGIN TRAN
	BEGIN TRY
		--ACTUALIZA LA FECHA DE SALIDA DE LOS DEPARTAMENTOS CORRESPONDIENTES
		UPDATE SedeXEmpleado SET 
		[FechaSalida] = @FechaSalida
		WHERE @IdEmpleadoN = [SedeXEmpleado].IdEmpleado AND FechaSalida IS NULL

		UPDATE SedeXEmpleado SET 
		[FechaSalida] = @FechaSalida
		WHERE @IdEmpleadoV = [SedeXEmpleado].IdEmpleado AND FechaSalida IS NULL

		--CREA EL NUEVO REGISTRO DE HISTORIAL DE LOS NUEVOS DEPARTAMENTOS ASIGNADOS
		INSERT INTO SedeXEmpleado(IdSede, IdEmpleado, FechaIngreso, FechaSalida)
		VALUES (@IdSede, @IdEmpleadoN, @FechaIngreso, NULL)

		INSERT INTO SedeXEmpleado(IdSede, IdEmpleado, FechaIngreso, FechaSalida)
		VALUES (@IdSede, @IdEmpleadoV, @FechaIngreso, NULL)

		--ACTUALIZA 
		UPDATE Empleado SET 
		[IdDepartamento] = 6,
		[IdPuesto] = 2
		WHERE @IdEmpleadoN = [Empleado].IdEmpleado

		UPDATE Empleado SET 
		[IdDepartamento] = 11,
		[IdPuesto] = 25
		WHERE @IdEmpleadoV = [Empleado].IdEmpleado

		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

-- =============================================
-- Descripcion:	<Realiza la asignacion de un empleado a una sede>
-- Parametro de Entrada: <IdSede, IdEmpleado, FechaIngreso>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROCEDURE [dbo].[Contrato]
	@IdSede int,
	@IdEmpleado int,
	@FechaIngreso date,
	@FechaSalida date
	 
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		INSERT INTO SedeXEmpleado(IdSede, IdEmpleado, FechaIngreso, FechaSalida)
		VALUES (@IdSede, @IdEmpleado, @FechaIngreso, NULL)
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
[Empleado].Cedula, [Puesto].Nombre, [Sede].Nombre
FROM SedeXEmpleado
INNER JOIN Empleado ON [SedeXEmpleado].IdEmpleado = [Empleado].IdEmpleado
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
INNER JOIN Sede ON [SedeXEmpleado].IdSede = [Sede].IdSede
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
[Empleado].Cedula, [Departamento].Nombre, [Sede].Nombre
FROM SedeXEmpleado
INNER JOIN Empleado ON [SedeXEmpleado].IdEmpleado = [Empleado].IdEmpleado
INNER JOIN Departamento ON [Empleado].IdDepartamento = [Departamento].IdDepartamento
INNER JOIN Sede ON [SedeXEmpleado].IdSede = [Sede].IdSede
WHERE @IdPuesto = [Empleado].IdPuesto

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar a los empleado de una sede>
-- Parametro de Entrada: <IdSede>
-- Parametro de Salida: <Ninguno>
-- =============================================
 CREATE OR ALTER   PROC [dbo].[getEmpleadoXSede]
	@IdSede int
AS
SET NOCOUNT ON

SELECT [Empleado].Nombre, [Empleado].Apellido1, [Empleado].Apellido2,
[Empleado].Cedula,[Empleado].Correo,[Empleado].Contrasena,[Empleado].Foto, [SedeXEmpleado].FechaIngreso, [Departamento].Nombre, [Puesto].Nombre
FROM SedeXEmpleado
INNER JOIN Empleado ON [SedeXEmpleado].IdEmpleado = [Empleado].IdEmpleado
INNER JOIN Departamento ON [Empleado].IdDepartamento = [Departamento].IdDepartamento
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE @IdSede = [SedeXEmpleado].IdSede AND [Empleado].IdEstado = 1 AND [SedeXEmpleado].FechaSalida IS NULL

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
INNER JOIN SedeXEmpleado ON [Empleado].IdEmpleado = [SedeXEmpleado].IdEmpleado
INNER JOIN Sede ON [SedeXEmpleado].IdSede = [Sede].Nombre
WHERE @CodigoActivo = [Activo].Codigo

SET NOCOUNT OFF
GO

-- =============================================
-- Descripcion:	<Seleccionar los datos necesarios para hacer los calculos de depresiación a los Activos>
-- Parametro de Entrada: <CodigoActivo>
-- Parametro de Salida: <Ninguno>
-- =============================================
CREATE OR ALTER PROC [dbo].[getCalculos]
	@CodigoActivo varchar(50)
AS
SET NOCOUNT ON

SELECT [Activo].Codigo, [Activo].PorcentajeDepreciacion, [Activo].Precio, YEAR([Activo].FechaCompra), [Activo].ValorResidual,
	[Activo].CentroCosto

FROM Activo

WHERE @CodigoActivo = [Activo].Codigo

SET NOCOUNT OFF
GO

CREATE OR ALTER PROC sp_assignActive   
    @IdEmpleado int,   
    @IdActivo int   
AS   

    UPDATE Proyecto1BDA.dbo.Activo 
	SET IdEmpleado= @IdEmpleado, FechaAsignacion = GETDATE()
	WHERE IdActivo = @IdActivo;
GO 



CREATE OR ALTER PROC [dbo].[getIdEmpleado]
	@Cedula varchar(50)
AS
SET NOCOUNT ON

SELECT [Empleado].IdEmpleado
FROM Empleado
WHERE @Cedula = [Empleado].Cedula

SET NOCOUNT OFF
GO

CREATE OR ALTER PROC [dbo].[getIdDepartamento]
	@NombreD varchar(50)
AS
SET NOCOUNT ON

SELECT [Departamento].IdDepartamento
FROM Departamento
WHERE @NombreD = [Departamento].Nombre

SET NOCOUNT OFF
GO

CREATE OR ALTER PROC [dbo].[getIdPuesto]
	@NombreP varchar(50)
AS
SET NOCOUNT ON

SELECT [Puesto].IdPuesto
FROM Puesto
WHERE @NombreP = [Puesto].Nombre

SET NOCOUNT OFF
GO

CREATE OR ALTER PROC [dbo].[getIdSede]
	@NombreS varchar(50)
AS
SET NOCOUNT ON

SELECT [Sede].IdSede
FROM Sede
WHERE @NombreS = [Sede].Nombre

SET NOCOUNT OFF
GO

CREATE OR ALTER PROC [dbo].[getActivoStateBySede]
	@IdEstado int,
	@IdSede int
AS
SET NOCOUNT ON

SELECT [Activo].Codigo
FROM Activo
WHERE [IdEstado] = @IdEstado AND [IdSede] =@IdSede
SET NOCOUNT OFF
GO

CREATE OR ALTER PROC [dbo].[cambiarEstadoActivo]
	@Codigo varchar(50),
	@IdEstado int
	
AS
BEGIN

	BEGIN TRAN
	BEGIN TRY
		UPDATE Activo SET 
		[IdEstado] = @IdEstado,
		[DetalleUbicacion] = NULL,
		[IdEmpleado] = NULL,
		[FechaAsignacion] = NULL
		WHERE @Codigo = [Activo].Codigo
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO



