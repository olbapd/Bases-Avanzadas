USE Proyecto1BDA
GO  
CREATE PROCEDURE sp_assignActive   
    @IdEmpleado int,   
    @IdActivo int   
AS   

    UPDATE Proyecto1BDA.dbo.Activo 
	SET IdEmpleado= @IdEmpleado 
	WHERE IdActivo = @IdActivo;
GO 