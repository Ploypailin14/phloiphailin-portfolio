function Navbar() {
  return (
    <nav className="navbar">
        <h2 className="logo">Phloiphailin</h2>
        {/* สามารถเลื่อนไปยัง section ต่าง ๆ ของหน้าเว็บได้โดยใช้ anchor link */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
        <a className="nav-icon" href="https://github.com/Ploypailin14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa-brands fa-github" />
        </a>
        <a className="nav-icon" href="mailto:ploypailinkumpook@gmail.com" aria-label="Email">
          <i className="fa-regular fa-envelope" />
        </a>
        <a className="nav-cta" href="#contact">Let's Connect <span>↗</span></a>
      </div>
    </nav>
  )
}

export default Navbar