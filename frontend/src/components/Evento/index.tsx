import React, { useState } from 'react';
import { IEvento } from '../../interfaces/IEvento';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Input from '../Input';
import { IoMdCheckmark } from "react-icons/io";

const Evento: React.FC<{ evento: IEvento, aoAlterarStatus: (id: number) => void, aoDeletarEvento: (id: number) => void, alterarDescricao: (id: number, novaDescricao: string) => void }> = ({ evento, aoAlterarStatus, aoDeletarEvento, alterarDescricao }) => {
  
  const [modoDeEdicao, setModoDeEdicao] = useState(false);
  const [novaDescrição, setNovaDescrição] = useState(evento.descricao);

  const toggleModoDeEdicao = () => {
    setModoDeEdicao(!modoDeEdicao);
  }

  const handleSalvar = async () => {
    try {
      if (modoDeEdicao && evento.id !== undefined) {  
        await alterarDescricao(evento.id, novaDescrição); 
        setModoDeEdicao(false);
      }
    } catch (error) {
      console.error("Erro ao salvar descrição:", error);
    }
  };

  return (
    <div className={style.Evento}>
      <EventoCheckbox evento={evento} aoAlterarStatus={aoAlterarStatus}/>
      
      <div className={style.cardsInfo}>
        <div className={style.tituloContainer}>
          {modoDeEdicao ? (
            <Input
              value={novaDescrição}
              onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setNovaDescrição(evento.target.value)}
            />
          ) : (
            <h3 className={style.descricao}>{novaDescrição}</h3>
          )}
          <div className={style.icons}>
            {!modoDeEdicao && <FiEdit onClick={toggleModoDeEdicao} />}
            {!modoDeEdicao && <MdDelete onClick={() => aoDeletarEvento(evento.id!)} />}
          </div>
        </div>
        {modoDeEdicao && (
          <IoMdCheckmark className={style.icons} onClick={handleSalvar} />
        )}
      </div>
    </div>
  );
}
export default Evento;
