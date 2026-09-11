function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-icon-box"><i className="fa-regular fa-user" /></div>

      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a Computer Engineering student at Mae Fah Luang University with a passion for
          Front-end Development and UI/UX Design.
        </p>
        <p>
          I enjoy turning ideas into modern and user-friendly
          web applications. I'm continuously learning new
          technologies and improving my development skills.
        </p>
      </div>

      <div className="about-stats">
        <div className="about-stat">
          <i className="fa-solid fa-graduation-cap" />
          <strong>4th Year</strong>
          <span>Computer Engineering<br />MFU</span>
        </div>
        <div className="about-stat">
          <i className="fa-solid fa-code" />
          <strong>Projects</strong>
          <span>Web &amp; Application<br />Development</span>
        </div>
        <div className="about-stat">
          <i className="fa-solid fa-rocket" />
          <strong>Always</strong>
          <span>Learning<br />New Things</span>
        </div>
      </div>
    </section>
  )
}

export default About