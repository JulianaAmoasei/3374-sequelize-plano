const Controller = require('./Controller.js');
const Service = require('../services/MatriculaService.js');

const matriculaService = new Service();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaService);
  }

  async pegaMatriculas(req, res) { 
    const { estudanteId } = req.params;
    try {
      const matriculas = await matriculaService
        .pegaTodosOsRegistros({ estudante_Id: Number(estudanteId) });
      return res.status(200).json(matriculas);
    } catch (error) {
      //erro
    }
  }
 

  // async pegaUmaMatricula(req, res) {
  //   const { estudanteId, id } = req.params;
  //   try {
  //     const umaMatricula = await matriculaService.pegaUmRegistro({ 
  //       id: Number(id),
  //       estudante_id: Number(estudanteId)
  //     });
  //     return res.status(200).json(umaMatricula);
  //   } catch (error) {
  //     // erro
  //   }
  // }

}

module.exports = MatriculaController;
