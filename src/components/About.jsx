function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-header">
        <p className="section-label">ABOUT ME</p>

        <h1>
          Get to know me
          <span>beyond the code.</span>
        </h1>
      </div>


      <div className="about-container">

        {/* Left Side */}
        <div className="about-visual">

          <div className="about-glow"></div>

          <div className="about-card">

            <div className="about-code">
              &lt;/&gt;
            </div>

            <h2>Computer Engineering</h2>

            <p>
              Student
            </p>

            <div className="about-line"></div>

            <div className="about-tech">
              <span>Frontend</span>
              <span>UI/UX</span>
              <span>Web</span>
            </div>

          </div>

        </div>


        {/* Right Side */}
        <div className="about-content">

          <p className="about-intro">
            Hello! I'm <strong>Phloiphailin</strong>.
          </p>

          <p>
            I'm a Computer Engineering student at Mae Fah Luang
            University who is interested in Front-end Development
            and UI/UX Design.
          </p>

          <p>
            I enjoy turning ideas into modern and user-friendly
            web applications. I'm continuously learning new
            technologies and improving my development skills.
          </p>

          <div className="about-buttons">

            <a
              href="https://github.com/Ploypailin14"
              target="_blank"
              rel="noopener noreferrer"
              className="about-button"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About