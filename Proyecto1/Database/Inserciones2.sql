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
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Escazú',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Desamparados',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Puriscal',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Tarrazú',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Aserrí',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Mora',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Goicoechea',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Santa Ana',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Alajuelita',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Vázquez De Coronado',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Acosta',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Tibás',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Moravia',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Montes De Oca',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Turrubares',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Dota',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Curridabat',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Pérez Zeledón',1);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('León Cortés Castro',1);
-- Cantones de Alajuela
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Ramón',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Grecia',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Mateo',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Atenas',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Naranjo',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Palmares',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Poás',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Orotina',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Carlos',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Zarcero',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Valverde Vega',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Upala',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Los Chiles',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Guatuso',2);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Río Cuarto',2);
-- Cantones de Cartago
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Paraíso',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('La Unión',3);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Jiménez',3);
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
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Belén',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Flores',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('San Pablo',4);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Sarapiquí',4);
-- Cantones de Guanacaste
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Liberia',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Nicoya',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Santa Cruz',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Bagaces',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Carrillo',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Cañas',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Abangares',5);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Tilarán',5);
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
-- Cantones de Limón
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Central',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Pococí',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Siquirres',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Talamanca',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Matina',7);
INSERT INTO Canton (Nombre,IdProvincia) VALUES('Guácimo',7);

--INSERTAR DISTRITOS

