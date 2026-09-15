function ProjectCard({ title, description, tech, image, github }) {
  return (
    <article className="project-card">

      {/* Project image */}
      <div className="project-preview">
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="project-image"
          />
        ) : (
          <div className="project-placeholder">
            <span>&lt;/&gt;</span>
          </div>
        )}
      </div>

      {/* Project information */}
      <div className="project-info">
        <h2>{title}</h2>

        <p className="project-description">
          {description}
        </p>

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
            View Project →
          </a>
        )}
      </div>

    </article>
  )
}

export default ProjectCard
