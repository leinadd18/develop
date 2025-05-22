import React, { useState } from 'react';
import './BarraNavegacao.css';

export default function BarraNavegacao() {
  const [itemAtivo, setItemAtivo] = useState('mapa');

  const itens = [
    { 
      id: 'mapa', 
      iconeDefault: '/icons/map-default.svg', 
      iconeActive: '/icons/map-active.svg',
      rotulo: 'Mapa' 
    },
    { 
      id: 'missoes', 
      iconeDefault: '/icons/target-default.svg',
      iconeActive: '/icons/target-active.svg',
      rotulo: 'Missões' 
    },
    { 
      id: 'medalha', 
      iconeDefault: '/icons/medal-default.svg',
      iconeActive: '/icons/medal-active.svg',
      rotulo: 'Conquistas' 
    },
    { 
      id: 'estatisticas', 
      iconeDefault: '/icons/chart-default.svg',
      iconeActive: '/icons/chart-active.svg',
      rotulo: 'Estatísticas' 
    },
    { 
      id: 'config', 
      iconeDefault: '/icons/config-default.svg',
      iconeActive: '/icons/config-active.svg',
      rotulo: 'Config' 
    }
  ];

  return (
    <nav className="barra-navegacao">
      {itens.map(item => (
        <button
          key={item.id}
          className={`botao-nav ${itemAtivo === item.id ? 'ativo' : ''}`}
          onClick={() => setItemAtivo(item.id)}
          aria-label={item.rotulo}
        >
          <div className="icone-container">
            <img 
              src={itemAtivo === item.id ? item.iconeActive : item.iconeDefault} 
              alt=""
              className="icone-nav"
            />
          </div>
          {itemAtivo === item.id && (
            <span className="rotulo-nav">{item.rotulo}</span>
          )}
        </button>
      ))}
    </nav>
  );
}