-- DISTRITOS
-- Provincia: San José ___ Distritos de Central
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
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Sebastián',1);
-- Provincia: San José ___ Distritos de Escazú
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Escazú',2);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',2);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',2);
-- Provincia: San José ___ Distritos de Desamparados
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
-- Provincia: San José ___ Distritos de Puriscal
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes Sur',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Barbacoas',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Grifo Alto',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Candelarita',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Desamparaditos',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',4);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chires',4);
-- Provincia: San José ___ Distritos de Tarrazú
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Marcos',5);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Lorenzo',5);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Carlos',5);
-- Provincia: San José ___ Distritos de Aserrí
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Aserrí',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tarbaca',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Vuelta De Jorco',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Gabriel',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Legua',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Monterrey',6);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Salitrillos',6);
-- Provincia: San José ___ Distritos de Mora
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colón',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guayabo',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tabarcia',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedras Negras',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Picagres',7);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jaris',7);
-- Provincia: San José ___ Distritos de Goicoechea
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guadalupe',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Francisco',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Calle Blancos',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mata De Platano',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Ipís',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rancho Redondo',8);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Purral',8);
-- Provincia: San José ___ Distritos de Santa Ana
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Ana',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Salitral',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pozos',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Uruca',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedades',9);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Brasil',9);
-- Provincia: San José ___ Distritos de Alajuelita
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Alajuelita',10);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Josecito',10);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',10);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepción',10);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Felipe',10);
-- Provincia: San José ___ Distritos de Vázquez De Coronado
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',11);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',11);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Dulce Nombre De Jesus',11);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Patalillo',11);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cascajal',11);
-- Provincia: San José ___ Distritos de Acosta
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Ignacio',12);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guaitil',12);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmichal',12);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cangrejal',12);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sabanillas',12);
-- Provincia: San José ___ Distritos de Tibás
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',13);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cinco Esquinas',13);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Anselmo Llorente',13);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Leon Xiii',13);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colima',13);
-- Provincia: San José ___ Distritos de Moravia
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Vicente',14);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jeronimo',14);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Trinidad',14);
-- Provincia: San José ___ Distritos de Montes De Oca
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',15);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sabanilla',15);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes',15);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',15);
-- Provincia: San José ___ Distritos de Turrubares
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pablo',16);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',16);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan De Mata',16);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Luis',16);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carara',16);
-- Provincia: San José ___ Distritos de Dota
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa María',17);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jardin',17);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Copey',17);
-- Provincia: San José ___ Distritos de Curridabat
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Curridabat',18);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Granadilla',18);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sanchez',18);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tirrases',18);
-- Provincia: San José ___ Distritos de Pérez Zeledón
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
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Páramo',19);
-- Provincia: San José ___ Distritos de León Cortés Castro
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pablo',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Andres',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llano Bonito',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Cruz',20);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',20);
-- Provincia: Alajuela ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Alajuela',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San José',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carrizal',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guácima',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sabanilla',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Segundo',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Desamparados',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Turrucares',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tambor',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Garita',21);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sarapiquí',21);
-- Provincia: Alajuela ___ Distritos de San Ramón
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Ramón',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedades Norte',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedades Sur',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Angeles',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Alfaro',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Volio',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepción',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Zapotal',22);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Peñas Blancas',22);
-- Provincia: Alajuela ___ Distritos de Grecia
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Grecia',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San José',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Roque',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tacares',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Cuarto',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puente De Piedra',23);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bolivar',23);
-- Provincia: Alajuela ___ Distritos de San Mateo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Mateo',24);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Desmonte',24);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jesús María',24);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Labrador',24);
-- Provincia: Alajuela ___ Distritos de Atenas
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Atenas',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jesús',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepción',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San José',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Eulalia',25);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Escobal',25);
-- Provincia: Alajuela ___ Distritos de Naranjo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Naranjo',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Miguel',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmitos',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Rosario',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San José',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cirrí Sur',26);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jerónimo',26);
-- Provincia: Alajuela ___ Distritos de Palmares
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmares',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Zaragoza',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Buenos Aires',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Candelaria',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Esquipulas',27);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Granja',27);
-- Provincia: Alajuela ___ Distritos de Poás
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
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sarchí Norte',32);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sarchí Sur',32);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Toro Amarillo',32);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',32);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rodriguez',32);
-- Provincia: Alajuela ___ Distritos de Upala
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Upala',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Aguas Claras',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San José o Pizote',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bijagua',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Delicias',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Dos Rios',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Yolillal',33);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Canalete',33);
-- Provincia: Alajuela ___ Distritos de Los Chiles
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Los Chiles',34);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Caño Negro',34);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Amparo',34);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jorge',34);
-- Provincia: Alajuela ___ Distritos de Guatuso
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',35);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Buenavista',35);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cote',35);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Katira',35);
-- Provincia: Alajuela ___ Distritos de Río Cuarto
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Río Cuarto',36);
-- Provincia: Cartago ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Oriental',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Occidental',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carmen',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Nicolás',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Aguacaliente o San Francisco',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guadalupe o Arenilla',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Corralillo',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tierra Blanca',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Dulce Nombre',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llano Grande',37);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quebradilla',37);
-- Provincia: Cartago ___ Distritos de Paraíso
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Paraiso',38);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',38);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Orosi',38);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cachí',38);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llanos de Santa Lucía',38);
-- Provincia: Cartago ___ Distritos de La Unión
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tres Rios',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Diego',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepción',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Dulce Nombre',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Ramón',39);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Azul',39);
-- Provincia: Cartago ___ Distritos de Jiménez
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Juan Viñas',40);
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
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chirripó',41);
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
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Lucía',46);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San José de la Montaña',46);
-- Provincia: Heredia ___ Distritos de Santo Domingo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santo Domingo',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Vicente',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Miguel',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Paracito',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santo Tomás',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Rosa',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tures',47);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Para',47);
-- Provincia: Heredia ___ Distritos de Santa Barbara
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Bárbara',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pedro',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jesús',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santo Domingo',48);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puraba',48);
-- Provincia: Heredia ___ Distritos de San Rafael
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',49);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Josecito',49);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santiago',49);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Los Ángeles',49);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepción',49);
-- Provincia: Heredia ___ Distritos de San Isidro
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',50);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San José',50);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Concepción',50);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Francisco',50);
-- Provincia: Heredia ___ Distritos de Belén
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',51);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Ribera',51);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Asuncion',51);
-- Provincia: Heredia ___ Distritos de Flores
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Joaquín',52);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Barrantes',52);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llorente',52);
-- Provincia: Heredia ___ Distritos de San Pablo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Pablo',53);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rincon De Sabanilla',53);
-- Provincia: Heredia ___ Distritos de Sarapiquí
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puerto Viejo',54);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Virgen',54);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Las Horquetas',54);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Llanuras Del Gaspar',54);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cureña',54);
-- Provincia: Guanacaste ___ Distritos de Liberia
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Liberia',55);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Nacascolo',55);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cañas Dulces',55);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mayorga',55);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Curubande',55);
-- Provincia: Guanacaste ___ Distritos de Nicoya
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Nicoya',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mansión',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Antonio',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quebrada Honda',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sámara',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Nosara',56);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Belén De Nosarita',56);
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
-- Provincia: Guanacaste ___ Distritos de Cañas
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cañas',60);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmira',60);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Miguel',60);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bebedero',60);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Porozal',60);
-- Provincia: Guanacaste ___ Distritos de Abangares
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Las Juntas',61);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sierra',61);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan',61);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colorado',61);
-- Provincia: Guanacaste ___ Distritos de Tilarán
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tilarán',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quebrada Grande',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tronadora',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Santa Rosa',62);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Líbano',62);
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
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cóbano',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chacarita',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Chira',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Acapulco',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Roble',66);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Arancibia',66);
-- Provincia: Puntarenas ___ Distritos de Esparza
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Espíritu Santo',67);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Juan Grande',67);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Macacona',67);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Rafael',67);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Jerónimo',67);
-- Provincia: Puntarenas ___ Distritos de Buenos Aires
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Buenos Aires',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Volcán',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Potrero Grande',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Boruca',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pilas',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colinas',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Changuena',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Biolley',68);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Brunka',68);
-- Provincia: Puntarenas ___ Distritos de Montes De Oro
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Miramar',69);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Unión',69);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('San Isidro',69);
-- Provincia: Puntarenas ___ Distritos de Osa
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puerto Cortés',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Palmar',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sierpe',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bahía Ballena',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Piedras Blancas',70);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bahía Drake',70);
-- Provincia: Puntarenas ___ Distritos de Quepos
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Quepos',71);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Savegre',71);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Naranjito',71);
-- Provincia: Puntarenas ___ Distritos de Golfito
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Golfito',72);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Puerto Jiménez',72);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guaycara',72);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pavón',72);
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
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jacó',76);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Tárcoles',76);
-- Provincia: Limón ___ Distritos de Central
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Limón',77);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Valle La Estrella',77);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Blanco',77);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Matama',77);
-- Provincia: Limón ___ Distritos de Pococí
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guapiles',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Jiménez',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rita',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Roxana',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cariari',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Colorado',78);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('La Colonia',78);
-- Provincia: Limón ___ Distritos de Siquirres
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Siquirres',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pacuarito',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Florida',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Germania',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('El Cairo',79);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Alegría',79);
-- Provincia: Limón ___ Distritos de Talamanca
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Bratsi',80);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Sixaola',80);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Cahuita',80);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Telire',80);
-- Provincia: Limón ___ Distritos de Matina
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Matina',81);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Batán',81);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Carrandi',81);
-- Provincia: Limón ___ Distritos de Guácimo
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Guácimo',82);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Mercedes',82);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Pocora',82);
INSERT INTO Distrito (Nombre,IdCanton) VALUES('Rio Jiménez',82);
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
EXEC setPuesto 'Por Definir'

