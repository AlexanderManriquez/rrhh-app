# Gestión de Recursos Humanos - Full Stack App

Este proyecto es una aplicación full stack para la gestión de empleados en una empresa. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los empleados, utilizando un backend desarrollado en Java con Spring Boot y un frontend desarrollado en React.

## Características

- **Frontend**: React con Vite, utilizando Bootstrap para el diseño.
- **Backend**: Java con Spring Boot, conectándose a una base de datos relacional.
- **Operaciones CRUD**: Crear, listar, editar y eliminar empleados.
- **API REST**: Comunicación entre el frontend y el backend mediante endpoints REST.

## Tecnologías utilizadas

### Frontend
- React
- Vite
- Bootstrap 5
- Axios (para realizar solicitudes HTTP)

### Backend
- Java
- Spring Boot
- JPA (Java Persistence API)
- H2 Database (o cualquier base de datos relacional)

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (para el frontend)
- [Java JDK 17+](https://www.oracle.com/java/technologies/javase-downloads.html) (para el backend)
- [Maven](https://maven.apache.org/) (para gestionar dependencias del backend)

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/<tu-usuario>/rrhh-full-stack.git
cd rrhh-full-stack
```

### Backend

Navega a la carpeta del backend:

```bash
cd rrhh-java-spring
```

Compila y ejecuta el backend:

```bash
mvn spring-boot:run
```

El backend estará disponible en http://localhost:8080.

### Frontend

Navega a la carpeta del frontend:

```bash
cd rrhh-react-app
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

El frontend estará disponible en http://localhost:5173.

Guarda este contenido en un archivo llamado [README.md](http://_vscodecontentref_/2) en la raíz de tu proyecto. Esto ayudará a otros desarrolladores a entender y usar tu proyecto fácilmente.

## Uso

Abre el navegador y accede a http://localhost:5173.
Utiliza la interfaz para agregar, editar, listar y eliminar empleados.
Los datos se sincronizan con el backend mediante la API REST.

## Estructura del proyecto

```
rrhh-full-stack/
├── rrhh-java-spring/       # Backend (Spring Boot)
├── rrhh-react-app/         # Frontend (React con Vite)
└── [README.md](http://_vscodecontentref_/1)               # Documentación del proyecto
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu funcionalidad (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz un commit (git commit -m "Agrega nueva funcionalidad").
Haz un push a tu rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

¡Gracias por usar esta aplicación! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio.

### Instrucciones adicionales:
1. Reemplaza `<tu-usuario>` en el enlace del repositorio con tu nombre de usuario de GitHub.
2. Si utilizas una base de datos diferente a H2, actualiza la sección de requisitos y configuración del backend.

