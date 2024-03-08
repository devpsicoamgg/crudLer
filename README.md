# Proyecto CRUD de Registro de Personas

Este proyecto tiene como objetivo desarrollar un CRUD (Crear, Leer, Actualizar, Eliminar) que permita gestionar el registro de personas. La aplicación estará compuesta por un backend Java y un frontend Angular, utilizando una base de datos PostgreSQL para almacenar la información.

## Requerimientos segun guia técnica. 

- Base de datos PostgreSQL para el almacenamiento de datos.
- Backend Java para la lógica y la gestión de datos.
- Frontend Angular para la interfaz de usuario.
- Campos obligatorios: Nombre, número de cédula (identificador único) y fecha de nacimiento.

## Tecnologías Utilizadas

- **Backend:**
  - Java Versión 21
  - IDE: IntelliJ IDEA
  
  Dependencias:
    - Spring Web (WEB): Construye aplicaciones web, incluyendo APIs RESTful, usando Spring MVC. Utiliza Apache Tomcat como contenedor embebido por defecto.
    - Spring Data JPA (SQL): Permite persistir datos en bases de datos SQL utilizando Java Persistence API (JPA) con Spring Data y Hibernate.
    - PostgreSQL Driver (SQL): Controlador JDBC y R2DBC que permite a programas Java conectarse a una base de datos PostgreSQL utilizando código Java estándar, independiente de la base de datos.
    - Lombok: Optimiza la escritura de código repetitivo, con métodos como getters, setters, y constructores. 

    ![Img](imgsProcessDocumentation\spring.JPG)


- **Frontend:**
  - Angular
  - Editor de Código: Visual Studio Code
  
## Proceso de creación. 

**Backend**
- 1. Configuración inicial. 
  - Se crea segun la imagen arriba con spring. Se toma spring por la facilidad, con las dependencias mostradas. Dependencias especificas en pom.xml [Véase pom.xml](ruta/a/pom.xml)
    - Se crea la BD en consola de postgres CREATE DB userslerprevention;
  <img src="imgsProcessDocumentation\db.JPG" alt="Imagen" width="550">
  - Se crean los paquetes de: Controllers, Models y repository.
  - Se definió la clase Persona con los atributos id, nombre y fechaNacimiento utilizando anotaciones de JPA. Se implementó un método calcularEdad() para calcular la edad de la persona a partir de su fecha de nacimiento. 
  - Implementación de controladores REST. 
  - Endpoints: 
    - http://localhost:8080/ ➡ endpoint entrada. ➡ GET  
    - http://localhost:8080/api/v1/usuarios ➡ getAllUsers. ➡ GET
    - http://localhost:8080/api/v1/crear ➡ postUser recibe por body la data. ➡ POST
    - http://localhost:8080/api/v1/borrar/ ➡ delUser recibe por params el Id. ➡ DEL
    - http://localhost:8080/api/v1/editar/23456898 ➡ editUser recibe por params el Id y por body la data. ➡ PUT 
      <img src="imgsProcessDocumentation\imsonia.JPG" alt="Imagen" width="550">
    - Se implementaron validaciones para garantizar la integridad de los datos, como verificar si una persona ya existe antes de crearla, etc. 
    - SE genera un manejo de excepciones, es asi como los controladores retornan msj de error en caso de dado.
    - Se implementa sistema de monitoreo y logging para registrar eventos y errores importantes en la API. [Véase application.properties](crud\src\main\resources\application.properties). 
    - > [!IMPORTANT] No se trabajó bajo modelo de variables de entorno. 
    - Se implementó sistema de monitoreo y logging para registrar eventos y errores importantes en la API. [Véase application.properties](crud\src\main\resources\application.properties). 