--INSERTAR ESTADOS
EXEC setEstado 'Activo'
EXEC setEstado 'Inactivo'
EXEC setEstado 'Asignado'
EXEC setEstado 'No Asignado'
EXEC setEstado 'Dar de Baja'
EXEC setEstado 'Reparacion'
EXEC setEstado 'Garantia'

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
EXEC setDepartamento 'Por Definir'

EXEC setCategoria 'Laptop', 1
EXEC setCategoria 'PC Escritorio', 1;
EXEC setCategoria 'Proyector', 1
EXEC setCategoria 'Impresora', 1;
EXEC setCategoria 'Fotocopiadora', 1;
EXEC setCategoria 'Escritorio', 1;
EXEC setCategoria 'Silla', 1;
EXEC setCategoria 'USB', 1;
EXEC setCategoria 'Transporte', 1;
EXEC setCategoria 'Archivaderos', 0;
EXEC setCategoria 'Mueble', 0;
EXEC setCategoria 'Limpieza', 0;
EXEC setCategoria 'Licencias de Programas', 0;

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

-- INSERTAR EMPLEADO
EXEC setEmpleado 'Erick', 'Carballo', 'Porras','2015000001','1995-05-25','2007-01-30','erick@gmail.com','123123',6,1,1,'a'
EXEC setEmpleado 'Allan Eduardo','Chacon','Sandoval','2015000002','1991-03-01','2009-01-30' ,'allan@gmail.com','741741',1,3,2,'L'
EXEC setEmpleado 'Jose Pablo','Vindas','Campos','2015000003','1992-02-02','2007-01-30','Vindas@gmail.com','789789',6,2,3,'J'
EXEC setEmpleado 'Jose','Rivera','Tencio','2015000004','1993-08-07','2017-01-30','ak7@gmail.com','159159',2,4,1,'F'
EXEC setEmpleado 'Stephanny','Jimenez','Navarro','2015000005','1995-01-31','2017-01-30','loli@gmail.com','357357',6,2,1,'J'
EXEC setEmpleado 'Diana','Villalobos','Castro','2015000006','1996-12-12','2017-01-30','Diana@gmail.com','741852',3,5,1,'B'
EXEC setEmpleado 'Monica','Delgado','Piedra','2015000007','1995-09-09','2017-01-30','monik@gmail.com','254125',4,6,1,'L'
EXEC setEmpleado 'Gabriela','Solana','Mora','2015000008','1990-08-07','2017-01-30','gabsol@gmail.com','7854785',5,13,1,'C'
EXEC setEmpleado 'Daniela','Ulate','Alfaro','2015000009','1998-06-20','2017-01-30','dani@gmail.com','7963741',1,3,2,'N'
EXEC setEmpleado 'Roberto','Santos','Pereira','2015000010','1995-07-20','2017-01-30','betolan@gmail.com','7897894',7,21,2,'P'
EXEC setEmpleado 'Miguel','Chacon','Barboza','2015000011','1994-02-09','2017-01-30','bar@gmail.com','852341',8,19,3,'V'
EXEC setEmpleado 'Pedro','Villalta','Lemus','2015000012','1993-05-04', '2017-01-30','Pvillanta@gmail.com','9517530',9,9,3,'C'
EXEC setEmpleado 'Ana','Castellanos','Ortiz','2015000013','1995-04-08','2017-01-30','AnaCO@gmail.com','95000530',10,23,3,'C'
EXEC setEmpleado 'Karla','Aguilar','Ponce','2015000014','1995-04-08','2017-01-30','AKarla@gmail.com','95000530',10,23,3,'C'

