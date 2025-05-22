import React from 'react';

// Props:
// numero: número da ilha
// chefe: booleano que indica se é a ilha especial chefe (boss)
export default function Ilha({ numero, chefe }) {
  return (
    <div className={`island ${chefe ? 'island-boss' : 'island-normal'}`}>
      {numero}
    </div>
  );
}
