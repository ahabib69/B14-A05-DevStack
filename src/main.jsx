import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

import techData from "./data/technologies.json";

const gradient =
  "linear-gradient(135deg, #ff8a00 0%, #ff3d81 48%, #7c3aed 100%)";

// Navbar
function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="hamb" onClick={toggleMenu}>
          ☰
        </button>

        <a className="brand" href="#home">
          <span className="logo">⌬</span>

          <span>
            Dev<span>Stack</span>
          </span>
        </a>

        <div className={`links ${open ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="auth">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}


// Hero Section
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <div className="eyebrow">BUILD • LEARN • SHIP</div>

        <h1>
          Build your perfect <span>Dev Stack</span>
        </h1>

        <p>
          Discover the technologies that power modern products. Explore,
          compare, and assemble your own development stack in one place.
        </p>

        <div className="hero-actions">
          <a className="primary" href="#technologies">
            Explore Technologies →
          </a>

          <a className="secondary" href="#about">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-art">
        <div className="code-card">
          <div className="dots">● ● ●</div>

          <pre>
{`const stack = [
  "React",
  "Node.js",
  "MongoDB",
  "Docker"
];`}
          </pre>

          <div className="floating">
            ⚡ 12 technologies
          </div>
        </div>
      </div>
    </section>
  );
}


// Technology Card
function TechCard({ tech, selected, onAdd }) {
  return (
    <article className="card">
      <div className="card-top">
        <img src={tech.icon} alt={tech.name} />

        <span className="badge">
          {tech.badge}
        </span>
      </div>

      <h3>{tech.name}</h3>

      <p>{tech.description}</p>

      <div className="meta">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
      </div>

      <div className="card-bottom">
        <span className="rating">
          ★ {tech.rating}
        </span>

        <button
          disabled={selected}
          onClick={onAdd}
        >
          {selected ? "✓ Added to Stack" : "+ Add to Stack"}
        </button>
      </div>
    </article>
  );
}


// User Stack
function Stack({ stack, onRemove, onClear }) {
  return (
    <aside className="stack">
      <div className="stack-head">
        <div>
          <h2>Your Stack</h2>

          <p>
            {stack.length} Technology
            {stack.length === 1 ? "" : "ies"} Selected
          </p>
        </div>

        <span className="count">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">⌘</div>

          <h3>Your stack is empty</h3>

          <p>
            Add technologies from the list to start
            building your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((tech) => (
              <div
                className="stack-item"
                key={tech.id}
              >
                <img src={tech.icon} alt="" />

                <div>
                  <b>{tech.name}</b>
                  <small>{tech.category}</small>
                </div>

                <button onClick={() => onRemove(tech)}>
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            className="clear"
            onClick={onClear}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}


// Main Application
function App() {
  const [techs, setTechs] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load technologies
  useEffect(() => {
    const timer = setTimeout(() => {
      setTechs(techData);
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);


  // Add technology to stack
  const add = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };


  // Remove technology from stack
  const remove = (technology) => {
    setStack((currentStack) =>
      currentStack.filter(
        (item) => item.id !== technology.id
      )
    );

    toast.info(`${technology.name} removed.`);
  };


  // Clear the complete stack
  const clear = () => {
    if (!stack.length) {
      return;
    }

    setStack([]);

    toast.info("Your stack has been cleared.");
  };


  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <Hero />


        {/* Technology Library */}
        <section
          id="technologies"
          className="builder"
        >
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                TECHNOLOGY LIBRARY
              </div>

              <h2>Choose your technologies</h2>

              <p>
                Pick the tools you need and create a
                stack that matches your workflow.
              </p>
            </div>

            <div className="filter">
              {techs.length} technologies
            </div>
          </div>


          {loading ? (
            <div className="loading">
              <div className="spinner"></div>

              Loading technologies...
            </div>
          ) : (
            <div className="builder-grid">

              <div className="tech-grid">
                {techs.map((technology) => (
                  <TechCard
                    key={technology.id}
                    tech={technology}
                    selected={stack.some(
                      (item) => item.id === technology.id
                    )}
                    onAdd={() => add(technology)}
                  />
                ))}
              </div>

              <Stack
                stack={stack}
                onRemove={remove}
                onClear={clear}
              />

            </div>
          )}
        </section>


        {/* Projects Section */}
        <section
          id="projects"
          className="info"
        >
          <div>
            <div className="eyebrow">
              WHY DEVSTACK?
            </div>

            <h2>
              From idea to production, faster.
            </h2>
          </div>

          <p>
            Build a thoughtful stack by combining
            proven frontend, backend, database,
            language, styling, DevOps and
            collaboration tools.
          </p>
        </section>


        {/* About Section */}
        <section
          id="about"
          className="about"
        >
          <h2>
            Built for modern developers.
          </h2>

          <p>
            DevStack helps beginners understand the
            ecosystem and helps experienced developers
            quickly organize their favorite tools.
          </p>
        </section>

      </main>


      {/* Footer */}
      <footer id="contact">

        <div className="footer-brand">
          <div className="brand">
            <span className="logo">⌬</span>

            <span>
              Dev<span>Stack</span>
            </span>
          </div>

          <p>
            Build better. Ship faster. Learn continuously.
          </p>

          <div className="social">
            GitHub&nbsp;&nbsp; Twitter&nbsp;&nbsp; LinkedIn
          </div>
        </div>


        <div>
          <h4>Product</h4>

          <a>Technologies</a>
          <a>Projects</a>
          <a>Roadmap</a>
        </div>


        <div>
          <h4>Company</h4>

          <a>About</a>
          <a>Contact</a>
          <a>Careers</a>
        </div>


        <div>
          <h4>Legal</h4>

          <a>Privacy</a>
          <a>Terms</a>
          <a>Cookies</a>
        </div>


        <div className="copyright">
          © 2026 DevStack. All rights reserved.
        </div>

      </footer>


      <ToastContainer
        position="top-right"
        autoClose={1800}
      />
    </>
  );
}


// Render Application
createRoot(
  document.getElementById("root")
).render(<App />);