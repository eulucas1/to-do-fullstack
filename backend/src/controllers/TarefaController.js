const Controller = require('./Controller.js');
const TarefaServices = require('../services/TarefaServices.js');
const dataSource = require('../models'); 

const tarefaServices = new TarefaServices(dataSource);

class TarefaController extends Controller {
  constructor() {
    super(tarefaServices);
  }
  
  async pegaTodos(req, res) {
    try {
        console.log('Chamou pegaTodos');
        const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
        console.log('Lista de registros:', listaDeRegistro);
        return res.status(200).json(listaDeRegistro);
    } catch (erro) {
        console.error('Erro em pegaTodos:', erro);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

async atualiza(req, res) {
  const { id } = req.params;
  const dadosAtualizados = req.body;
  try {
    console.log(`ID recebido na requisição PUT: ${id}`);
    console.log('Dados para atualização:', dadosAtualizados);
    const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
    console.log('Registros atualizados:', foiAtualizado);
    if (!foiAtualizado) {
      console.log('Nenhum registro foi atualizado');
      console.log('Registro não encontrado');
      return res.status(404).json({ mensagem: 'Registro não encontrado' });
    }
    console.log('Registro atualizado com sucesso');
    return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
  } catch (erro) {
    console.error(`Erro ao atualizar o registro com o ID ${id}:`, erro);
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}
}

module.exports = TarefaController;
