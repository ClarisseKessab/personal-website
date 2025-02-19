import CardProject from "@/components/CardProject";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="projet-title">Mes Projets</h1>
      <CardProject limit={4} />
    </div>
  );
}
