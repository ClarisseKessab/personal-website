import SliderSkills from '@/components/SliderSkills';
import CardService from '@/components/CardService';
import Accordeon from '@/components/Accordeon';
import CardProject from '@/components/CardProject';

export default function Home(){
  return(
    <>
    <div className="hero-section">
    <div className="blur-little-blue top-14"></div>
    <div className="elements-hero">
    <div className="texts-hero">
      <div className="icon-design-fire">💥</div>
      <div className="text-name-hero">Moi, c&apos;est Clarisse 👋</div>
      <h1 className="text-work-hero"><span className="green-high-text">Développeuse</span> Front-End basée à <span className="violet-text">Nantes</span></h1>
      <div className="texts-competences-hero">
        <h2 className="h2">Développement</h2>
        <p>✶</p>
        <h2 className="h2">UI Design</h2>
        <p>✶</p>
        <h2 className="h2">SEO</h2>
        </div>
        <div className="blur-big-green right bottom"></div>
    </div>
    <div className="btn-hero">
      <a href="/contact" className="btn-hero">Prenons un café</a>
    </div>
    </div>
    <div className="blur-little-violet top left"></div>
    </div>
    <div className="skills-section">
      <h2 className="h2">Compétences techniques pour des projets innovants et <span className="green-high-text">performants</span></h2>
      <div className="skills">
        <SliderSkills/>
      </div>
      </div>
      <div className="a-propos-section">
      <div className="blur-big-violet top right-5"></div>

        <Accordeon/>
      </div>
      <div className="services-section">
        <h2 className="h2 h2-service text-white">Une approche technique pour des <span className="green-high-text">projets web</span> créatifs</h2>
        <CardService/>
    <div className="blur-big-green top right-10"></div>

      </div>
      <div className="projets-section">
      <h2 className="h2 h2-service">D&apos;une idée à la réalité : Mes <span className="dark-blue-text">réalisations</span> digitales</h2>
      <CardProject limit={4} />

      </div>
      <div className="CTA">
      <div className="CTA-texts">
    <div className="blur-little-blue bottom left"></div>

        <h2 className="CTA-title text-black"><span className="green-high-text">Contactez-moi</span></h2>
        <p className="CTA-text">Une question, une opportunité ou simplement envie d’échanger ? 🚀</p>
      </div>
      <a className="btn btn-cta">Prenons contact</a>
      </div>
    </>
  );
}
