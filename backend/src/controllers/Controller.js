class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch (erro) {
            console.error('Erro ao obter todos os registros:', erro);
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
    
    async pegaUmPorId(req, res) {
        const { id } = req.params;
        try {
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
            return res.status(200).json(umRegistro);
        } catch (erro) {
            console.error(`Erro ao obter o registro com o ID ${id}:`, erro);
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
    
    async criaNovo(req, res) {
        const dadosParaCriacao = req.body;
        try {
          const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
          return res.status(201).json(novoRegistroCriado);
        } catch (erro) {
          console.error('Erro ao criar um novo registro:', erro);
          return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
      }
    
      async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
            if (!foiAtualizado) {
                return res.status(404).json({ mensagem: 'Registro não encontrado' });
            }
            return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
        } catch (erro) {
            console.error(`Erro ao atualizar o registro com o ID ${id}:`, erro);
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
    

    async exclui(req, res) {
        const { id } = req.params;
        try {
            await this.entidadeService.excluiRegistro(Number(id));
            return res.status(200).json({ mensagem: `id ${id} deletado` });


        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = Controller;