const database = require('../models');

class PessoaController {
  static async pegaTodas(req, res){
    try {
      const todasAsPessoas = await database.Pessoa.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      // erro
    }
  }
} 
 
module.exports = PessoaController;
