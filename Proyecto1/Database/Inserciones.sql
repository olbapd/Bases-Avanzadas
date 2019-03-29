--INSERTAR PROVINCIAS
INSERT INTO Provincia (Nombre) VALUES 
('San Jose'),
('Alajuela'),
('Cartago'),
('Heredia'),
('Guanacaste'),
('Puntarenas'),
('Limon');

--INSERTAR CANTONES
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Escaz�',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Desamparados',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Puriscal',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Tarraz�',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Aserr�',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Mora',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Goicoechea',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Santa Ana',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Alajuelita',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('V�zquez De Coronado',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Acosta',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Tib�s',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Moravia',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Montes De Oca',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Turrubares',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Dota',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Curridabat',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('P�rez Zeled�n',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Le�n Cort�s Castro',1);
-- Cantones de Alajuela
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Ram�n',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Grecia',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Mateo',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Atenas',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Naranjo',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Palmares',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Po�s',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Orotina',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Carlos',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Zarcero',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Valverde Vega',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Upala',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Los Chiles',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Guatuso',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('R�o Cuarto',2);
-- Cantones de Cartago
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Para�so',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('La Uni�n',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Jim�nez',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Turrialba',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Alvarado',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Oreamuno',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('El Guarco',3);
-- Cantones de Heredia
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Barva',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Santo Domingo',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Santa Barbara',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Rafael',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Isidro',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Bel�n',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Flores',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Pablo',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Sarapiqu�',4);
-- Cantones de Guanacaste
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Liberia',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Nicoya',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Santa Cruz',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Bagaces',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Carrillo',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Ca�as',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Abangares',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Tilar�n',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Nandayure',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('La Cruz',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Hojancha',5);
-- Cantones de San Puntarenas
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Esparza',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Buenos Aires',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Montes De Oro',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Osa',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Quepos',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Golfito',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Coto Brus',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Parrita',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Corredores',6);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Garabito',6);
-- Cantones de Lim�n
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Pococ�',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Siquirres',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Talamanca',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Matina',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Gu�cimo',7);

--INSERTAR DISTRITOS

