import express, { Application, Request, Response } from 'express';
import db from '../db/connection';
import cors from 'cors';
import routeCountry from '../routes/country';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env['PORT'] || '3001';
    this.midlewares();
    this.routes();
    this.listen();
    this.dbConnect();
  }

  listen() { 
    this.app.listen(this.port, () => {
      console.log(`Aplicación corriendo en el puerto ${this.port}`);
    });
  }

  routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.json({
        msg: 'API working',
      });
    });
    this.app.use('/api/country/', routeCountry);
  }

  midlewares() {
    //cors
    this.app.use(cors(/*{ origin: 'http://localhost:4200/'}*/));

    //Parsear al body
    this.app.use(express.json());

  }

  async dbConnect() {
    try {
      await db.authenticate();
      console.log('Base de datos conectada');
    } catch (error) {
      console.log(error);
      console.log('Error al conectarse a la base de datos');
    }
  }
}

export default Server;
