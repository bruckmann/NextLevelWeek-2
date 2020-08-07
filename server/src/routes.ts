import express from 'express'
import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers =  new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.CreateClass);
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.createConnection);

export default routes;