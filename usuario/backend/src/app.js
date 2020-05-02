import express from 'express';
import cors from 'cors';
import { Server } from 'http';
import socket from 'socket.io';
import routes from './routes';

import './Database';

class App {
  constructor() {
    this.app = express();
    this.server = Server(this.app);
    this.io = socket(this.server);

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use((req, res, next) => {
      req.io = this.io;

      next();
    });
    this.app.use(express.json());

    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }
}
export default new App().server;
