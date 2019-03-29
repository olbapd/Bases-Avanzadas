
GO  
CREATE PROCEDURE sp_Login
    @CorreoEmp nvarchar(50)   
AS   
	SELECT Empleado.Apellido1, Empleado.Apellido2,Empleado.Cedula, Empleado.Correo,Empleado.Nombre, Empleado.IdSede,
	Empleado.IdPuesto, Empleado.IdDepartamento, Empleado.Foto, Empleado.FechaNacimiento, Empleado.Fechaingreso
	FROM Empleado
    WHERE Correo= @CorreoEmp;
GO  
