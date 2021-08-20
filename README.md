# Data Lovers OLIMPYCS

## Preámbulo
Los juegos Olímpicos de Río de Janeiro, fueron un evento multideportivo internacional, celebrado en la ciudad de Río de Janeiro, Brasil. La elección de Río marcó la primera vez que se realiza en un país sudamericano.
### Definición del producto
Nuestro primer prototipo de baja fidelidad estaba pensado para que el usuario viera una pantalla principal en el que se le invitaba a conocer sobre los atletas olimpicos y al ingresar mediante un boton "Ver más", se mostraria una tabla con la información de los atletas olimpicos.
Decidimos abandonar ese primer prototipo ya que requeria mas interacciones de parte del usuario y despues de recibir feedback decidimos hacer una sola pantalla en la que de inicio se mostrara la información a los usuarios. Igualmente se cambio el mostrar la información en tabla por mostrarlo en tarjetas, ya que así la información es mas ilustrativa y no tendriamos problemas al visitar la pagina desde dispositivos moviles o ipads.
### Primeros prototipos
![Prototipo de baja fidelidad 1](https://github.com/karen-gup/CDMX011-data-lovers/blob/72f6390068930fb411ab7a7283d3e1c45386d6c5/protoBf-1.jpeg)
![Prototipo de baja fidelidad 2](https://github.com/karen-gup/CDMX011-data-lovers/blob/72f6390068930fb411ab7a7283d3e1c45386d6c5/protoBf-2.jpeg)

![Prototipo de alta fidelidad](https://github.com/karen-gup/CDMX011-data-lovers/blob/72f6390068930fb411ab7a7283d3e1c45386d6c5/ProtoAf-1.jpeg)

#### Prototipo de baja fidelidad

![Prototipo de baja fidelidad](https://github.com/mirellgms/CDMX011-data-lovers/blob/Karen/proto%20Bf-definitivo.jpeg)




#### Prototipo de alta fidelidad
![Prototipo de alta fidelidad](https://github.com/mirellgms/CDMX011-data-lovers/blob/Karen/Prototipo%20de%20alta%20fidelidad%20olimpic.JPG)


## Resumen del proyecto
Construimos una base de datos con todos los atletas que ganaron medalla durante los juegos olimpicos de 2016, que esta enfocada para usuarios de entre 28 y 30 años de ambos sexos con interes en los juegos olímpicos, que le gustaría conocer los resultados más relevantes en los juegos olímpicos de Río 2016 tales como:
-Atletas ganadores de medallas de oro, plata y bronce
-Atletas ganadores en cada deporte
-Atletas ganadores de cada país

Los datos más relevantes buscados por los usuarios son: 
-Nombre del atleta ganador
-Medalla obtenida
-País representado
-Evento deportivo en el que participó

Esta base de datos podrá ser utilizada cuando los usuarios quieran consultar información sobre algún atleta ganador de medalla en las olimpiadas de Río 2016.

## Interfaz de usuario
https://mirellgms.github.io/CDMX011-data-lovers/

## Historias de Usuario:
* H.U 1: YO como usuario QUIERO ver una interfaz con las tarjetas de información de los atletas PARA saber de va la pagina 
**Criterios de aceptacion**
-El usuario podrá ver una interfaz con un banner referente a juegos olímpicos
-El usuario podrá ver en la interfaz un menú ("Sobre rio", "Medallero","Deportes","mujeres de oro")
-El usuario podrá ver en la interfaz lar tarjetas con la información de los atletas
-El usuario podrá ver en la interfaz los selectores que podrá usar para filtrar la información
**Definición de terminado**
-Aplicar nuestro prototipo de alta fidelidad al código
-Lograr imprimir la data en la pantalla 
-Aplicar flexbox a nuestra interfaz
* H.U 2:  YO como usuario QUIERO ver los datos de los atletas por país PARA poder identificarlos.
**Criterios de aceptación**
-El usuario podrá filtrar los datos de acuerdo al país seleccionado
-El usuario verá los datos de los atletas tarjetas
-Los datos que verá serán nombre, noc, evento y medalla
-Los atletas estarán organizados alfabéticamente
-Debe ser responsive desktop (1440x1024) y mobile (360x640)  

**Definición de Terminado**
-Importar la data desde athletes.js para manipularla en data.js
-Funciones de filtrado  en data.js para exportarlas y usarlas en main.js
-Llamar el elemento en el html del label para manipularlo en main.js
-Asegurarnos que el código este en la rama master
-Información este consumida desde el objeto js
-Mostrar los resultados obtenidos del filtrado 

* H.U 3: Historia de usuario YO como usuario QUIERO poder filtrar los datos por la medalla ganada y por deporte PARA ver menos resultados de busqueda.
**Criterio de aceptación**
-El usuario podrá filtrar los datos de acuerdo a un deporte seleccionado
-El usuario podrá filtrar los datos de acuerdo a una medalla seleccionada
**Terminado**
-Lograr funciones que nos permitan filtrar los datos
-Importar las funciones a main.js para que el usuario las pueda usar a través de los selectores
-Que los selectores sean responsive