-- DISTRITOS
-- Provincia: San Jos� ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carmen',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Merced',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Hospital',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Catedral',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Zapote',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Francisco De Dos Rios',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Uruca',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mata Redonda',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pavas',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Hatillo',1);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Sebasti�n',1);
-- Provincia: San Jos� ___ Distritos de Escaz�
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Escaz�',2);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',2);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',2);
-- Provincia: San Jos� ___ Distritos de Desamparados
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Desamparados',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Miguel',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan De Dios',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael Arriba',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael Abajo',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Frailes',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Patarra',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Cristobal',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rosario',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Damas',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Gravilias',3);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Los Guido',3);
-- Provincia: San Jos� ___ Distritos de Puriscal
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes Sur',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Barbacoas',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Grifo Alto',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Candelarita',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Desamparaditos',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chires',4);
-- Provincia: San Jos� ___ Distritos de Tarraz�
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Marcos',5);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Lorenzo',5);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Carlos',5);
-- Provincia: San Jos� ___ Distritos de Aserr�
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Aserr�',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tarbaca',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Vuelta De Jorco',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Gabriel',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Legua',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Monterrey',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Salitrillos',6);
-- Provincia: San Jos� ___ Distritos de Mora
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Col�n',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guayabo',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tabarcia',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedras Negras',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Picagres',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jaris',7);
-- Provincia: San Jos� ___ Distritos de Goicoechea
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guadalupe',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Francisco',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Calle Blancos',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mata De Platano',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Ip�s',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rancho Redondo',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Purral',8);
-- Provincia: San Jos� ___ Distritos de Santa Ana
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Ana',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Salitral',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pozos',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Uruca',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedades',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Brasil',9);
-- Provincia: San Jos� ___ Distritos de Alajuelita
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Alajuelita',10);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Josecito',10);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',10);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepci�n',10);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Felipe',10);
-- Provincia: San Jos� ___ Distritos de V�zquez De Coronado
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',11);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',11);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Dulce Nombre De Jesus',11);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Patalillo',11);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cascajal',11);
-- Provincia: San Jos� ___ Distritos de Acosta
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Ignacio',12);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guaitil',12);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmichal',12);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cangrejal',12);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sabanillas',12);
-- Provincia: San Jos� ___ Distritos de Tib�s
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',13);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cinco Esquinas',13);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Anselmo Llorente',13);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Leon Xiii',13);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colima',13);
-- Provincia: San Jos� ___ Distritos de Moravia
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Vicente',14);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jeronimo',14);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Trinidad',14);
-- Provincia: San Jos� ___ Distritos de Montes De Oca
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',15);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sabanilla',15);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes',15);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',15);
-- Provincia: San Jos� ___ Distritos de Turrubares
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pablo',16);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',16);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan De Mata',16);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Luis',16);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carara',16);
-- Provincia: San Jos� ___ Distritos de Dota
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Mar�a',17);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jardin',17);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Copey',17);
-- Provincia: San Jos� ___ Distritos de Curridabat
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Curridabat',18);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Granadilla',18);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sanchez',18);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tirrases',18);
-- Provincia: San Jos� ___ Distritos de P�rez Zeled�n
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro De El General',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El General',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Daniel Flores',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rivas',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Platanares',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pejibaye',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cajon',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Baru',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Nuevo',19);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('P�ramo',19);
-- Provincia: San Jos� ___ Distritos de Le�n Cort�s Castro
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pablo',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Andres',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llano Bonito',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Cruz',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',20);
-- Provincia: Alajuela ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Alajuela',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jos�',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carrizal',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Gu�cima',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sabanilla',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Segundo',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Desamparados',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Turrucares',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tambor',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Garita',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sarapiqu�',21);
-- Provincia: Alajuela ___ Distritos de San Ram�n
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Ram�n',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedades Norte',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedades Sur',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Angeles',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Alfaro',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Volio',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepci�n',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Zapotal',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pe�as Blancas',22);
-- Provincia: Alajuela ___ Distritos de Grecia
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Grecia',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jos�',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Roque',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tacares',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Cuarto',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puente De Piedra',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bolivar',23);
-- Provincia: Alajuela ___ Distritos de San Mateo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Mateo',24);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Desmonte',24);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jes�s Mar�a',24);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Labrador',24);
-- Provincia: Alajuela ___ Distritos de Atenas
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Atenas',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jes�s',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepci�n',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jos�',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Eulalia',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Escobal',25);
-- Provincia: Alajuela ___ Distritos de Naranjo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Naranjo',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Miguel',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmitos',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Rosario',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jos�',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cirr� Sur',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jer�nimo',26);
-- Provincia: Alajuela ___ Distritos de Palmares
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmares',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Zaragoza',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Buenos Aires',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Candelaria',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Esquipulas',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Granja',27);
-- Provincia: Alajuela ___ Distritos de Po�s
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',28);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',28);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',28);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carrillos',28);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sabana Redonda',28);
-- Provincia: Alajuela ___ Distritos de Orotina
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Orotina',29);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Mastate',29);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Hacienda Vieja',29);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Coyolar',29);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Ceiba',29);
-- Provincia: Alajuela ___ Distritos de San Carlos
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quesada',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Florencia',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Buenavista',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Aguas Zarcas',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Venecia',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pital',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Fortuna',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Tigra',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Palmera',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Venado',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cutris',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Monterrey',30);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pocosol',30);
-- Provincia: Alajuela ___ Distritos de Zarcero
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Zarcero',31);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Laguna',31);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tapesco',31);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guadalupe',31);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmira',31);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Zapote',31);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Brisas',31);
-- Provincia: Alajuela ___ Distritos de Valverde Vega
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sarch� Norte',32);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sarch� Sur',32);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Toro Amarillo',32);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',32);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rodriguez',32);
-- Provincia: Alajuela ___ Distritos de Upala
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Upala',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Aguas Claras',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jos� o Pizote',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bijagua',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Delicias',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Dos Rios',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Yolillal',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Canalete',33);
-- Provincia: Alajuela ___ Distritos de Los Chiles
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Los Chiles',34);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Ca�o Negro',34);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Amparo',34);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jorge',34);
-- Provincia: Alajuela ___ Distritos de Guatuso
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',35);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Buenavista',35);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cote',35);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Katira',35);
-- Provincia: Alajuela ___ Distritos de R�o Cuarto
INSERT INTO Distrito (Nombre,IdCanton) VALUES('R�o Cuarto',36);
-- Provincia: Cartago ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Oriental',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Occidental',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carmen',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Nicol�s',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Aguacaliente o San Francisco',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guadalupe o Arenilla',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Corralillo',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tierra Blanca',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Dulce Nombre',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llano Grande',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quebradilla',37);
-- Provincia: Cartago ___ Distritos de Para�so
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Paraiso',38);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',38);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Orosi',38);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cach�',38);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llanos de Santa Luc�a',38);
-- Provincia: Cartago ___ Distritos de La Uni�n
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tres Rios',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Diego',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepci�n',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Dulce Nombre',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Ram�n',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Azul',39);
-- Provincia: Cartago ___ Distritos de Jim�nez
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Juan Vi�as',40);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tucurrique',40);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pejibaye',40);
-- Provincia: Cartago ___ Distritos de Turrialba
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Turrialba',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Suiza',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Peralta',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Cruz',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Teresita',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pavones',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tuis',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tayutic',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Rosa',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tres Equis',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Isabel',41);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chirrip�',41);
-- Provincia: Cartago ___ Distritos de Alvarado
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pacayas',42);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cervantes',42);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Capellades',42);
-- Provincia: Cartago ___ Distritos de Oreamuno
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',43);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cot',43);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Potrero Cerrado',43);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cipreses',43);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Rosa',43);
-- Provincia: Cartago ___ Distritos de El Guarco
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Tejar',44);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',44);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tobosi',44);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Patio De Agua',44);
-- Provincia: Heredia ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Heredia',45);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes',45);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Francisco',45);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Ulloa',45);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Varablanca',45);
-- Provincia: Heredia ___ Distritos de Barva
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Barva',46);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',46);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pablo',46);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Roque',46);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Luc�a',46);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jos� de la Monta�a',46);
-- Provincia: Heredia ___ Distritos de Santo Domingo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santo Domingo',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Vicente',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Miguel',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Paracito',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santo Tom�s',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Rosa',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tures',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Para',47);
-- Provincia: Heredia ___ Distritos de Santa Barbara
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa B�rbara',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jes�s',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santo Domingo',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puraba',48);
-- Provincia: Heredia ___ Distritos de San Rafael
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',49);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Josecito',49);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',49);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Los �ngeles',49);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepci�n',49);
-- Provincia: Heredia ___ Distritos de San Isidro
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',50);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jos�',50);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepci�n',50);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Francisco',50);
-- Provincia: Heredia ___ Distritos de Bel�n
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',51);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Ribera',51);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Asuncion',51);
-- Provincia: Heredia ___ Distritos de Flores
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Joaqu�n',52);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Barrantes',52);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llorente',52);
-- Provincia: Heredia ___ Distritos de San Pablo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pablo',53);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rincon De Sabanilla',53);
-- Provincia: Heredia ___ Distritos de Sarapiqu�
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puerto Viejo',54);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Virgen',54);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Las Horquetas',54);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llanuras Del Gaspar',54);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cure�a',54);
-- Provincia: Guanacaste ___ Distritos de Liberia
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Liberia',55);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Nacascolo',55);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Ca�as Dulces',55);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mayorga',55);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Curubande',55);
-- Provincia: Guanacaste ___ Distritos de Nicoya
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Nicoya',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mansi�n',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quebrada Honda',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('S�mara',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Nosara',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bel�n De Nosarita',56);
-- Provincia: Guanacaste ___ Distritos de Santa Cruz
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Cruz',57);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bolson',57);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Veintisiete de Abril',57);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tempate',57);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cartagena',57);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cuajiniquil',57);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Diria',57);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cabo Velas',57);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tamarindo',57);
-- Provincia: Guanacaste ___ Distritos de Bagaces
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bagaces',58);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Fortuna',58);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mogote',58);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Naranjo',58);
-- Provincia: Guanacaste ___ Distritos de Carrillo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Filadelfia',59);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmira',59);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sardinal',59);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Belen',59);
-- Provincia: Guanacaste ___ Distritos de Ca�as
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Ca�as',60);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmira',60);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Miguel',60);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bebedero',60);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Porozal',60);
-- Provincia: Guanacaste ___ Distritos de Abangares
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Las Juntas',61);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sierra',61);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',61);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colorado',61);
-- Provincia: Guanacaste ___ Distritos de Tilar�n
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tilar�n',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quebrada Grande',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tronadora',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Rosa',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('L�bano',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tierras Morenas',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Arenal',62);
-- Provincia: Guanacaste ___ Distritos de Nandayure
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carmona',63);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Rita',63);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Zapotal',63);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pablo',63);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Porvenir',63);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bejuco',63);
-- Provincia: Guanacaste ___ Distritos de La Cruz
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Cruz',64);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Cecilia',64);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Garita',64);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Elena',64);
-- Provincia: Guanacaste ___ Distritos de Hojancha
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Hojancha',65);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Monte Romo',65);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puerto Carrillo',65);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Huacas',65);
-- Provincia: Puntarenas ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puntarenas',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pitahaya',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chomes',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Lepanto',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Paquera',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Manzanillo',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guacimal',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Barranca',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Monte Verde',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Isla Del Coco',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('C�bano',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chacarita',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chira',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Acapulco',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Roble',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Arancibia',66);
-- Provincia: Puntarenas ___ Distritos de Esparza
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Esp�ritu Santo',67);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan Grande',67);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Macacona',67);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',67);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jer�nimo',67);
-- Provincia: Puntarenas ___ Distritos de Buenos Aires
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Buenos Aires',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Volc�n',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Potrero Grande',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Boruca',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pilas',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colinas',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Changuena',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Biolley',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Brunka',68);
-- Provincia: Puntarenas ___ Distritos de Montes De Oro
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Miramar',69);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Uni�n',69);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',69);
-- Provincia: Puntarenas ___ Distritos de Osa
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puerto Cort�s',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmar',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sierpe',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bah�a Ballena',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedras Blancas',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bah�a Drake',70);
-- Provincia: Puntarenas ___ Distritos de Quepos
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quepos',71);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Savegre',71);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Naranjito',71);
-- Provincia: Puntarenas ___ Distritos de Golfito
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Golfito',72);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puerto Jim�nez',72);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guaycara',72);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pav�n',72);
-- Provincia: Puntarenas ___ Distritos de Coto Brus
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Vito',73);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sabalito',73);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Aguabuena',73);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Limoncito',73);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pittier',73);
-- Provincia: Puntarenas ___ Distritos de Parrita
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Parrita',74);
-- Provincia: Puntarenas ___ Distritos de Corredores
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Corredor',75);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Cuesta',75);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Canoas',75);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Laurel',75);
-- Provincia: Puntarenas ___ Distritos de Garabito
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jac�',76);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('T�rcoles',76);
-- Provincia: Lim�n ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Lim�n',77);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Valle La Estrella',77);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Blanco',77);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Matama',77);
-- Provincia: Lim�n ___ Distritos de Pococ�
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guapiles',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jim�nez',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rita',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Roxana',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cariari',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colorado',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Colonia',78);
-- Provincia: Lim�n ___ Distritos de Siquirres
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Siquirres',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pacuarito',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Florida',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Germania',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Cairo',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Alegr�a',79);
-- Provincia: Lim�n ___ Distritos de Talamanca
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bratsi',80);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sixaola',80);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cahuita',80);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Telire',80);
-- Provincia: Lim�n ___ Distritos de Matina
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Matina',81);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bat�n',81);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carrandi',81);
-- Provincia: Lim�n ___ Distritos de Gu�cimo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Gu�cimo',82);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes',82);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pocora',82);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Jim�nez',82);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Duacari',82);

