import projects from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Mes Projets</h1>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.id} className="border p-4 mb-2">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
            <a href={`/projects/${project.slug}`} className="text-blue-500">
              Voir le projet
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
