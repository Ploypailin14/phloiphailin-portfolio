function Skills() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Vue.js',
    'Tailwind CSS',
    'Bootstrap',
    'Node.js',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Figma',
  ]

  return (
    <section id="skills" className="skills-section">
      <p className="section-label">MY SKILLS</p>

      <h1>Skills</h1>
      {/*ใช้ map function เพื่อวนลูปผ่าน array ของ skills และสร้าง span สำหรับแต่ละ skill*/}
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