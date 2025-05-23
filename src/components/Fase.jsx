import React from 'react';
import Ilha from './Ilha';

// Props:
// titulo: nome da fase
// descricao: descrição da fase
// quantidadeIlhasNormais: quantas ilhas normais tem na fase
// numeroIlhaChefe: número da ilha chefe especial (boss)
export default function Fase({ titulo, descricao, quantidadeIlhasNormais, numeroIlhaChefe }) {
  return (
    <section className="phase">
      <div className="phase-info">
        <h2 className="phase-title">{titulo}</h2>
        <p className="phase-description">{descricao}</p>
      </div>
      <div className="islands-container">
        {[...Array(quantidadeIlhasNormais).keys()].map(i => (
          <Ilha key={i} numero={i + 1} chefe={false} />
        ))}
        <Ilha numero={numeroIlhaChefe} chefe={true} />
      </div>
    </section>
  );
}