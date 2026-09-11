export default function Hero({ techCount }) {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <div className="eyebrow">BUILD • LEARN • SHIP</div>
        <h1>
          Build your perfect <span>Dev Stack</span>
        </h1>
        <p>
          Discover the technologies that power modern products. Explore, compare, and assemble
          your own development stack in one place.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#technologies">Explore Technologies →</a>
          <a className="secondary" href="#about">Learn More</a>
        </div>
      </div>

      <div className="hero-art">
        <div className="code-card">
          <div className="dots">● ● ●</div>
          <pre>{`const stack = [\n  "React",\n  "Node.js",\n  "MongoDB",\n  "Docker"\n];`}</pre>
          <div className="floating">⚡ {techCount} technologies</div>
        </div>
      </div>
    </section>
  )
}
