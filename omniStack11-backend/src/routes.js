const express = require('express');

const OngController = require('../src/controlers/OngController');
const IncidentController = require('../src/controlers/IncidentController');
const PerfilController = require('../src/controlers/PerfilController');
const SessaoController = require('../src/controlers/SessaoController');

const routes = express.Router();

routes.post('/sessao', SessaoController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/perfil', PerfilController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;