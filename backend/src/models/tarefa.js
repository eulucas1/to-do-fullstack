'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    
    static associate(models) {
    }
  }
  Tarefa.init({
    descricao: DataTypes.STRING,
    completa: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tarefa',
    tableName: 'tarefas'
  });
  return Tarefa;
};