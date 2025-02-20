import CardProject from "@/components/CardProject";

export default function ProjetsPage() {
  return (
    <div>
      <h1 className="projets-title">Mes Projets</h1>
      <div className="blur-little-green "></div>
      <div className="blur-big-blue top right-10"></div>
      <CardProject limit={4} />

    </div>
  );
}
