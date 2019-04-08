--REPORTE #1 ADMINISTRADOR
-----------------------------------------
--Monto total de los activos asignados a la sede
CREATE OR ALTER PROC [dbo].[getActivoAsign]
	@IdSede int
AS
SET NOCOUNT ON

SELECT COUNT(*) ActivosAsignados
FROM Activo
WHERE [IdSede] = @IdSede AND [IdEstado] = 3
SET NOCOUNT OFF
GO

--monto total de los activos seg�n el costo inicial

CREATE OR ALTER PROC [dbo].[getAllCostoInicialXSede]
	@IdSede int
AS
SET NOCOUNT ON

SELECT SUM(Precio) AS SumaCostoInicial
FROM Activo
WHERE [IdSede] = @IdSede 
SET NOCOUNT OFF
GO

--el monto total de los activos seg�n el valor residual

CREATE OR ALTER PROC [dbo].[getAllValorResidualXSede]
	@IdSede int
AS
SET NOCOUNT ON

SELECT SUM(ValorResidual) AS SumaValorResidual
FROM Activo
WHERE [IdSede] = @IdSede 
SET NOCOUNT OFF
GO

-- monto total de los activos seg�n el valor en libros a la fecha de la consulta
CREATE OR ALTER PROC [dbo].[getAllValorActivoActualXSede]
	@IdSede int
	
AS
BEGIN
	DECLARE
	@PrecioInicialTotal int,
	@ValorResidualTotal int,
	@AnoR int,
	@AnoA int,
	@AnoT int


	SELECT @ValorResidualTotal = SUM(ValorResidual) FROM Activo
	WHERE [IdSede] = @IdSede;

	SELECT @PrecioInicialTotal = SUM(Precio)  FROM Activo
	WHERE [IdSede] = @IdSede; 

	SELECT @AnoR =  year(FechaCompra)  FROM Activo
	WHERE [IdSede] = @IdSede; 

	SELECT @AnoA =  year(GETDATE());

	BEGIN TRAN
	BEGIN TRY
		SELECT 'ValorEnLibros' = @PrecioInicialTotal - (@AnoA-@AnoR)*((@PrecioInicialTotal-@ValorResidualTotal)/(@AnoA-@AnoR))
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

--REPORTE #2 ADMINISTRADOR
-----------------------------------------
--Monto total de los activos asignados seg�n empleado
CREATE OR ALTER PROC [dbo].[getActivoAsignEmpleado]
	@IdEmpleado int
AS
SET NOCOUNT ON

SELECT COUNT(*) ActivosAsignados
FROM Activo
WHERE [IdEmpleado] = @IdEmpleado AND [IdEstado] = 3
SET NOCOUNT OFF
GO

-- monto total  de los activos seg�n el costo Inicial
CREATE OR ALTER PROC [dbo].[getAllCostoInicialXEmpleado]
	@IdEmpleado int
AS
SET NOCOUNT ON

SELECT SUM(Precio) AS SumaCostoInicial
FROM Activo
WHERE [IdEmpleado] = @IdEmpleado
SET NOCOUNT OFF
GO
-- monto promedio  de los activos seg�n el costo Inicial
CREATE OR ALTER PROC [dbo].[getAllCostoInicialXEmpleadoProm]
	@IdEmpleado int
AS
BEGIN
	DECLARE
	@CantActivos int,
	@SumPrecio int
	
	SELECT @CantActivos = COUNT(*) 
	FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado;

	SELECT SumPrecio = SUM(Precio)
	FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado;
	BEGIN TRAN
	BEGIN TRY
	SELECT 'CostoInicialProm' = @SumPrecio/@CantActivos
COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

--monto total de los activos seg�n el valor residual

CREATE OR ALTER PROC [dbo].[getAllValorResidualXEmpleado]
	@IdEmpleado int
