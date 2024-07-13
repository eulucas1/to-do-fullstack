import React, { useEffect, useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import { IEvento } from './interfaces/IEvento';
import ListaDeEventos from './components/ListaDeEventos';
import { adicionarTarefa, atualizarTarefa, deletarTarefa, getTarefas } from './servicos/tarefas';

function App() {
  const [eventos, setEventos] = useState<IEvento[]>([]);

  useEffect(() => {
    fetchEventos();
  }, []);

  async function fetchEventos() {
    const eventosDaAPI = await getTarefas();
    setEventos(eventosDaAPI);
  }

  const adicionarNovoEvento = async (novoEvento: IEvento) => {
    const eventoAdicionado = await adicionarTarefa(novoEvento);
    setEventos([...eventos, eventoAdicionado]);
  };

  const alterarStatusEvento = async (id: number) => {
    const evento = eventos.find((e) => e.id === id);
    if (evento) {
      const eventoAtualizado: IEvento = { ...evento, completa: !evento.completa };
      await atualizarTarefa(id, eventoAtualizado);
      fetchEventos();
    }
  };

  const alterarDescricao = async (id: number, novaDescricao: string) => {
    const evento = eventos.find((e) => e.id === id);
    if (evento) {
      const eventoAtualizado: IEvento = { ...evento, descricao: novaDescricao };
      await atualizarTarefa(id, eventoAtualizado);
      fetchEventos();
    }
  };

  const removerEvento = async (id: number) => {
    await deletarTarefa(id);
    fetchEventos();
  };

  return (
    <div className={style.App}>
      <div className={style.Coluna}>
        <Card>
          <Formulario aoSalvar={adicionarNovoEvento} />
        </Card>
        <hr />
        <Card>
          <ListaDeEventos 
            eventos={eventos} 
            aoAlterarStatus={alterarStatusEvento} 
            aoDeletarEvento={removerEvento}
            alterarDescricao={alterarDescricao} 
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