--INSERTAR PUESTOS
EXEC setPuesto 'Director Ejecutivo'
EXEC setPuesto 'Administrador de Sede'
EXEC setPuesto 'Director de Comunicacion'
EXEC setPuesto 'Director de Informacion'
EXEC setPuesto 'Director Financiero'
EXEC setPuesto 'Director de Operaciones'
EXEC setPuesto 'Gerente Departamental'
EXEC setPuesto 'Contador General'
EXEC setPuesto 'Auxiliar Contable'
EXEC setPuesto 'Encargado de Cuentas'
EXEC setPuesto 'Cajero'
EXEC setPuesto 'Auxiliar de Tesoreria'
EXEC setPuesto 'Auditor'
EXEC setPuesto 'Asistente Informatico'
EXEC setPuesto 'Analista de Sistemas'
EXEC setPuesto 'Programador'
EXEC setPuesto 'Administrador de Redes'
EXEC setPuesto 'Administrador de Bases de Datos'
EXEC setPuesto 'Desarrollador Web'
EXEC setPuesto 'Tecnico'
EXEC setPuesto 'Asistente de Servicios G'
EXEC setPuesto 'Asistente Ejecutivo'
EXEC setPuesto 'Chofer'
EXEC setPuesto 'Operario de Limpieza'