--INSERTAR ACTIVO
EXEC setActivo 'AC00001','Laptop1','Computadora DELL T1','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,1,1,4,1
EXEC setActivo 'AC00002','Laptop2','Computadora DELL T2','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,1,1,4,2
EXEC setActivo 'AC00003','Laptop3','Computadora DELL T3','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,1,1,4,3
EXEC setActivo 'AC00004','Laptop4','Computadora DELL T4','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,1,1,4,1
EXEC setActivo 'AC00005','Laptop5','Computadora DELL T5','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,1,1,4,2
EXEC setActivo 'AC00006','Laptop6','Computadora DELL T6','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,1,1,4,3

EXEC setActivo 'AC00007','PC Escritorio1','Computadora de escritorio DELL T1','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,2,1,4,1
EXEC setActivo 'AC00008','PC Escritorio2','Computadora de escritorio DELL T2','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,2,1,4,2
EXEC setActivo 'AC00009','PC Escritorio3','Computadora de escritorio DELL T3','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,2,1,4,3
EXEC setActivo 'AC00010','PC Escritorio4','Computadora de escritorio DELL T4','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,2,1,4,1
EXEC setActivo 'AC00011','PC Escritorio5','Computadora de escritorio DELL T5','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,2,1,4,2
EXEC setActivo 'AC00012','PC Escritorio6','Computadora de escritorio DELL T6','Enlace',1200,1,7,0.1,'2017-01-30','2017-02-08',8,500,2,1,4,3

