function Hero({ name, role }) {
  return (
    <section id="home" className="hero">

      {/* Left Side */}
      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1 className="hero-name">
          {name}
        </h1>

        <div className="hero-role">
          <span className="role-dot"></span>
          {role}
        </div>

        <p className="hero-description">
            Computer Engineering student at Mae Fah Luang University
            passionate about Front-end Development.I enjoy building modern and user-friendly web applications.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="hero-button">
            View My Projects
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-contact-button">
            Contact Me
            <span>✉</span>
          </a>

        </div>

      </div>


      {/* Right Side */}
      <div className="hero-visual">

        {/* Glow */}
        <div className="hero-glow"></div>

        {/* Decorative Ring */}
        <div className="hero-ring hero-ring-1"></div>
        <div className="hero-ring hero-ring-2"></div>
        <div className="hero-ring hero-ring-3"></div>

        {/* Floating Code Card */}
        <div className="code-card">

          <div className="code-icon">
            &lt;/&gt;
          </div>

          <h3>Turning ideas</h3>
          <p>into real code</p>
          <span>one line at a time.</span>

          <div className="code-line"></div>

          <div className="tech-mini">
            <span>React</span>
            <span>Vue</span>
            <span>JS</span>
          </div>

        </div>


        {/* Currently Working Card */}
        <div className="working-card">

          <p className="working-label">
            Currently Working On
          </p>

          <h3>
            Temporary Room
            <br />
            Reservation System
          </h3>

          <p className="working-tech">
            Vue.js · Node.js · PostgreSQL
          </p>

          <div className="progress-container">
            <div className="progress-bar"></div>
            <span>75%</span>
          </div>

        </div>


        {/* Decorative Cubes */}
        <div className="cube cube-1"></div>
        <div className="cube cube-2"></div>

        {/* Small particles */}
        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>

      </div>

    </section>
  )
}

export default Hero