class Controller {

  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(_, res){
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = Controller;
