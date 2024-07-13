import { IEvento } from "../interfaces/IEvento";

const API_URL = 'http://localhost:8000';

export const getTarefas = async () => {
  const response = await fetch(`${API_URL}/tarefas`);
  const data = await response.json();
  return data;
};

export const adicionarTarefa = async (novaTarefa: IEvento) => {
    const response = await fetch(`${API_URL}/tarefas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaTarefa),
    });
    const data = await response.json();
    return data;
};

export const atualizarTarefa = async (id: number, tarefaAtualizada: IEvento) => {
  const response = await fetch(`${API_URL}/tarefas/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tarefaAtualizada),
  });
  const data = await response.json();
  return data;
};

  
  export const deletarTarefa = async (id: number) => {
    const response = await fetch(`${API_URL}/tarefas/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  
};
