USE Proyecto1BDA

GO  
CREATE OR ALTER PROCEDURE sp_login
    @CorreoEmp nvarchar(50)   
AS   
	SELECT *
	FROM Empleado
    WHERE Correo= @CorreoEmp;
GO  


GO  
CREATE OR ALTER PROCEDURE sp_assignActive   
    @IdEmpleado int,   
    @IdActivo int   
AS   

    UPDATE Proyecto1BDA.dbo.Activo 
	SET IdEmpleado= @IdEmpleado, FechaAsignacion = GETDATE()
	WHERE IdActivo = @IdActivo;
GO 