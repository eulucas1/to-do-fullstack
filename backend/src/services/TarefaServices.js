const dataSource = require('../models');
const Services = require('./Services.js'); 

class TarefaServices extends Services {
    constructor(dataSource) {
      super('Tarefa');
      this.dataSource = dataSource;
    }
  
    async atualizaRegistro(dadosAtualizados, id) {
        console.log(`ID recebido para atualização: ${id}`);
        console.log('Dados para atualização:', dadosAtualizados);
        const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
          where: { id: id }
        });
        console.log('Registros atualizados:', listadeRegistrosAtualizados);
        if (listadeRegistrosAtualizados[0] === 0) {
          return false;
        }
        return true;
      }
      
      }
  
  module.exports = TarefaServices;
  