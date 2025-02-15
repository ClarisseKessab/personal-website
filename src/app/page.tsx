import SliderSkills from '@/components/SliderSkills';
import CardService from '@/components/CardService';

export default function Home(){
  return(
    <>
    <div className="hero-section">
    <div className="elements-hero">
    <div className="texts-hero">
      <div className="text-name-hero">Moi, cest Clarisse 👋</div>
      <h1 className="text-work-hero"><span className="green-high-text">Développeuse</span> Front-End basée à <span className="violet-text">Nantes</span></h1>
      <div className="texts-competences-hero">
        <h2>Développement</h2>
        <p>✶</p>
        <h2>UI Design</h2>
        <p>✶</p>
        <h2>SEO</h2>
        </div>
    </div>
    <div className="btn-hero">
      <a href="/contact" className="btn-hero">Prenons un café</a>
    </div>
    </div>
    </div>
    <div className="skills-section">
      <h2 className="h2-title">Compétences techniques pour des projets innovants et performants</h2>
      <div className="skills">
        <SliderSkills/>
      </div>
      <div className="services-section">
        <h2 className="h2-title">Mes services</h2>
        <CardService/>
      </div>
    </div>
    </>
  );
}
