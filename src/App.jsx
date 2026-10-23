
import { useState } from "react";
import "./App.css";

const brands = [
  {
    name: "Universal Play Network",
    initials: "UP",
    facebook: "https://www.facebook.com/profile.php?id=61580350351730",
  },
  {
    name: "Hazel Gaming",
    initials: "HG",
    facebook: "https://www.facebook.com/profile.php?id=100077284421726",
  },
  {
    name: "Winvibe Playroom",
    initials: "WP",
    facebook: "https://www.facebook.com/profile.php?id=61595038727413",
  },
  {
    name: "Royal Hub",
    initials: "RH",
    facebook: "https://www.facebook.com/profile.php?id=61587514530322",
  },
];

const games = [
  { name: "Milkyway", icon: "🌌", url: "https://milkywayapp.xyz/" },
  { name: "Juwa", icon: "🎮", url: "https://dl.juwa777.com/" },
  { name: "Juwa 2.0", icon: "✨", url: "https://m.juwa2.com/" },
  { name: "Gamevault", icon: "🔐", url: "https://download.gamevault999.com/" },
  { name: "Orionstar", icon: "🌠", url: "http://start.orionstars.vip:8580/index.html" },
  { name: "Game Room", icon: "🕹️", url: "https://www.gameroom777.com/" },
  { name: "Vesgasweep", icon: "🎰", url: "http://m.lasvegassweeps.com/" },
  { name: "Vblink", icon: "💎", url: "http://www.vblink777.club/" },
  { name: "Firekirin", icon: "🔥", url: "https://firekirin.com/" },
  { name: "Panda Master", icon: "🐼", url: "https://pandamaster.vip:8888/index.html" },
];

function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const brand = brands.find((item) => item.name === selectedBrand);

  return (
    <main className="site">
      <header className="topbar">
        <button
          className="logo"
          onClick={() => setSelectedBrand(null)}
          aria-label="Return to UniqueSweep home"
        >
          <span className="logo-icon">U</span>
          <span>UNIQUE<span className="purple">SWEEP</span></span>
        </button>
        <span className="status">
          <span className="status-dot" /> GAME DIRECTORY
        </span>
      </header>

      <section className="hero">
        <div className="eyebrow">YOUR GAMES, ALL IN ONE PLACE</div>
        <h1>Find Your <span className="gradient">Game Zone.</span></h1>
        <p>Choose your community to explore its available game platforms.</p>
      </section>

      {!brand ? (
        <section className="content">
          <div className="section-heading">
            <div>
              <h2>Choose Your Brand</h2>
              <p>Select the community you want to visit.</p>
            </div>
            <span className="count">04 BRANDS</span>
          </div>

          <div className="brand-grid">
            {brands.map((item, index) => (
              <button
                className="brand-card"
                key={item.name}
                onClick={() => setSelectedBrand(item.name)}
              >
                <span className={`brand-symbol symbol-${index}`}>
                  {item.initials}
                </span>
                <span className="brand-name">{item.name}</span>
                <span className="brand-action">
                  Explore platforms <span>↗</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="content">
          <button
            className="back-button"
            onClick={() => setSelectedBrand(null)}
          >
            ← All brands
          </button>

          <div className="selected-brand">
            <div className="selected-icon">{brand.initials}</div>
            <div>
              <div className="eyebrow">WELCOME TO</div>
              <h2>{brand.name}</h2>
              <p>Choose a platform below to continue.</p>
            </div>
          </div>

          <div className="section-heading">
            <div>
              <h2>Game Platforms</h2>
              <p>Select a card to open its external website.</p>
            </div>
            <span className="count">10 PLATFORMS</span>
          </div>

          <div className="game-grid">
            {games.map((game, index) => (
              <a
                className="game-card"
                href={game.url}
                key={game.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={`game-icon game-${index}`}>{game.icon}</span>
                <span className="game-info">
                  <strong>{game.name}</strong>
                  <small>Open platform ↗</small>
                </span>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>

          <a
            className="contact-button"
            href={brand.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="facebook-mark">f</span>
            Visit {brand.name} on Facebook ↗
          </a>
        </section>
      )}

      <footer>
        <button className="footer-logo" onClick={() => setSelectedBrand(null)}>
          UNIQUESWEEP
        </button>
        <p>One directory. Four communities.</p>
        <small>
          External platforms are operated by their respective providers.
        </small>
      </footer>
    </main>
  );
}

export default App;
