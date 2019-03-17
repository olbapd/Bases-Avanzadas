
CREATE PROC [dbo].[getActivo]
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