EXEC setActivo 'AC00013','Proyector1','Proyector CANON T1','Enlace',400000,1,7,0.15,'2019-01-30','2019-02-08',8,600,3,1,4,1
EXEC setActivo 'AC00014','Proyector2','Proyector CANON T2','Enlace',400000,1,7,0.15,'2019-01-30','2019-02-08',8,600,3,1,4,2
EXEC setActivo 'AC00015','Proyector3','Proyector CANON T3','Enlace',400000,1,7,0.15,'2019-01-30','2019-02-08',8,600,3,1,4,3
EXEC setActivo 'AC00016','Proyector4','Proyector CANON T4','Enlace',400000,1,7,0.15,'2019-01-30','2019-02-08',8,600,3,1,4,1
EXEC setActivo 'AC00017','Proyector5','Proyector CANON T5','Enlace',400000,1,7,0.15,'2019-01-30','2019-02-08',8,600,3,1,4,2
EXEC setActivo 'AC00018','Proyector6','Proyector CANON T6','Enlace',400000,1,7,0.15,'2019-01-30','2019-02-08',8,600,3,1,4,3

EXEC setActivo 'AC00019','Impresora1','Impresora HP T1','Enlace',250000,1,3,0.05,'2018-02-20','2018-02-21',8,100,4,1,4,1
EXEC setActivo 'AC00020','Impresora2','Impresora HP T2','Enlace',250000,1,3,0.05,'2018-02-20','2018-02-21',8,100,4,1,4,2
EXEC setActivo 'AC00021','Impresora3','Impresora HP T3','Enlace',250000,1,3,0.05,'2018-02-20','2018-02-21',8,100,4,1,4,3
EXEC setActivo 'AC00022','Impresora4','Impresora HP T4','Enlace',250000,1,3,0.05,'2018-02-20','2018-02-21',8,100,4,1,4,1
EXEC setActivo 'AC00023','Impresora5','Impresora HP T5','Enlace',250000,1,3,0.05,'2018-02-20','2018-02-21',8,100,4,1,4,2
EXEC setActivo 'AC00024','Impresora6','Impresora HP T6','Enlace',250000,1,3,0.05,'2018-02-20','2018-02-21',8,100,4,1,4,3

EXEC setActivo 'AC00025','Fotocopiadora1','Fotocopiadora DELL T1','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,5,1,4,1
EXEC setActivo 'AC00026','Fotocopiadora2','Fotocopiadora DELL T2','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,5,1,4,2
EXEC setActivo 'AC00027','Fotocopiadora3','Fotocopiadora DELL T3','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,5,1,4,3
EXEC setActivo 'AC00028','Fotocopiadora4','Fotocopiadora DELL T4','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,5,1,4,1
EXEC setActivo 'AC00029','Fotocopiadora5','Fotocopiadora DELL T5','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,5,1,4,2
EXEC setActivo 'AC00030','Fotocopiadora6','Fotocopiadora DELL T6','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,5,1,4,3

EXEC setActivo 'AC00031','Escritorio1','Escritorio T1','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,6,1,4,1
EXEC setActivo 'AC00032','Escritorio2','Escritorio T2','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,6,1,4,2
EXEC setActivo 'AC00033','Escritorio3','Escritorio T3','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,6,1,4,3
EXEC setActivo 'AC00034','Escritorio4','Escritorio T4','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,6,1,4,1
EXEC setActivo 'AC00035','Escritorio5','Escritorio T5','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,6,1,4,2
EXEC setActivo 'AC00036','Escritorio6','Escritorio T6','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,6,1,4,3

EXEC setActivo 'AC00037','Silla1','Silla T1','Enlace',30000,1,2,5.2,'2019-01-30','2019-02-01',8,500,7,1,4,1
EXEC setActivo 'AC00038','Silla2','Silla T2','Enlace',30000,1,2,5.2,'2019-01-30','2019-02-01',8,500,7,1,4,2
EXEC setActivo 'AC00039','Silla3','Silla T3','Enlace',30000,1,2,5.2,'2019-01-30','2019-02-01',8,500,7,1,4,3
EXEC setActivo 'AC00040','Silla4','Silla T4','Enlace',30000,1,2,5.2,'2019-01-30','2019-02-01',8,500,7,1,4,1
EXEC setActivo 'AC00041','Silla5','Silla T5','Enlace',30000,1,2,5.2,'2019-01-30','2019-02-01',8,500,7,1,4,2
EXEC setActivo 'AC00042','Silla6','Silla T6','Enlace',30000,1,2,5.2,'2019-01-30','2019-02-01',8,500,7,1,4,3

