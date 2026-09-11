function ProjectCard({ title, description, tech, github }) {
  return (
    <article className="project-card">

      {/* Project Preview */}
      <div className="project-preview">
        <div className="preview-window">

          <div className="preview-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="preview-content">
            <div className="preview-sidebar">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="preview-main">
              <div className="preview-heading"></div>

              <div className="preview-cards">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="preview-line"></div>
              <div className="preview-line short"></div>
            </div>
          </div>

        </div>
      </div>


      {/* Project Information */}
      <div className="project-info">

        <div className="project-header">

          <h2>{title}</h2>

          <span className="project-status">
            Featured
          </span>

        </div>


        <p className="project-description">
          {description}
        </p>


        {/* Technologies */}
        <div className="project-tech">
          {tech.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}
        </div>


        {/* GitHub */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
            <span>→</span>
          </a>
        )}

      </div>

    </article>
  )
}

export default ProjectCard