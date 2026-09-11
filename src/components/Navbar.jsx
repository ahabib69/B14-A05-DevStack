import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="hamb" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          ☰
        </button>

        <a className="brand" href="#home">
          <span className="logo">⌬</span>
          <span>
            Dev<span>Stack</span>
          </span>
        </a>

        <div className={'links ' + (open ? 'show' : '')}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#technologies" onClick={() => setOpen(false)}>Technologies</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>

        <div className="auth">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