--INSERTAR ESTADOS
EXEC setEstado 'Activo'
EXEC setEstado 'Inactivo'
EXEC setEstado 'Asignado'
EXEC setEstado 'No Asignado'

--INSERTAR DEPARTAMENTOS
EXEC setDepartamento 'Departamento de Comunicacion'
EXEC setDepartamento 'Departamento de Informacion'
EXEC setDepartamento 'Departamento Financiero'
EXEC setDepartamento 'Departamento de Operaciones'
EXEC setDepartamento 'Recursos Humanos'
EXEC setDepartamento 'Departamento Administrativo'
EXEC setDepartamento 'Direccion General'
EXEC setDepartamento 'Departamento de Informatica'
EXEC setDepartamento 'Departamento de Ventas'
EXEC setDepartamento 'Departamento de Control'

EXEC setCategoria 'Terreno y bienes naturales'
EXEC setCategoria 'Construcciones'
EXEC setCategoria 'Maquinaria'
EXEC setCategoria 'Mobiliario'
EXEC setCategoria 'Equipo Informatico'
EXEC setCategoria 'Transporte'
EXEC setCategoria 'Marcas'
EXEC setCategoria 'Patentes'
EXEC setCategoria 'Derechos de autor'
EXEC setCategoria 'Licencias y permiso'