EXEC setActivo 'AC00043','USB1','USB Kingston T1','Enlace',20000,1,5,0.1,'2019-01-30','2019-02-01',8,500,8,1,4,1
EXEC setActivo 'AC00044','USB2','USB Kingston T2','Enlace',20000,1,5,0.1,'2019-01-30','2019-02-01',8,500,8,1,4,2
EXEC setActivo 'AC00045','USB3','USB Kingston T3','Enlace',20000,1,5,0.1,'2019-01-30','2019-02-01',8,500,8,1,4,3
EXEC setActivo 'AC00046','USB4','USB Kingston T4','Enlace',20000,1,5,0.1,'2019-01-30','2019-02-01',8,500,8,1,4,1
EXEC setActivo 'AC00047','USB5','USB Kingston T5','Enlace',20000,1,5,0.1,'2019-01-30','2019-02-01',8,500,8,1,4,2
EXEC setActivo 'AC00048','USB6','USB Kingston T6','Enlace',20000,1,5,0.1,'2019-01-30','2019-02-01',8,500,8,1,4,3

EXEC setActivo 'AC00049','Carro1','Carro MARCA1','Enlace',32000,1,4,6.3,'2019-01-30','2019-03-01',8,500,9,1,4,1
EXEC setActivo 'AC00050','Carro2','Carro MARCA2','Enlace',32000,1,4,6.3,'2019-01-30','2019-03-01',8,500,9,1,4,2
EXEC setActivo 'AC00051','Carro3','Carro MARCA3','Enlace',32000,1,4,6.3,'2019-01-30','2019-03-01',8,500,9,1,4,3
EXEC setActivo 'AC00052','Carro4','Carro MARCA4','Enlace',32000,1,4,6.3,'2019-01-30','2019-03-01',8,500,9,1,4,1
EXEC setActivo 'AC00053','Carro5','Carro MARCA5','Enlace',32000,1,4,6.3,'2019-01-30','2019-03-01',8,500,9,1,4,2
EXEC setActivo 'AC00054','Carro6','Carro MARCA6','Enlace',32000,1,4,6.3,'2019-01-30','2019-03-01',8,500,9,1,4,3

EXEC setActivo 'AC00055','Archivero1','Archivero Metalico T1','Enlace',350000,1,10,0.12,'2018-08-25','2018-08-29',8,1000,10,1,4,1
EXEC setActivo 'AC00056','Archivero2','Archivero Metalico T2','Enlace',350000,1,10,0.12,'2018-08-25','2018-08-29',8,1000,10,1,4,2
EXEC setActivo 'AC00057','Archivero3','Archivero Metalico T3','Enlace',350000,1,10,0.12,'2018-08-25','2018-08-29',8,1000,10,1,4,3
EXEC setActivo 'AC00058','Archivero4','Archivero Metalico T4','Enlace',350000,1,10,0.12,'2018-08-25','2018-08-29',8,1000,10,1,4,1
EXEC setActivo 'AC00059','Archivero5','Archivero Metalico T5','Enlace',350000,1,10,0.12,'2018-08-25','2018-08-29',8,1000,10,1,4,2
EXEC setActivo 'AC00060','Archivero6','Archivero Metalico T6','Enlace',350000,1,10,0.12,'2018-08-25','2018-08-29',8,1000,10,1,4,3

EXEC setActivo 'AC00061','Mueble1','Mueble de madera T1','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,11,1,4,1
EXEC setActivo 'AC00062','Mueble2','Mueble de madera T2','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,11,1,4,2
EXEC setActivo 'AC00063','Mueble3','Mueble de madera T3','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,11,1,4,3
EXEC setActivo 'AC00064','Mueble4','Mueble de madera T4','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,11,1,4,1
EXEC setActivo 'AC00065','Mueble5','Mueble de madera T5','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,11,1,4,2
EXEC setActivo 'AC00066','Mueble6','Mueble de madera T6','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,11,1,4,3

