function Hero({name, role}) {
  return (
    <section className="hero">

      <h1>{name}</h1>
      <h2>{role}</h2>

      <p className="hero-description">
        Computer Engineering student at Mae Fah Luang University
      </p>

      <a className="#projects" className="hero-button">View My Projects</a>
    </section>
  )
}

export default Hero