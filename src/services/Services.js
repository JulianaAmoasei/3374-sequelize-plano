const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros(where = {}) {
    return dataSource[this.model].findAll({ where: { ...where } });
  }

  // async pegaUmRegistroPorId(id) {
  //   return dataSource[this.model].findByPk(id);
  // }

  // async pegaUmRegistro(where) {
  //   return dataSource[this.model].findOne({ where: { ...where } });
  // }

  // async criaRegistro(dadosDoRegistro) {
  //   return dataSource[this.model].create(dadosDoRegistro);
  // }

  // async atualizaRegistro(dadosAtualizados, where){
  //   const registrosAtualizados = dataSource[this.model]
  //     .update(dadosAtualizados, { where: { ...where } });
  //   if (registrosAtualizados[0] === 0) {
  //     return false;
  //   }
  //   return true;
  // }

  // async excluiRegistro(id) {
  //   return dataSource[this.model].destroy({ where: { id: id } });
  // }
}

module.exports = Services;
