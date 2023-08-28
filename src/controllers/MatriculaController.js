const Controller = require('./Controller.js');
const Service = require('../services/MatriculaService.js');

const matriculaService = new Service();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaService);
  }
}

module.exports = MatriculaController;
