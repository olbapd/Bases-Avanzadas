USE Proyecto1BDA

GO  
CREATE OR ALTER PROCEDURE sp_login
    @CorreoEmp nvarchar(50)   
AS   
	SELECT *
	FROM Empleado
    WHERE Correo= @CorreoEmp;
GO  


/*GO  
CREATE OR ALTER PROCEDURE sp_assignActive   
    @IdEmpleado int,   
    @IdActivo int   
AS   

    UPDATE Proyecto1BDA.dbo.Activo 
	SET IdEmpleado= @IdEmpleado, FechaAsignacion = GETDATE()
	WHERE IdActivo = @IdActivo;
GO*/ 

CREATE OR ALTER PROC [dbo].[sp_assignActive]
	@Codigo varchar(50),
	@Cedula varchar(50),
	@IdEstado int,
	@DetalleUbi varchar(100),
	@Correo varchar(50) OUTPUT,
	@Nombre varchar(50) OUTPUT,
	@Apellido varchar(50) OUTPUT

	
AS
BEGIN
	DECLARE
	@IdSede int,
	@IdEmpleado int

	SELECT @IdEmpleado = Empleado.IdEmpleado, @Correo=Empleado.Correo,
			@Nombre=Empleado.Nombre, @Apellido=Empleado.Apellido1 FROM Empleado
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
		[FechaAsignacion] = GETDATE()
		WHERE @Codigo = [Activo].Codigo
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		SELECT ERROR_PROCEDURE() AS ErrorProcedimiento, ERROR_MESSAGE() AS TipoError
		ROLLBACK TRANSACTION
	END CATCH
	SELECT	@Correo as N'@Correo',
		@Nombre as N'@Nombre',
		@Apellido as N'@Apellido'
END
GO



GO
CREATE OR ALTER   PROC [dbo].[sp_calculos]
	@IdCategoria varchar(50)
AS

SELECT [Activo].Codigo,
	   [Activo].PorcentajeDepreciacion,
	   [Activo].Precio,
	   YEAR([Activo].FechaCompra) AS Anho,
	   [Activo].ValorResidual,
	   [Activo].CentroCosto

FROM Activo

WHERE @IdCategoria = [Activo].IdCategoria

GO