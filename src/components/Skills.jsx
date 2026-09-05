function Skills() {
  const currentSkills = [
    {
      name: 'HTML',
      icon: 'fa-brands fa-html5',
      className: 'html',
    },
    {
      name: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      className: 'css',
    },
    {
      name: 'JavaScript',
      icon: 'fa-brands fa-js',
      className: 'javascript',
    },
    {
      name: 'React',
      icon: 'fa-brands fa-react',
      className: 'react',
    },
    {
      name: 'Vue.js',
      icon: 'fa-brands fa-vuejs',
      className: 'vue',
    },
    {
      name: 'Git',
      icon: 'fa-brands fa-git-alt',
      className: 'git',
    },
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      className: 'github',
    },
  ]

  const learningSkills = [
    {
      name: 'TypeScript',
      icon: 'fa-solid fa-code',
      className: 'typescript',
    },
    {
      name: 'Tailwind CSS',
      icon: 'fa-solid fa-wind',
      className: 'tailwind',
    },
    {
      name: 'Node.js',
      icon: 'fa-brands fa-node-js',
      className: 'node',
    },
    {
      name: 'PostgreSQL',
      icon: 'fa-solid fa-database',
      className: 'postgresql',
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
            className={`skill-card ${skill.className}`}
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
            className={`skill-card learning-card ${skill.className}`}
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