const Services = require('./Services.js');

class PessoaService extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(where = {}) {
    const estudante = await super.pegaUmRegistro({ ...where });
    const matriculas = await estudante.getAulasMatriculadas();
    return matriculas;
  }
}

module.exports = PessoaService;






















