
--Insertar Estados
INSERT INTO Estado (Nombre) VALUES ('Activo');
INSERT INTO Estado (Nombre) VALUES ('Inactivo');

--Insertar Departamentos
INSERT INTO Departamento (Nombre) VALUES ('Transporte');
INSERT INTO Departamento (Nombre) VALUES ('Contabilidad');
INSERT INTO Departamento (Nombre) VALUES ('Comunicaciones');

--Insertar Sede
INSERT INTO Sede (Nombre,FechaAdministracion,DetalleUbicacion,IdDistrito,IdEstado) VALUES ('Central','2019-02-21T18:10:00','Cartago',1,1);

-- Insertar Empleados
EXEC setEmpleado 'Erick', 'Carballo', 'Porras','2015000001','1995-05-25','2018-11-10','erick@gmail.com','123123',6,1,2,'a'
EXEC setEmpleado 'Allan Eduardo','Chacon','Sandoval','2015000002','1991-03-01','2018-11-10','allan@gmail.com','741741',6,2,2,'L'
EXEC setEmpleado 'Jose Pablo','Vindas','Campos','2015000003','1992-02-02','2018-11-10','Vindas@gmail.com','789789',6,3,2,'J'
EXEC setEmpleado 'Jose','Rivera','Tencio','2015000004','1993-08-07','2018-09-10','ak7@gmail.com','159159',6,1,2,'F'
EXEC setEmpleado 'Stephanny','Jimenez','Navarro','2015000005','1995-01-31','2018-05-10','loli@gmail.com','357357',6,2,2,'J'
EXEC setEmpleado 'Diana','Villalobos','Castro','2015000006','1996-12-12','2018-11-09','Diana@gmail.com','741852',6,3,2,'B'
EXEC setEmpleado 'Monica','Delgado','Piedra','2015000007','1995-09-09','2018-11-10','monik@gmail.com','254125',6,1,2,'L'
EXEC setEmpleado 'Gabriela','Solana','Mora','2015000008','1990-08-07','2018-11-09','gabsol@gmail.com','7854785',6,2,2,'C'
EXEC setEmpleado 'Daniela','Ulate','Alfaro','2015000009','1998-06-20','2018-11-13','dani@gmail.com','7963741',6,3,2,'N'
EXEC setEmpleado 'Roberto','Santos','Pereira','2015000010','1995-07-20','2018-09-10','betolan@gmail.com','7897894',6,1,2,'P'
EXEC setEmpleado 'Miguel','Chacon','Barboza','2015000011','1994-02-09','2018-08-10','bar@gmail.com','852341',6,2,2,'V'
EXEC setEmpleado 'Pedro','Villalta','Lemus','2015000012','1993-05-04','2018-07-10','Pvillanta@gmail.com','9517530',6,3,2,'C'
EXEC setEmpleado 'Ana','Castellanos','Ortiz','2015000013','1995-04-08','2018-07-10','AnaCO@gmail.com','95000530',6,1,2,'C'