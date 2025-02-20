import projects from "@/data/projects.json";

type CardProjectProps = {
  limit?: number;
};

export default function CardProject({ limit }: CardProjectProps) {

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return(
    <>
      <div className="cards-project">
        {displayedProjects.map((project) => (
          <>
            <a href={`/projets/${project.slug}`} className="card-project" key={project.id}>
            <div className="container-image-card-project">
            <div className="card-project-tags">
                {project.tags.map((tag) => (
                  <span className="card-project-tag" key={project.id}>{tag}</span>
                  ))}
              </div>
              <img src={project.image} alt={`Presentation ${project.title}`} className="image-card-projet" />
            </div>
              <div className="card-project-texts">
                <span className="type-card-project">{project.type}</span>
                <h3 className="card-projet-title">{project.title}</h3>
                <p>{project.descard}</p>
              </div>
            </a>
          </>
        ))}
      </div>
    </>
  );

}
