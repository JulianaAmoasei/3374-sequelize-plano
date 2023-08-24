'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.Pessoa, {
        foreignKey: 'docente_id',
      });
      Curso.hasMany(models.Matricula, {
        foreignKey: 'curso_id',
      });
      Curso.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id',
      });
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataInicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos',
  });
  return Curso;
};