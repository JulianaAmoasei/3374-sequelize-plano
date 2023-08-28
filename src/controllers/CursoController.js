const Controller = require('./Controller.js');
const Service = require('../services/CursoService.js');

const cursoService = new Service();

class CursoController extends Controller {
  constructor() {
    super(cursoService);
  }
}

module.exports = CursoController;
