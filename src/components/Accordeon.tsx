"use client"

import { useState } from 'react';

interface Section {
  title: string;
  content: string;
  imageUrl: string;
  button: string;

}

const sections: Section[] = [
  {
    "title": "Qui suis-je ?",
    "content": "💡 Passionnée par le design et le développement web, j’allie créativité et technique pour donner vie à des expériences uniques.\n\n🎨💻 Développeuse Fullstack & UI Designer, je conçois des interfaces modernes, performantes et engageantes.\n\n🚀 Toujours en quête d’apprentissage, j’aime relever de nouveaux défis et explorer les dernières innovations du web.\n\n🌟 On dit de moi :\n✔️ Créative & Rigoureuse – J’allie esthétique et performance\n✔️ Curieuse & Ambitieuse – Toujours prête à apprendre et progresser\n✔️ Dynamique & Passionnée – Impossible de s’ennuyer avec moi !",
    "imageUrl": "assets/accordeon/developpeur.png",
    "button": "En savoir plus"
  },
  {
    "title": "Expériences",
    "content": "🎯 De la gestion de projet au développement, j’ai exploré plusieurs facettes du digital.\n\n🚀 Développement Web :\n- Création de 2 applications en Ruby on Rails & JavaScript\n- Optimisation de sites WordPress & Shopify\n\n💼 Gestion de projet :\n- 2 ans et demi en alternance\n- SEO & amélioration des performances\n- Création et refonte de sites\n- Accompagnement et relation client\n\n💻 Freelance :\n- Projets variés, adaptation et gestion des deadlines\n- Solutions sur-mesure selon les besoins clients",
    "imageUrl": "assets/accordeon/experience.png",
    "button": "Une nouvelle aventure ?"
  },
  {
    "title": "Études",
    "content": "📚 Un parcours hybride mêlant design, UI/UX et développement web.\n\n💻 Campus Academy – Premières bases en développement\n🎨 Webstart & MJM Graphics Design – Infographie & Webdesign\n🖥️ ECV Digital – Spécialisation UI/UX\n🚀 Le Wagon – Développement Fullstack (Bac+3)\n\nUn mix parfait entre créativité et technique !",
    "imageUrl": "assets/accordeon/etudes.png",
    "button": "Des questions ?"
  }
]

;

const Accordeon: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(sections[0]);

  const handleSectionClick = (section: Section) => {
    if (selectedSection?.title !== section.title) {
      setSelectedSection(section);
    }
  };

  return (
    <>
    <div className="accordeon">
        <img src={selectedSection?.imageUrl} alt={selectedSection?.title} className="img-accordeon"/>
      <div className="content-accordeon">
        {sections.map((section, index) => (
          <>
          <div key={index} className="section-accordeon">
            <div
              className={`accordeon-texts section-title ${selectedSection?.title === section.title ? 'active' : ''}`}
              onClick={() => handleSectionClick(section)}
            >
              <h3 className="h3">{section.title}</h3>
              <span className="icon-accordeon">
                {selectedSection?.title === section.title ? '−' : '+'}
              </span>
            </div>
            {selectedSection?.title === section.title && (
              <div className="accordeon-content">
                <div className="accordeon-text-content">
                  <p>{section.content}</p>
                </div>
              </div>
            )}
          </div>
          <div className="line-accordeon"></div>
          </>
        ))}
      </div>
    </div>
    </>
  );
};

export default Accordeon;
