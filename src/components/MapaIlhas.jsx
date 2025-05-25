import React from 'react';
import styled from '@emotion/styled';

const ContainerMapa = styled.div`
  position: relative;
  height: 600px;
  margin: 0 auto;
  
`;

const Ilha = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.concluida ? '#4CAF50' : '#a9110e'};
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
`;

const NomeIlha = styled.span`
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-size: 12px;
  text-align: center;
  padding: 2px;
`;

const MapaIlhas = () => {
    const ilhas = [
        { id: 1, nome: "1", top: "10%", left: "50%", concluida: true },
        { id: 2, nome: "2", top: "23%", left: "60%", concluida: false },
        { id: 3, nome: "3", top: "37%", left: "69%", concluida: false },
        { id: 4, nome: "4", top: "48%", left: "54%", concluida: false },
        { id: 5, nome: "5", top: "59%", left: "38%", concluida: false },
        { id: 6, nome: "6", top: "71%", left: "25%", concluida: false },
        { id: 7, nome: "7", top: "82%", left: "39%", concluida: false },
        { id: 8, nome: "8", top: "91%", left: "55%", concluida: false },
        { id: 9, nome: "9", top: "100%", left: "70%", concluida: false }, 
        { id: 10, nome: "10", top: "115%", left: "73%", concluida: false }, 
    ];

    return (
        <ContainerMapa>
            {ilhas.map((ilha) => (
                <Ilha
                    key={ilha.id}
                    style={{ 
                        top: ilha.top, 
                        left: ilha.left,
                    }}
                    concluida={ilha.concluida}
                    onClick={() => console.log(`Ilha ${ilha.nome} clicada!`)}
                >
                    <NomeIlha>{ilha.nome}</NomeIlha>
                </Ilha>
            ))}
        </ContainerMapa>
    );
};

export default MapaIlhas;