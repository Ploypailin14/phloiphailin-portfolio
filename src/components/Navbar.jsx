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
    </nav>
  )
}

export default Navbar