export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-brand">
        <div className="brand">
          <span className="logo">⌬</span>
          <span>
            Dev<span>Stack</span>
          </span>
        </div>
        <p>Build better. Ship faster. Learn continuously.</p>
        <div className="social">GitHub&nbsp;&nbsp; Twitter&nbsp;&nbsp; LinkedIn</div>
      </div>

      <div>
        <h4>Product</h4>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#">Roadmap</a>
      </div>

      <div>
        <h4>Company</h4>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#">Careers</a>
      </div>

      <div>
        <h4>Legal</h4>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>

      <div className="copyright">© 2026 DevStack. All rights reserved.</div>
    </footer>
  )
}
