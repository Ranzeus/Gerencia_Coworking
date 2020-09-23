const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const  WorkstationsContr = require('./controllers/WorkstationContr');
const  SalaReuniaoContr = require('./controllers/SalaReuniaoContr');
const LoginController = require('./controllers/LoginController');
const EmailController = require('./controllers/EmailController')

//Routes(Acesso e Edição de Tabelas) Users
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post("/users/register", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

//Routes(Acesso e Edição de Tabelas) Workstations
routes.get('/workstations', WorkstationsContr.index);
routes.get('/workstations/:id', WorkstationsContr.show);
routes.post("/workstations/register", WorkstationsContr.store);
routes.put("/workstations/:id", WorkstationsContr.update);
routes.delete("/workstations/:id", WorkstationsContr.destroy);

//Routes(Acesso e Edição de Tabelas) Sala de Reuniao
routes.get('/salasReuniao', SalaReuniaoContr.index);
routes.get('/salasReuniao/:id', SalaReuniaoContr.show);
routes.post("/salasReuniao/register", SalaReuniaoContr.store);
routes.put("/salasReuniao/:id", SalaReuniaoContr.update);
routes.delete("/salasReuniao/:id", SalaReuniaoContr.destroy);

//Route para o login
routes.post('/login', LoginController.store );

//envia email
routes.post('/email', EmailController.enviaEmail);

module.exports = routes;