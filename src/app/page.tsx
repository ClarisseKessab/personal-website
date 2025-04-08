"use client"

import SliderSkills from "@/components/SliderSkills";
import Image from "next/image";
import useDarkMode from "@/hooks/useDarkMode";
import CardService from "@/components/CardService";
import CardProject from "@/components/CardProject";
import projects from "@/data/projects.json";
import Accordeon from "@/components/Accordeon";
import CardReview from "@/components/CardReview";
import Link from "next/link";


export default function Home() {
  const { isDark } = useDarkMode();

  return (
    <>
      <div className="section-hero">
        <div className="blur blur-small blur-blue" style={{ top: '10', left: '0' }} />
        <div className="blur blur-big blur-violet" style={{ bottom: '100', right: '0' }} />
        <div className="content-hero">
          <div className="texts-hero">
            <div className="text-hero">
              <h3>Moi c’est Clarisse 👋</h3>
            </div>
            <div className="work-hero">
              <h1><span className="highlight-green">Développeuse</span> web 💥 basée sur <span className="text-violet">Nantes</span></h1>
              <h3>UI Design ✶ Développement ✶ SEO</h3>
            </div>
          </div>
          <a className="btn-primary">Prenons un café ensemble</a>
        </div>
      </div>

      <div className="section-slider">
        <SliderSkills />
      </div>

      <div className="section-who">
        <div className="blur blur-big blur-blue" style={{ bottom: '50', right: '0' }} />
        <div className="blur blur-small blur-green" style={{ bottom: '10', right: '10' }} />
        <div className="who-content">
          <Image
            src="/developpeur.png"
            alt="Description de l'image"
            width={400}
            height={400}
            style={{ width: '30vw', height: 'auto' }}
          />
          <div className="who-text">
            <h2>Qui suis-je ❓</h2>
            <p>Moi c’est Clarisse — freelance web à mi-chemin entre le design et le développement. Je conçois des sites vitrines modernes, clairs et responsives sur Webflow, WordPress ou même en HTML/CSS/JS. Mon objectif ? Créer un site qui vous ressemble, fluide, élégant, et surtout simple à gérer — sans jargon, ni usine à gaz. Vous avez une idée, un projet, une envie ? Je vous aide à le mettre en ligne, tout simplement.</p>
          </div>
        </div>
      </div>

      <div className="section-services">
      <div className="blur blur-small blur-violet" style={{ top: '500', left: '500px' }} />
        <div className="services-title">
          <h2>Ce que je <span className="text-violet">peux</span> faire pour <span className="highlight-green">vous</span> 💻</h2>
          <p>Je vous accompagne dans la création de votre site vitrine, que vous partiez de zéro ou que vous ayez déjà une idée en tête. Voici ce que je propose 👇</p>
        </div>
        <div className="cards-service">
          <CardService iconLight="/icon-services/light/ui.png" iconDark="/icon-services/dark/ui.png" alt="UI Design" title="Design d’interface (UI)" description="🎨 Pour un site qui donne envie au premier coup d’œil. Un design clair, moderne et responsive qui valorise votre contenu et facilite la navigation." isDark={isDark}/>
          <div className="blur blur-medium blur-green" style={{ top: '300', left: '100px' }} />
          <CardService iconLight="/icon-services/light/dev.png" iconDark="/icon-services/dark/dev.png" alt="Développement" title="Création de site vitrine" description="🧱 Pour une présence en ligne professionnelle et bien structurée. Site réalisé sur Webflow ou WordPress, optimisé, responsive et facile à gérer." isDark={isDark}/>
          <div className="blur blur-big blur-blue" style={{ bottom: '10', right: '200px' }} />

          <CardService iconLight="/icon-services/light/seo.png" iconDark="/icon-services/dark/seo.png" alt="Optimisation SEO" title="Optimisation SEO" description="🚀 Pour que votre site ne passe pas inaperçu. Structure, vitesse et visibilité : tout ce qu’il faut pour plaire à vos visiteurs… et à Google." isDark={isDark}/>


        </div>
      </div>

      {/* Projets */}
      <div className="section-projets">
        <div className="section-projets-content">
          <div className="section-projets-texts">
            <h2>Mes dernières <span className="highlight-green">réalisations</span> 👀</h2>
            <p>Sites vitrine, interfaces soignées, navigation fluide… Voici quelques projets sur lesquels j’ai travaillé, avec toujours le même objectif : créer une expérience simple, efficace et adaptée à chaque client.</p>
          </div>

          <div className="cards-projet">
          <div className="blur blur-big blur-violet" style={{ top: '100', left: '0' }} />

          {projects.slice(0, 3).map((project) => (
          <Link key={project.id} href={`/projets/${project.slug}`} passHref>
          <CardProject
            key={project.id}
            title={project.title}
            descard={project.descard}
            image={project.image}
            emoji={project.tags.includes("Application Mobile") ? "📱" : project.tags.includes("Design UI") ? "🎨" : "💻"}
            tags={project.tags}
          />
          </Link>
        ))}
          </div>
        </div>
      </div>
      <div className="section-accordeon">
      <div className="blur blur-big blur-violet" style={{ top: '100', left: '0' }} />
      <div className="blur blur-medium blur-green" style={{ top: '500px', left: '0' }} />
      <div className="blur blur-medium blur-blue" style={{ top: '3500px', left: '100px' }} />
      <div className="blur blur-medium blur-blue" style={{ top: '3700px', left: '400px' }} />
      <div className="blur blur-medium blur-green" style={{ top: '3500px', left: '1000px' }} />
      <div className="blur blur-small blur-violet" style={{ top: '200px', right: '100px' }} />
      <div className="blur blur-big blur-blue" style={{ top: '900px', left: '0' }} />


        <Accordeon/>


      </div>
      <div className="section-avis">
        <div className="section-avis-content">
          <div className="section-avis-title">
            <h2>Ils <span className="text-violet">m&apos;ont</span> fait <span className="highlight-green">confiance</span> 🚀</h2>
            <p>Voici quelques retours d’expérience de mes clients. Leur satisfaction est ma plus belle récompense !</p>
          </div>
          <div className="cards-avis">
          <CardReview
          clientName="Yannick.S - Agence Électron Libre"
          review="Clarisse a fait un excellent travail sur notre site web. Tout au long du projet, elle s'est montrée serviable, réactive, efficace et professionnelle. Je recommande sans hésiter !"
          rating={5}
          />
          <CardReview
          clientName="Mathieu.L"
          review="J’ai eu le plaisir de travailler avec Clarisse sur la création de la plateforme Taste Explorers (Ruby on Rails/architecture MVC). Son expertise en développement front-end, intégration web et UX design a été un véritable atout pour le projet. Si vous cherchez une développeuse front-end engagée et passionnée par l'expérience utilisateur, je la recommande vivement !"
          rating={5}
          />
          <CardReview
          clientName="Guillaume.A"
          review="J’ai travaillé avec Clarisse sur deux projets : Skybnb et Taste Explorers.
Elle a assuré toute la partie design et intégration front (HTML, CSS, Rails), avec beaucoup de rigueur et un vrai souci du détail.
Travailler avec elle a été super fluide — je recommande sans hésiter !"
          rating={5}
          />
          </div>
        </div>
      </div>
      <div className="blur blur-big blur-violet" style={{ top: '800px', right: '100px' }} />
      <div className="blur blur-medium blur-blue" style={{ top: '100px', right: '10px' }} />


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
