import Cabecalho from '../components/Cabecalho';
import '../components/Cabecalho.css';

export default function Mapa() {
  return (
    <div className="mapa-container">
      <Cabecalho xp={100} micoins={50} />
      
      {/* Conteúdo principal do mapa aqui */}
      <main style={{
        flex: 1,
        padding: '20px',
        marginTop: '56px' /* Compensa o header fixo */
      }}>
        {/* Seu conteúdo do mapa */}
      </main>
    </div>
  );
}