import React, { useState } from 'react';
import { IEvento } from '../../interfaces/IEvento';
import style from './Formulario.module.scss';

const Formulario: React.FC<{ aoSalvar: (evento: IEvento) => void }> = ({ aoSalvar }) => {
  const [descricao, setDescricao] = useState('')


  const submeterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    aoSalvar({
      descricao,
      completa: false
    })
    setDescricao('')

  }
  return (<form className={style.Formulario} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Novo tarefa</h3>

    <label>Descrição</label>
    <input 
      type="text" 
      name="descricao"
      id="descricao"
      className={style.input}
      onChange={evento => setDescricao(evento.target.value)} 
      placeholder="Digite sua tarefa completa" value={descricao} 
      autoComplete="off"
      required />

    

    <button className={style.botao}>
      Salvar
    </button>

  </form>)
}

export default Formulario