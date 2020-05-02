import { Router } from 'express';
import LoginController from './App/Controllers/LoginController';
import MsgController from './App/Controllers/MensagemController';
import ParticiapantesController from './App/Controllers/ParticiapantesController';

const routes = Router();

routes.post('/login', LoginController.store);
routes.post('/msg', MsgController.store);
routes.get('/msg', MsgController.index);
routes.get('/participantes', ParticiapantesController.index);

export default routes;
