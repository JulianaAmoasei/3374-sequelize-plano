const Services = require('./Services.js');

class MatriculaService extends Services {
  constructor() {
    super('Matricula');
  }

  async pegaMatriculasPorEstudante(where = {}) {
    console.log(super.pegaUmRegistro);
    const matriculas = await super.pegaUmRegistro({ where: { ...where } });
    return matriculas.getAulasMatriculadas();
  }
}

module.exports = MatriculaService;
