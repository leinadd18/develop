export default function Cabecalho({ xp, micoins }) {
  return (
    <header className="top-header">
      <div className="xp">
        <img src="/icons/xp-icon.svg" alt="XP" />
        <span>{xp}</span>
      </div>
      <div className="micoins">
        <img src="/icons/micoin-icon.svg" alt="MiCoins" />
        <span>{micoins}</span>
      </div>
    </header>
  );
}