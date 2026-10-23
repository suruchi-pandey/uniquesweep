
import "./App.css";

const games = [
  { name: "Milkyway", url: "https://milkywayapp.xyz/", emoji: "🌌" },
  { name: "Juwa", url: "https://dl.juwa777.com/", emoji: "👑" },
  { name: "Juwa 2.0", url: "https://m.juwa2.com/", emoji: "✨" },
  { name: "Gamevault", url: "https://download.gamevault999.com/", emoji: "🔐" },
  { name: "Orionstar", url: "http://start.orionstars.vip:8580/index.html", emoji: "⭐" },
  { name: "Game Room", url: "https://www.gameroom777.com/", emoji: "🕹️" },
  { name: "Vesgasweep", url: "http://m.lasvegassweeps.com/", emoji: "🎰" },
  { name: "Vblink", url: "http://www.vblink777.club/", emoji: "💎" },
  { name: "Firekirin", url: "https://firekirin.com/", emoji: "🐉" },
  { name: "Panda Master", url: "https://pandamaster.vip:8888/index.html", emoji: "🐼" },
];

const brands = [
  {
    name: "Universal Play Network",
    url: "https://www.facebook.com/profile.php?id=61580350351730",
  },
  {
    name: "Hazel Gaming",
    url: "https://www.facebook.com/profile.php?id=100077284421726",
  },
  {
    name: "Winvibe Playroom",
    url: "https://www.facebook.com/profile.php?id=61595038727413",
  },
  {
    name: "Royal Hub",
    url: "https://www.facebook.com/profile.php?id=61587514530322",
  },
];

function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="logo-mark">
          <span className="crown">♛</span>
          <span>US</span>
        </div>

        <p className="eyebrow">WELCOME TO</p>
        <h1>Unique<span>Sweep</span></h1>
        <p className="hero-subtitle">
          Your favorite games, all in one place.
        </p>

        <div className="trust-quote">
          <span className="quote-mark">“</span>
          <p>Your choice. Your experience. Your game time.</p>
          <span className="quote-caption">
            Explore your favorite games in one convenient place.
          </span>
        </div>
      </header>

      <section className="games-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR GAME DIRECTORY</p>
            <h2>Choose Your Game</h2>
          </div>
          <span className="game-count">🎮 10 games</span>
        </div>

        <div className="games-grid">
          {games.map((game) => (
            <a
              className="game-card"
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              key={game.name}
            >
              <div className="game-art">
                <span className="game-icon">{game.emoji}</span>
              </div>
              <span className="game-name">{game.name}</span>
              <span className="open-game">
                Open Game <span>→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="facebook-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STAY CONNECTED</p>
            <h2>Connect With Us</h2>
            <p className="section-description">
              Find your brand on Facebook.
            </p>
          </div>
        </div>

        <div className="brands-list">
          {brands.map((brand) => (
            <a
              className="brand-card"
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              key={brand.name}
            >
              <span className="facebook-icon">f</span>
              <span className="brand-name">{brand.name}</span>
              <span className="brand-arrow">›</span>
            </a>
          ))}
        </div>
      </section>

      <section className="payments-section">
        <p className="eyebrow">CONVENIENT PAYMENT OPTIONS</p>
        <h2>Payment Methods</h2>
        <p className="payment-description">
          Available payment methods may vary by gaming platform.
        </p>

        <div className="payment-grid">
          <div className="payment-badge chime">
            <span className="payment-symbol">✳</span>
            <span>Chime</span>
          </div>

          <div className="payment-badge cashapp">
            <span className="payment-symbol">$</span>
            <span>Cash App</span>
          </div>

          <div className="payment-badge venmo">
            <span className="payment-symbol">V</span>
            <span>Venmo</span>
          </div>

          <div className="payment-badge paypay">
            <span className="payment-symbol">P</span>
            <span>PayPal</span>
          </div>

          <div className="payment-badge applepay">
            <span className="payment-symbol">●</span>
            <span>Apple Pay</span>
          </div>

          <div className="payment-badge googlepay">
            <span className="payment-symbol">G</span>
            <span>Google Pay</span>
          </div>

          <div className="payment-badge cards">
            <span className="payment-symbol">▤</span>
            <span>Debit / Credit Cards</span>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-logo">US</span>
          <strong>Unique<span>Sweep</span></strong>
        </div>
        <span>One place for your favorite game links.</span>
        <small>
          Game links lead to external websites. Please use them responsibly
          and check each platform's terms and local laws.
        </small>
      </footer>
    </main>
  );
}

export default App;
