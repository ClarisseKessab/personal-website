import Link from "next/link"; // Importation du composant Link
import projects from "@/data/projects.json";
import CardProject from "@/components/CardProject";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Réalisations | Clarisse Dev",
  description: "Découvrez mes réalisations en tant que freelance front-end et intégratrice web : projets responsives, optimisés SEO et au design UI soigné. Développement sur-mesure avec performance et accessibilité en priorité.",
};

export default function ProjectList() {
  return (
    <>
      <div className="title-page">
        <h1>Mes Projets</h1>
        <p>
          Voici une sélection de mes projets récents, réalisés pour répondre
          à des besoins spécifiques avec une approche orientée utilisateur. Chaque
          projet combine design soigné, développement technique et solutions adaptées,
          que ce soit pour des sites web, des applications mobiles ou des interfaces.
          Parcourez ces réalisations pour découvrir mon travail et les technologies utilisées.
        </p>
      </div>
      <div className="blur blur-medium blur-violet" style={{ top: '200px', right: '100px' }} />
      <div className="blur blur-small blur-green" style={{ top: '300px', right: '400px' }} />
      <div className="blur blur-big blur-blue" style={{ top: '300px', left: '0' }} />
      <div className="blur blur-medium blur-blue" style={{ top: '1000px', right: '100px' }} />

      <div className="cards-projet proche">
        {projects.map((project) => (
          <Link key={project.id} href={`/projets/${project.slug}`} passHref>
              <CardProject
                title={project.title}
                descard={project.descard}
                image={project.image}
                emoji={
                  project.tags.includes("Application Mobile")
                    ? "📱"
                    : project.tags.includes("Design UI")
                    ? "🎨"
                    : "💻"
                }
                tags={project.tags}
              />
          </Link>
        ))}
      </div>
      <div className="section-cta">
        <div className="cta-card">
          <h2>Envie de donner vie à votre projet ? 🚀</h2>
          <p>Un café virtuel pour en discuter, ça vous tente ?</p>
          <a href="/contact" className="btn-primary">Prendre rendez-vous</a>
        </div>
    </div>
    </>
  );
}
