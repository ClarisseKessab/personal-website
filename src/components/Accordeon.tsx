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
    title: "Qui suis-je ?",
    content: "💡 Développeuse Fullstack & UI Designer | 🎨💻 22 ans\n🎓 Double BAC +3 en Conception UI & Développement\n\n🚀 Passionnée par le design et le code, j’aime créer des expériences fluides et performantes.\n\n🌟 On dit de moi :\n✔️ Créative & Rigoureuse – Esthétique & Performance\n✔️ Énergique & Curieuse – Toujours en quête d’apprentissage\n✔️ Positive & Engagée – Dynamisme et motivation au rendez-vous !",
    imageUrl: "assets/accordeon/developpeur.png",
    button: "En savoir plus"
  },
  {
    title: "Expériences",
    content: "🎯 Expérience en développement et gestion de projets digitaux.\n\n🚀 **Développement Web** : Création de **2 applications** en Ruby on Rails & JavaScript.\n💼 **Gestion de projet** : 2 ans et demi en alternance.\n✔️ SEO & optimisation des performances\n✔️ Création et refonte de sites (WordPress, Shopify...)\n✔️ Gestion client & suivi de projet\n\n💻 **Freelance** : Adaptabilité, gestion des délais et attentes clients.",
    imageUrl: "assets/accordeon/experience.png",
    button: "Une nouvelle aventure ?"
  },
  {
    title: "Études",
    content: "📚 Un parcours mêlant **développement web** et **design UI**.\n\n💻 **Campus Academy** – Bases du développement\n🎨 **Webstart & MJM Graphics Design** – Infographie & Webdesign\n🖥️ **ECV Digital** – Spécialisation UI/UX\n🚀 **Le Wagon** – Développement Fullstack (Bac+3)\n\nUne expertise qui allie **créativité et technique** !",
    imageUrl: "assets/accordeon/etudes.png",
    button: "Des questions ?"
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
