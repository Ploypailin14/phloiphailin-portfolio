function Hero({name, role}) {
  return (
    <section id="home" className="hero">

      <h1>{name}</h1>
      <h2>{role}</h2>

      <p className="hero-description">
        Computer Science student at Mae Fah Luang University
        passionate about Front-end Development and UI/UX Design.
        I enjoy building modern and user-friendly web applications.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="hero-button">
          View My Projects
        </a>

        <a
          href="https://github.com/Ploypailin14"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-github-button"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
 
export default Hero