EXEC setActivo 'AC00067','Limpieza1','Articulos varios de limpieza T1','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,12,1,4,1
EXEC setActivo 'AC00068','Limpieza2','Articulos varios de limpieza T2','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,12,1,4,2
EXEC setActivo 'AC00069','Limpieza3','Articulos varios de limpieza T3','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,12,1,4,3
EXEC setActivo 'AC00070','Limpieza4','Articulos varios de limpieza T4','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,12,1,4,1
EXEC setActivo 'AC00071','Limpieza5','Articulos varios de limpieza T5','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,12,1,4,2
EXEC setActivo 'AC00072','Limpieza6','Articulos varios de limpieza T6','Enlace',1200,5,7,0.1,'2017-01-30','2017-02-08',8,500,12,1,4,3

EXEC setActivo 'AC00073','Licencias de Programas1','Instaladores de programas varios T1','Enlace',3000000,2,3,4.5,'2018-11-30','2018-11-08',8,500,13,1,4,1
EXEC setActivo 'AC00074','Licencias de Programas2','Instaladores de programas varios T2','Enlace',3000000,2,3,4.5,'2018-11-30','2018-11-08',8,500,13,1,4,2
EXEC setActivo 'AC00075','Licencias de Programas3','Instaladores de programas varios T3','Enlace',3000000,2,3,4.5,'2018-11-30','2018-11-08',8,500,13,1,4,3
EXEC setActivo 'AC00076','Licencias de Programas4','Instaladores de programas varios T4','Enlace',3000000,2,3,4.5,'2018-11-30','2018-11-08',8,500,13,1,4,1
EXEC setActivo 'AC00077','Licencias de Programas5','Instaladores de programas varios T5','Enlace',3000000,2,3,4.5,'2018-11-30','2018-11-08',8,500,13,1,4,2
EXEC setActivo 'AC00078','Licencias de Programas6','Instaladores de programas varios T6','Enlace',3000000,2,3,4.5,'2018-11-30','2018-11-08',8,500,13,1,4,3
EXEC setActivo 'AC00079','Licencias de Programas7','Instaladores de programas varios T7','Enlace',3000000,2,3,4.5,'2018-11-30','2018-11-08',8,500,13,1,4,1


DECLARE
	@Correo varchar(50),
	@Nombre varchar(50),
	@Apellido varchar(50)

EXEC sp_assignActive 'AC00001','2015000001',3,'Oficina 20',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00002','2015000002',3,'Oficina 21',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00003','2015000003',3,'Oficina 22',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00004','2015000004',3,'Oficina 23',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00005','2015000005',3,'Oficina 24',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00006','2015000006',3,'Oficina 25',@Correo, @Nombre, @Apellido

EXEC sp_assignActive 'AC00043','2015000001',3,'Oficina 20',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00044','2015000002',3,'Oficina 21',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00045','2015000003',3,'Oficina 22',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00046','2015000004',3,'Oficina 23',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00047','2015000005',3,'Oficina 24',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00048','2015000006',3,'Oficina 25',@Correo, @Nombre, @Apellido

EXEC sp_assignActive 'AC00013','2015000001',3,'Oficina 20',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00014','2015000002',3,'Oficina 21',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00015','2015000003',3,'Oficina 22',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00016','2015000004',3,'Oficina 23',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00017','2015000005',3,'Oficina 24',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00018','2015000006',3,'Oficina 25',@Correo, @Nombre, @Apellido

EXEC sp_assignActive 'AC00007','2015000007',3,'Oficina 26',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00008','2015000008',3,'Oficina 27',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00009','2015000009',3,'Oficina 28',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00010','2015000010',3,'Oficina 29',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00011','2015000011',3,'Oficina 30',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00012','2015000012',3,'Oficina 31',@Correo, @Nombre, @Apellido

EXEC sp_assignActive 'AC00037','2015000007',3,'Oficina 26',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00038','2015000008',3,'Oficina 27',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00039','2015000009',3,'Oficina 28',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00040','2015000010',3,'Oficina 29',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00041','2015000011',3,'Oficina 30',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00042','2015000012',3,'Oficina 31',@Correo, @Nombre, @Apellido

EXEC sp_assignActive 'AC00061','2015000007',3,'Oficina 26',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00062','2015000008',3,'Oficina 27',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00063','2015000009',3,'Oficina 28',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00064','2015000010',3,'Oficina 29',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00065','2015000011',3,'Oficina 30',@Correo, @Nombre, @Apellido
EXEC sp_assignActive 'AC00066','2015000012',3,'Oficina 31',@Correo, @Nombre, @Apellido
