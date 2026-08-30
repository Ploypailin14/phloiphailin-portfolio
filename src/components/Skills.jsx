function Skills() {
  const currentSkills = [
    {
      name: 'HTML',
      icon: 'fa-brands fa-html5',
    },
    {
      name: 'CSS',
      icon: 'fa-brands fa-css3-alt',
    },
    {
      name: 'JavaScript',
      icon: 'fa-brands fa-js',
    },
    {
      name: 'React',
      icon: 'fa-brands fa-react',
    },
    {
      name: 'Vue.js',
      icon: 'fa-brands fa-vuejs',
    },
    {
      name: 'Git',
      icon: 'fa-brands fa-git-alt',
    },
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
    },
  ]

  const learningSkills = [
    {
      name: 'TypeScript',
      icon: 'fa-solid fa-code',
    },
    {
      name: 'Tailwind CSS',
      icon: 'fa-solid fa-wind',
    },
    {
      name: 'Node.js',
      icon: 'fa-brands fa-node-js',
    },
    {
      name: 'PostgreSQL',
      icon: 'fa-solid fa-database',
    },
  ]

  return (
    <section id="skills" className="skills-section">

      {/* Header */}
      <div className="skills-header">
        <p className="section-label">MY SKILLS</p>

        <h1>
          My technical
          <span>toolkit.</span>
        </h1>
      </div>


      {/* Currently Using */}
      <div className="skills-group">

        <div className="skills-group-title">
          <span className="title-line"></span>
          <h2>Currently Using</h2>
        </div>

        <div className="skills-container">

          {currentSkills.map((skill) => (
            <div
              className="skill-card"
              key={skill.name}
              title={skill.name}
            >
              <i className={skill.icon}></i>

              <span>{skill.name}</span>
            </div>
          ))}

        </div>

      </div>


      {/* Currently Learning */}
      <div className="skills-group">

        <div className="skills-group-title">
          <span className="title-line"></span>
          <h2>Currently Learning</h2>
        </div>

        <div className="skills-container">

          {learningSkills.map((skill) => (
            <div
              className="skill-card learning-card"
              key={skill.name}
              title={skill.name}
            >
              <i className={skill.icon}></i>

              <span>{skill.name}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills