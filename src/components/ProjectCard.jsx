function ProjectCard({ title, description, tech, github }) {
  return (
    <article className="project-card">
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="project-tech">
        {tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          GitHub
        </a>
      )}
    </article>
  )
}

export default ProjectCard