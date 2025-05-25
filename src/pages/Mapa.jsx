import Cabecalho from '../components/Cabecalho';
import '../components/Cabecalho.css';
import '../components/TituloFase.css';
import '../components/Fases.css';
import MapaIlhas from '../components/MapaIlhas';

export default function Mapa() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
    }}>
      <Cabecalho xp={100} micoins={50} />

      <div style={{
        marginTop: '56px',
        marginBottom: '220px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className='titulo-fase'>
          <h1>Jardim do Início</h1>
          <p>O ponto de partida da jornada do mico. Um ambiente tranquilo e acolhedor.</p>
        </div>

        <div className='fases'>
          <MapaIlhas />
        </div>
      </div>
    </div>
  );
}