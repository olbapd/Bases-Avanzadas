GO
--REPORTE #1 ADMINISTRADOR
-----------------------------------------
--Monto total de los activos asignados a la sede
CREATE OR ALTER PROC [dbo].[Reporte1]
	@IdSede int
AS
SET NOCOUNT ON

DECLARE
	@TipoCambio float

	SELECT @TipoCambio = Activo.TipoCambio FROM Activo WHERE IdActivo=1

SELECT  COUNT(*) ActivosAsignados,
		SUM([Activo].Precio) SumaCostoInicial,
		SUM([Activo].ValorResidual) SumaValorResidual,
		SUM([Activo].ValorLibro) SumaValorLibro,
		COUNT(*) * @TipoCambio AS ActivosAsignadosDollar,
		SUM([Activo].Precio) * @TipoCambio AS SumaCostoInicialDollar,
		SUM([Activo].ValorResidual) * @TipoCambio AS SumaValorResidualDollar,
		SUM([Activo].ValorLibro) * @TipoCambio AS SumaValorLibroDollar
FROM Activo
WHERE [IdSede] = @IdSede AND [IdEstado] = 3
SET NOCOUNT OFF
GO

EXEC Reporte1 1
GO

CREATE OR ALTER PROC [dbo].[Reporte2]
	@IdSede int
AS
SET NOCOUNT ON

DECLARE
	@TipoCambio float

	SELECT @TipoCambio = Activo.TipoCambio FROM Activo WHERE IdActivo=1

SELECT  COUNT(*) ActivosAsignados,
		SUM([Activo].Precio) SumaCostoInicial,
		AVG([Activo].Precio) PromedioCostoInicial,
		SUM([Activo].ValorResidual) SumaValorResidual, 
		AVG([Activo].ValorResidual) PromedioValorResidual,
		SUM([Activo].ValorLibro) SumaValorLibro, 
		AVG([Activo].ValorLibro) PromedioValorLibro,
		
		COUNT(*) * @TipoCambio AS ActivosAsignadosDollares,
		SUM([Activo].Precio) * @TipoCambio AS SumaCostoInicialDollares,
		AVG([Activo].Precio) * @TipoCambio AS PromedioCostoInicialDollares,
		SUM([Activo].ValorResidual) * @TipoCambio AS SumaValorResidualDollares,
		AVG([Activo].ValorResidual) * @TipoCambio AS PromedioValorResidualDollares,
		SUM([Activo].ValorLibro) * @TipoCambio AS SumaValorLibroDollares,
		AVG([Activo].ValorLibro) * @TipoCambio AS PromedioValorLibroDollares
FROM Activo
INNER JOIN Empleado ON Activo.IdEmpleado = Empleado.IdEmpleado
WHERE [Activo].IdSede = @IdSede AND Empleado.IdEstado = 1
GROUP BY Activo.IdEmpleado
SET NOCOUNT OFF
GO

EXEC Reporte2 2

GO
CREATE OR ALTER PROC [dbo].[Reporte3]
	@FechaInicio date,
	@FechaFin date,
	@IdSede int
AS
SET NOCOUNT ON

SELECT [Activo].Codigo, [Activo].Nombre, [Activo].Precio, [Activo].ValorResidual, [Categoria].Nombre, [Activo].FechaCompra,
[Activo].VidaUtil, CONCAT([Empleado].Nombre,' ',[Empleado].Apellido1, ' ',[Empleado].Apellido2) NombreCompleto
FROM Activo
INNER JOIN Empleado ON Activo.IdEmpleado = Empleado.IdEmpleado
INNER JOIN Categoria ON Activo.IdCategoria = Categoria.IdCategoria
WHERE (Activo.FechaCompra BETWEEN @FechaInicio AND @FechaFin) AND (DATEADD(YEAR, Activo.VidaUtil, Activo.FechaCompra) > @FechaFin)
AND Activo.IdSede = @IdSede
SET NOCOUNT OFF
GO

CREATE OR ALTER PROC [dbo].[Reporte3-2]
	@FechaInicio date,
	@FechaFin date,
	@IdCategoria int
AS
SET NOCOUNT ON

SELECT [Activo].Codigo, [Activo].Nombre, [Activo].Precio, [Activo].ValorResidual, [Categoria].Nombre, [Activo].FechaCompra,
[Activo].VidaUtil, CONCAT([Empleado].Nombre,' ',[Empleado].Apellido1, ' ',[Empleado].Apellido2)
FROM Activo
INNER JOIN Empleado ON Activo.IdEmpleado = Empleado.IdEmpleado
INNER JOIN Categoria ON Activo.IdCategoria = Categoria.IdCategoria
WHERE (Activo.FechaCompra BETWEEN @FechaInicio AND @FechaFin) AND (DATEADD(year, Activo.VidaUtil, Activo.FechaCompra) > @FechaFin)
AND Activo.IdCategoria = @IdCategoria
SET NOCOUNT OFF
GO

--Gerente -------------------
CREATE OR ALTER PROC [dbo].[ReporteG1]

AS
SET NOCOUNT ON

DECLARE
	@TipoCambio float

	SELECT @TipoCambio = Activo.TipoCambio FROM Activo WHERE IdActivo=1

SELECT 
	COUNT(*) ActivosAsignados,
	SUM([Activo].Precio) SumaCostoInicial,
	SUM([Activo].ValorResidual) SumaValorResidual,
	SUM([Activo].ValorLibro) SumaValorLibro,

	COUNT(*) * @TipoCambio AS ActivosAsignadosDollares,
	SUM([Activo].Precio) * @TipoCambio AS SumaCostoInicialDollares,
	SUM([Activo].ValorResidual) * @TipoCambio AS SumaValorResidualDollares,
	SUM([Activo].ValorLibro) * @TipoCambio AS SumaValorLibroDollares
FROM Activo
GROUP BY Activo.IdSede
SET NOCOUNT OFF
GO

EXEC ReporteG1
GO

CREATE OR ALTER PROC [dbo].[ReporteG2]
	@FechaInicio date,
	@FechaFin date,
	@IdSede int
AS
SET NOCOUNT ON

SELECT [Activo].Codigo, [Activo].Nombre, [Activo].Precio, [Activo].ValorResidual, [Categoria].Nombre, [Activo].FechaCompra,
[Activo].VidaUtil, CONCAT([Empleado].Nombre,' ',[Empleado].Apellido1, ' ',[Empleado].Apellido2)
FROM Activo
INNER JOIN Empleado ON Activo.IdEmpleado = Empleado.IdEmpleado
INNER JOIN Categoria ON Activo.IdCategoria = Categoria.IdCategoria
WHERE (Activo.FechaCompra BETWEEN @FechaInicio AND @FechaFin) AND (DATEADD(year, Activo.VidaUtil, Activo.FechaCompra) > @FechaFin)
ORDER BY Activo.IdSede
SET NOCOUNT OFF
GO
EXEC ReporteG1

--Reporte G3
CREATE OR ALTER PROCEDURE [dbo].[ReporteG3]
AS
SET NOCOUNT ON
SELECT CONCAT (Empleado.Nombre, ' ', Empleado.Apellido1,' ', Empleado.Apellido1) AS NombreCompleto,
	Sede.Nombre AS Sede, Departamento.Nombre AS Departamento, Puesto.Nombre AS Puesto,
	Activo.Codigo , Activo.Nombre, Activo.Descripcion, Activo.Precio, Activo.TiempoGarantia--, T.Cantidad
FROM Activo
	INNER JOIN Empleado ON Empleado.IdEmpleado = Activo.IdEmpleado
	INNER JOIN SedeXEmpleado ON Empleado.IdEmpleado = SedeXEmpleado.IdEmpleado
	INNER JOIN Sede ON SedeXEmpleado.IdSede = Sede.IdSede
	INNER JOIN Departamento ON SedeXEmpleado.IdDepartamento =  Departamento.IdDepartamento
	INNER JOIN Puesto ON SedeXEmpleado.IdPuesto = Puesto.IdPuesto
	--INNER JOIN (
		--SELECT TOP 3 IdEmpleado, COUNT(IdEmpleado) AS Cantidad
		--FROM Activo
		--GROUP BY IdEmpleado
		--ORDER BY (COUNT(IdEmpleado)) DESC) AS T ON T.IdEmpleado = Activo.IdEmpleado
	WHERE Activo.IdEmpleado IN
		(SELECT TOP 3 IdEmpleado
		FROM Activo
		GROUP BY IdEmpleado
		ORDER BY (COUNT(IdEmpleado)) DESC);

SET NOCOUNT OFF
GO

CREATE OR ALTER PROCEDURE [dbo].[ReporteG4]
AS
SET NOCOUNT ON
SELECT CONCAT (Empleado.Nombre, ' ', Empleado.Apellido1,' ', Empleado.Apellido1) AS NombreCompleto,
	Sede.Nombre AS Sede, Departamento.Nombre AS Departamento, Puesto.Nombre AS Puesto,
	Activo.Codigo , Activo.Nombre, Activo.Descripcion, Activo.Precio, Activo.TiempoGarantia--, T.Cantidad
FROM Activo
	INNER JOIN Empleado ON Empleado.IdEmpleado = Activo.IdEmpleado
	INNER JOIN SedeXEmpleado ON Empleado.IdEmpleado = SedeXEmpleado.IdEmpleado
	INNER JOIN Sede ON SedeXEmpleado.IdSede = Sede.IdSede
	INNER JOIN Departamento ON SedeXEmpleado.IdDepartamento =  Departamento.IdDepartamento
	INNER JOIN Puesto ON SedeXEmpleado.IdPuesto = Puesto.IdPuesto
	WHERE Activo.IdEmpleado IN
		(SELECT TOP 3 IdEmpleado
	FROM Activo
	GROUP BY IdEmpleado
	ORDER BY (SUM(ValorLibro)) DESC);

SET NOCOUNT OFF
GO