function Skills() {
  const currentSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Vue.js',
    'Git',
    'GitHub',
  ]

  const learningSkills = [
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
  ]

  return (
    <section id="skills" className="skills-section">
      <p className="section-label">MY SKILLS</p>

      <h1>Skills</h1>

      {/*ใช้ map function เพื่อวนลูปผ่าน array ของ skills และสร้าง span สำหรับแต่ละ skill*/}
      <div className="skills-group">
        <h2>Currently Using</h2>

        <div className="skills-container">
          {currentSkills.map((skill) => (
            <span className="skill-item" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

       <div className="skills-group">
        <h2>Currently Learning</h2>

        <div className="skills-container">
          {learningSkills.map((skill) => (
            <span className="skill-item" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills