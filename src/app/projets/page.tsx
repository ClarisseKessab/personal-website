import CardProject from "@/components/CardProject";

export default function ProjetsPage() {
  return (
    <div>
      <h1 className="projets-title">Mes Projets</h1>
      <CardProject limit={4} />
    </div>
  );
}
