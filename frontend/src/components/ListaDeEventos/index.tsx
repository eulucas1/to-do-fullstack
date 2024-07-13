import React from 'react';
import { IEvento } from '../../interfaces/IEvento';
import Evento from '../Evento';
import style from './ListaDeEventos.module.scss';

const ListaDeEventos: React.FC<{
  eventos: IEvento[],
  aoAlterarStatus: (id: number) => void,
  aoDeletarEvento: (id: number) => void,
  alterarDescricao: (id: number, novaDescricao: string) => void 
}> = ({ eventos, aoDeletarEvento, aoAlterarStatus, alterarDescricao }) => {

  return (
    <section>
      <div className={style.Scroll}>
        {eventos.map(evento => (
          <Evento
            key={evento.id} 
            aoAlterarStatus={aoAlterarStatus}
            aoDeletarEvento={aoDeletarEvento}
            alterarDescricao={alterarDescricao}
            evento={evento}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaDeEventos;
