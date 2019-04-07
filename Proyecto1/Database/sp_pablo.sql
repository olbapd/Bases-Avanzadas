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
	@IdCategoria int
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


GO
CREATE OR ALTER   PROC [dbo].[sp_calculosBySede]
	@IdCategoria int,
	@IdSede int
AS

SELECT [Activo].Codigo,
	   [Activo].PorcentajeDepreciacion,
	   [Activo].Precio,
	   YEAR([Activo].FechaCompra) AS Anho,
	   [Activo].ValorResidual,
	   [Activo].CentroCosto

FROM Activo

WHERE @IdCategoria = [Activo].IdCategoria AND @IdSede = [Activo].IdSede

GO

GO
CREATE OR ALTER PROC [dbo].[sp_getActivoByCategory]
	@IdCategoria int,
	@IdSede int
AS

SELECT	[Activo].Codigo,
		[Activo].Nombre,
		[Activo].Descripcion

	FROM Activo
	
	WHERE [IdCategoria] = @IdCategoria AND @IdSede = Activo.IdSede
GO

GO
CREATE OR ALTER   PROC [dbo].[sp_getActivoLi]
	@IdEstado int,
	@IdCategoria int,
	@IdSede int
AS
SELECT  [Activo].Codigo,
		[Activo].IdEmpleado,
		[Activo].FechaAsignacion,
		[Activo].DetalleUbicacion
	
	FROM Activo
	
	WHERE [IdEstado] = @IdEstado AND [IdCategoria] =@IdCategoria AND Activo.IdSede = @IdSede

GO

GO
CREATE OR ALTER  PROC [dbo].[sp_getActivoBySede]
	@IdSede int 
AS 
	SELECT 
		[Activo].Codigo,
		[Activo].Nombre,
		[Activo].Descripcion
	FROM Activo
	WHERE  @IdSede = [Activo].IdSede
GO


GO
CREATE OR ALTER   PROC [dbo].[sp_getAdministrators]
	
AS

SELECT 
	[Empleado].Nombre,
	[Empleado].Apellido1, 
	[Empleado].Apellido2,
	[Empleado].Cedula,
	[Sede].Nombre AS Sede,
	[Sede].IdSede AS IdSede,
	[Provincia].Nombre AS Provincia,
	[Canton].Nombre AS Canton,
	[Distrito].Nombre AS Distrito

FROM 
	SedeXEmpleado
INNER JOIN 
	Empleado ON [SedeXEmpleado].IdEmpleado = [Empleado].IdEmpleado
INNER JOIN 
	Sede ON [SedeXEmpleado].IdSede = [Sede].IdSede 
INNER JOIN 
	Distrito ON [Sede].IdDistrito = [Distrito].IdDistrito
INNER JOIN
	Canton ON Distrito.IdCanton = Canton.IdCanton
INNER JOIN
	Provincia ON Canton.IdProvincia = Provincia.IdProvincia

WHERE 
	[Empleado].IdPuesto=2 AND [Empleado].IdEstado = 1 AND [SedeXEmpleado].FechaSalida IS NULL
GO


GO 
CREATE OR ALTER PROC [dbo].[sp_getAllActivobySede]
	@IdSede int
AS
SET NOCOUNT ON
SELECT [IdActivo],
	[Codigo],
	Activo.[Nombre],
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
	Activo.[IdCategoria],
	[IdMoneda],
	[IdEstado],
	[Categoria].Nombre AS Categoria
FROM Activo
INNER JOIN
	Categoria ON Activo.IdCategoria = Categoria.IdCategoria
WHERE IdSede = @IdSede
SET NOCOUNT OFF
GO