EXEC getActivo 'AC00001'

SELECT * FROM Activo WHERE Codigo = 'AC00001'

EXEC getActivoLi 3,1
EXEC getActivoLi 4,4

--setActivo se probo en la insercion

EXEC updateActivo 'AC00001','Laptop20','Cambio de lp','A',8000000,20,100,0.1,'2019-01-01','2019-01-02',2525,20,1,1

EXEC getActivoCat 1

EXEC getActivoEst 'AC00001'

EXEC quitarActivo 'AC00001',4

EXEC getProvincia

EXEC getPuesto

EXEC getEstado

EXEC getDepartamento

EXEC getSede

SELECT * FROM SedeXEmpleado
INNER JOIN Empleado ON SedeXEmpleado.IdEmpleado = Empleado.IdEmpleado
WHERE SedeXEmpleado.IdSede = 1

EXEC cerrarSede 3,'2019-04-14'

SELECT * FROM SedeXEmpleado
INNER JOIN Empleado ON SedeXEmpleado.IdEmpleado = Empleado.IdEmpleado
WHERE SedeXEmpleado.IdPuesto = 25

--setSede se probo en las inserciones

EXEC infoSedeXEmpleado 1

EXEC getAdmi

EXEC getMonedas

EXEC getCategoria

EXEC getCanton 1

EXEC getDistrito 1

EXEC sp_login 'erick@gmail.com'

EXEC getEmpleados

--setEmpleado se probo en las inserciones

EXEC updateEmpleadoInfo '2015000001','ErickC@gmail.com','20202014','CambioURL'

SELECT * FROM Empleado WHERE Cedula = '2015000001'

SELECT * FROM Empleado

EXEC cambioEmpleado '2015000003', 1,1,1,'2019-04-14','2019-04-15'

SELECT * FROM SedeXEmpleado WHERE IdEmpleado = 3

EXEC desEmpleado '2015000003'

EXEC updateAdmin '2015000001', '2015000014', '2019-04-14','2019-04-15', 2

EXEC getActivoXEmpleado 10

EXEC getEmpleadoXDep 6

EXEC getEmpleadoXPuest 2

EXEC getEmpleadoXSede 1

EXEC getEmpleadoXActivo 'AC00010'

EXEC getCalculos 'AC00010'

--sp_assignActivo se probo en las inserciones

EXEC getIdEmpleado '2015000001'

EXEC getIdDepartamento 'Departamento de Control'

EXEC getIdPuesto 'Administrador de Sede'

EXEC getIdSede 'Sede Central'

EXEC getActivoStateBySede 3,1

EXEC cambiarEstadoActivo 'AC00004', 4

EXEC sp_calculos 1

EXEC sp_calculosBySede 1,1

EXEC sp_getActivoByCategory 1,1

EXEC sp_getActivoLi 3,1,1

EXEC sp_getAdministrators

EXEC sp_getAllActivobySede 1

