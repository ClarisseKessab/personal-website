import CardProject from "@/components/CardProject";

export default function ProjetsPage() {
  return (
    <div>
      <div className="projets-texte">
        <h1 className="projets-title">Mes Projets</h1>
        <p>Nous transformons des idées en réalisations concrètes, alliant créativité et innovation. Explorez notre portfolio et imaginez ce que nous pouvons accomplir ensemble !</p>
      </div>
      <div className="blur-little-green "></div>
      <div className="blur-big-blue top right-10"></div>
      <CardProject limit={4} />

    </div>
  );
}
