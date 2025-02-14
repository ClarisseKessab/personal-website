import SliderSkills from '@/components/SliderSkills';

export default function Home(){
  return(
    <>
    <div className="hero-section">
    <div className="elements-hero">
    <div className="texts-hero">
      <div className="text-name-hero">Moi, cest Clarisse 👋</div>
      <h1 className="text-work-hero">Développeuse Front-End basée à Nantes</h1>
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
      <h2 className="skill-title">Compétences techniques pour des projets innovants et performants</h2>
      <div className="skills">
        <SliderSkills/>
      </div>
    </div>
    </>
  );
}
