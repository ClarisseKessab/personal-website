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
            <a href={`/projects/${project.slug}`} className="card-project" key={project.id}>
              <img src={project.image} alt={`Presentation ${project.title}`} className="image-card-projet" />
              <div className="card-project-texts">
                <h3 className="card-projet-title">{project.title}</h3>
                <div className="card-project-tags">
                {project.tags.map((tag) => (
                  <div className="card-project-tag" key={project.id}>{tag}</div>
                  ))}

              </div>
              </div>
            </a>
          </>
        ))}
      </div>
    </>
  );

}
