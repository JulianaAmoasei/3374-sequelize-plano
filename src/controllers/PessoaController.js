const Controller = require('./Controller.js');
const PessoaService = require('../services/PessoaService.js');

const pessoaService = new PessoaService();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }

  // async pegaMatriculas(req, res) {  
  //   const { estudanteId } = req.params;
  //   try {
  //     const matriculas = await pessoaService
  //       .pegaMatriculasPorEstudante({ id: Number(estudanteId) });
  //     return res.status(200).json(matriculas);
  //   } catch (error) {
  //     // erro
  //   }
  // }
}

module.exports = PessoaController;