--INSERTAR MONEDAS
EXEC setMoneda 'Dolares'
EXEC setMoneda 'Colones'
EXEC setMoneda 'Euros'
EXEC setMoneda 'Rupies'
EXEC setMoneda 'Yenes'
EXEC setMoneda 'Dolar Canadiense'
EXEC setMoneda 'Lempiras'
EXEC setMoneda 'Libra Esterlina'


--INSERTAR SEDE
EXEC setSede 'Sede Central','Cartago Barrio Oriental',1,1
EXEC setSede 'Sede San Jose','San Jose Centro',5,1
EXEC setSede 'Sede Alajuela','Alajuela Centro',122,1

INSERT  Empleado (Nombre, Apellido1, Apellido2, Cedula,FechaNacimiento, FechaIngreso, Correo,Contrasena,
		 IdSede,IdDepartamento,IdPuesto,Foto) VALUES
( 'Erick', 'Carballo', 'Porras','2015000001',GETDATE(),GETDATE(),'erick@gmail.com','123123',1,6,1,'a'),
( 'Allan Eduardo','Chacon','Sandoval','2015000002',GETDATE(),GETDATE(),'allan@gmail.com','741741',1,1,3,'L'),
( 'Jose Pablo','Vindas','Campos','2015000003',GETDATE(),GETDATE(),'Vindas@gmail.com','789789',1,6,2,'J'),
( 'Jose','Rivera','Tencio','2015000004',GETDATE(),GETDATE(),'ak7@gmail.com','159159',1,2,4,'F'),
( 'Stephanny','Jimenez','Navarro','2015000005',GETDATE(),GETDATE(),'loli@gmail.com','357357',1,6,2,'J'),
( 'Diana','Villalobos','Castro','2015000006',GETDATE(),GETDATE(),'Diana@gmail.com','741852',1,3,5,'B'),
( 'Monica','Delgado','Piedra','2015000007',GETDATE(),GETDATE(),'monik@gmail.com','254125',1,4,6,'L'),
( 'Gabriela','Solana','Mora','2015000008',GETDATE(),GETDATE(),'gabsol@gmail.com','7854785',1,5,13,'C'),
( 'Daniela','Ulate','Alfaro','2015000009',GETDATE(),GETDATE(),'dani@gmail.com','7963741',1,1,3,'N'),
( 'Roberto','Santos','Pereira','2015000010',GETDATE(),GETDATE(),'betolan@gmail.com','7897894',1,7,21,'P'),
( 'Miguel','Chacon','Barboza','2015000011',GETDATE(),GETDATE(),'bar@gmail.com','852341',1,8,19,'V'),
( 'Pedro','Villalta','Lemus','2015000012',GETDATE(),GETDATE(),'Pvillanta@gmail.com','9517530',1,9,9,'C'),
( 'Ana','Castellanos','Ortiz','2015000013',GETDATE(),GETDATE(),'AnaCO@gmail.com','95000530',1,10,23,'C')

