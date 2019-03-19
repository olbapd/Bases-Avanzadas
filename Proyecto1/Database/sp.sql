
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

--Selecciona los tipos de puesto
CREATE OR ALTER PROC [dbo].[getPuesto]
	@IdPuesto int
AS
SET NOCOUNT ON

SELECT [Puesto].Nombre
FROM Puesto
WHERE @IdPuesto = [Puesto].IdPuesto

SET NOCOUNT OFF
GO

--Selecciona los departamentos
CREATE OR ALTER PROC [dbo].[getDepartamento]
	@IdDepartamento int
AS
SET NOCOUNT ON

SELECT [Departamento].Nombre
FROM Departamento
WHERE @IdDepartamento = [Departamento].IdDepartamento

SET NOCOUNT OFF
GO

-- Selecciona las sedes
CREATE OR ALTER PROC [dbo].[getSede]
	@IdSede int
AS
SET NOCOUNT ON

SELECT [Sede].Nombre
FROM Sede
WHERE @IdSede = [Sede].IdSede

SET NOCOUNT OFF
GO

-- Selecciona informacion del empleado a partir de su IdEmpleado
CREATE OR ALTER PROC [dbo].[getEmpleado]
	@IdEmpleado int
AS
SET NOCOUNT ON

SELECT [Persona].Nombre, [Persona].Apellido1, [Persona].Apellido2,
[Persona].Cedula, [Empleado].Fechaingreso, [Puesto].Nombre
FROM Empleado
INNER JOIN Persona ON [Empleado].IdPersona = [Persona].IdPersona
INNER JOIN Puesto ON [Empleado].IdPuesto = [Puesto].IdPuesto
WHERE @IdEmpleado = [Empleado].IdEmpleado

SET NOCOUNT OFF
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