AS
SET NOCOUNT ON
SELECT SUM(ValorResidual) AS SumaValorResidual
FROM Activo
WHERE [IdEmpleado] = @IdEmpleado 
SET NOCOUNT OFF
GO

--monto promedio de los activos seg�n el valor residual
CREATE OR ALTER PROC [dbo].[getAllValorResidualXEmpleadoProm]
	@IdEmpleado int
AS
BEGIN
	DECLARE
	@CantActivos int,
	@SumValorR int
	
	SELECT @CantActivos = COUNT(*) 
	FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado;

	SELECT SumValorR= SUM(ValorResidual)
	FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado;
	BEGIN TRAN
	BEGIN TRY
	SELECT 'ValorResidualProm' = @SumValorR/@CantActivos
COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO
-- el monto total de los activos seg�n el valor en libros a la fecha de la consulta. 
CREATE OR ALTER PROC [dbo].[getAllValorActivoActualXEmpleado]
	@IdEmpleado int
	
AS
BEGIN
	DECLARE
	@PrecioInicialTotal int,
	@ValorResidualTotal int,
	@AnoR int,
	@AnoA int,
	@AnoT int


	SELECT @ValorResidualTotal = SUM(ValorResidual) FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado;

	SELECT @PrecioInicialTotal = SUM(Precio)  FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado; 

	SELECT @AnoR =  year(FechaCompra)  FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado; 

	SELECT @AnoA =  year(GETDATE());

	BEGIN TRAN
	BEGIN TRY
		SELECT 'ValorEnLibros' = @PrecioInicialTotal - (@AnoA-@AnoR)*((@PrecioInicialTotal-@ValorResidualTotal)/(@AnoA-@AnoR))
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO
-- el monto promedio de los activos seg�n el valor en libros a la fecha de la consulta.

CREATE OR ALTER PROC [dbo].[getAllValorActivoActualXEmpleadoProm]
	@IdEmpleado int
	
AS
BEGIN
	DECLARE
	@PrecioInicialTotal int,
	@ValorResidualTotal int,
	@AnoR int,
	@AnoA int,
	@AnoT int,
	@CantActivos int

	
	SELECT @CantActivos = COUNT(*) 
	FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado;

	SELECT @ValorResidualTotal = SUM(ValorResidual) FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado;

	SELECT @PrecioInicialTotal = SUM(Precio)  FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado; 

	SELECT @AnoR =  year(FechaCompra)  FROM Activo
	WHERE [IdEmpleado] = @IdEmpleado; 

	SELECT @AnoA =  year(GETDATE());

	BEGIN TRAN
	BEGIN TRY
		SELECT 'ValorEnLibrosProm' = (@PrecioInicialTotal - (@AnoA-@AnoR)*((@PrecioInicialTotal-@ValorResidualTotal)/(@AnoA-@AnoR)))/@CantActivos
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO

--REPORTE #3 ADMINISTRADOR
--------------------------------------------------------
CREATE OR ALTER PROC [dbo].[getAllDetalleActivoAsignXSede]
	@IdSede int,
	@Ano int,
	@VidaUtil int
	
AS
BEGIN
	DECLARE
	@AnoCompra int
	SELECT @AnoCompra =  year(FechaCompra)  FROM Activo
	WHERE [IdSede] = @IdSede; 
	BEGIN TRAN
	BEGIN TRY

	SELECT [Activo].Codigo, [Activo].Nombre, [Activo].Precio, [Activo].ValorResidual, [Categoria].Nombre, [Activo].FechaCompra,[Activo].VidaUtil,[Empleado].Nombre
	FROM Activo
	INNER JOIN Categoria ON [Activo].IdCategoria = [Categoria].IdCategoria
	INNER JOIN Empleado ON [Activo].IdEmpleado = [Empleado].IdEmpleado

	WHERE [IdSede] = @IdSede AND year([FechaCompra]) BETWEEN @Ano AND @Ano+@VidaUtil
	COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
END
GO