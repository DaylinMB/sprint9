###  Sprint8 Angular IV: Inprocode  ### 📄

App mobile, esta app brinda informacion sobre todos los tramites sobre estancia en Españas para personas que provienen de latinoamerica.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

###  Características  ###

- **Calendario:** Contiene un calendario implementado con FullCalendar, que permite a los usuarios agregar, eliminar y ver detalles de eventos. Además, incluye funcionalidades para seleccionar fechas directamente desde el calendario.
- **Gráficos:** Incluye gráficos implementados desde la librería de Charts para visualizar datos de manera efectiva.
- **Mapa:** Implementa un mapa de MapBox que almacena la información de diferentes marcadores, proporcionando una forma visual de presentar ubicaciones relevantes.

###  Tecnologías Usadas  ### 💻

- **Frontend:**
  - Angular 18
  - ngx-toastr

- **Backend:**
  - Express.js
  - Sequelize
  - MySQL

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:


## Instalación 🛠️

Para configurar el proyecto, sigue estos pasos:

1. **Clona el repositorio:**  🛠️

   `bash`
    git clone `https://github.com/tu_usuario/tu_repositorio.git`
    npm install

2. **Configura el Backend:**  ▶️

- Asegúrate de tener MySQL instalado y en funcionamiento.
- Crea una base de datos llamada **migracheck**
- Asegúrate de que el backend esté configurado para escuchar en el puerto deseado (por defecto, el puerto 3000).
- Encontraras la base de datos dentro de la carpeta backend.

3. **Inicia el servidor backend:**  ▶️
- **nodemon dist/index.js** Para compilar la base de datos.
- **tsc - watch** Para compilar el javascript.


4. **Inicia la aplicación Angular:**  ▶️
- **ng serve -o** (La aplicación debería estar disponible en `http://localhost:4200`.)




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. 