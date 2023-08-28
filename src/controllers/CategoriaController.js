const Controller = require('./Controller.js');
const Service = require('../services/CategoriaService.js');

const categoriaService = new Service();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaService);
  }
}

module.exports = CategoriaController;