--INSERTAR SEDEXEMPLEADO
EXEC Contrato 1,1,'2007-01-30'
EXEC Contrato 2,3,'2009-01-30'
EXEC Contrato 3,5,'2007-01-30'
EXEC Contrato 1,9,'2017-01-30'
EXEC Contrato 2,2,'2017-01-30'
EXEC Contrato 1,4,'2017-01-30'
EXEC Contrato 1,6,'2017-01-30'
EXEC Contrato 1,7,'2017-01-30'
EXEC Contrato 2,8,'2017-01-30'
EXEC Contrato 2,10,'2017-01-30'
EXEC Contrato 3,11,'2017-01-30'
EXEC Contrato 3,12,'2017-01-30'
EXEC Contrato 3,13,'2017-01-30'


--INSERTAR ACTIVO
EXEC setActivo 'AC00001','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
--FALTA ARREGLAR
EXEC setActivo 'AC00002','Laptop','Computadora DELL','Enlace',1300,5,7,0.15,'2019-01-30','2019-02-08',NULL,8,600,"a",5,1,1,3
EXEC setActivo 'AC00003','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC00004','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC00005','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC00006','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC00007','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC00008','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC00009','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000010','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000011','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000012','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000013','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000014','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000015','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000016','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000017','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000018','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000019','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000020','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000021','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000022','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000023','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000024','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000025','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3
EXEC setActivo 'AC000026','Laptop','Computadora DELL','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',NULL,8,500,"a",5,1,1,3




