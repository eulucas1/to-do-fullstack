const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    console.log('Dados atualizados:', dadosAtualizados);
    console.log('ID:', id);
  
    const listadeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
  
    console.log('Registros atualizados:', listadeRegistrosAtualizados);
  
    if (listadeRegistrosAtualizados[0] === 0) {
      console.log('Nenhum registro foi atualizado');
      return false;
    }
    console.log('Registro atualizado com sucesso');
    return true;
  }

  async excluiRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;