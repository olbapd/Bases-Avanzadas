
GO  
CREATE PROCEDURE sp_Login
    @CorreoEmp nvarchar(50)   
AS   

    SELECT Contrasena
	FROM Empleado
    WHERE Correo= @CorreoEmp;  
GO  
