function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Vue.js',
    'Tailwind CSS',
    'Git',
    'GitHub',
  ]

  return (
    <section id="skills" className="skills-section">
      <p className="section-label">MY SKILLS</p>

      <h1>Skills</h1>

      <div className="skills-container">
        {skills.map((skill) => (
          <span className="skill-item" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills