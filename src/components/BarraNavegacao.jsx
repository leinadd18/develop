import React, { useState } from 'react';

const itensNavegacao = [
  { iconeAtivo: '/icons/map-active.svg', iconePadrao: '/icons/map-default.svg', rotulo: 'Mapa' },
  { iconeAtivo: '/icons/chart-active.svg', iconePadrao: '/icons/chart-default.svg', rotulo: 'Estatísticas' },
  { iconeAtivo: '/icons/target-active.svg', iconePadrao: '/icons/target-default.svg', rotulo: 'Missões' },
  { iconeAtivo: '/icons/medal-active.svg', iconePadrao: '/icons/medal-default.svg', rotulo: 'Recompensas' },
  { iconeAtivo: '/icons/config-active.svg', iconePadrao: '/icons/config-default.svg', rotulo: 'Configurações' },
];

export default function BarraNavegacao() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  return (
    <nav className="nav-bar">
      {itensNavegacao.map(({ iconeAtivo, iconePadrao, rotulo }, i) => (
        <div
          key={rotulo}
          className={`nav-item ${indiceAtivo === i ? 'active' : ''}`}
          onClick={() => setIndiceAtivo(i)}
        >
          <img src={indiceAtivo === i ? iconeAtivo : iconePadrao} alt={rotulo} />
          <span className="nav-label">{rotulo}</span>
        </div>
      ))}
    </nav>
  );
}