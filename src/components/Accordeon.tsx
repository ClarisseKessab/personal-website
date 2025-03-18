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
    content: "💡 Développeuse Fullstack & UI Designer | 🎨💻 22 ans | 🎓 Double BAC +3 en Conception UI & Développement\n\n🚀 Passionnée par le design et le code, j’adore créer des expériences utilisateurs fluides et impactantes. Toujours curieuse et motivée, je suis prête à relever de nouveaux défis !\n\n🌟 On dit de moi :\n✔️ Créative & Rigoureuse – J’allie esthétique et performance\n✔️ Énergique & Curieuse – Toujours à fond pour apprendre et innover\n✔️ Positive & Engagée – Avec moi, aucun projet ne manque de dynamisme ! 😄\n\n🎯 Objectif ? Concevoir des interfaces modernes et intuitives, toujours avec fun et passion !",
    imageUrl: "assets/accordeon/developpeur.png",
    button: "En savoir plus"
  },
  {
    title: "Expériences",
    content: "🎯 J’ai eu la chance de travailler sur une variété de projets qui m’ont permis d’acquérir une solide expérience en **développement** et **gestion de projets digitaux**.\n\n🚀 **Développement web**\nJ’ai créé **deux applications from scratch** en **Ruby on Rails et JavaScript**, ce qui m'a permis de maîtriser **l’ensemble du processus de développement**, du **back-end au front-end**.\n\n💼 **Expérience en gestion de projet**\nPendant **2 ans et demi en alternance** en tant que **cheffe de projet digital**, j’ai acquis des compétences en :\n✔️ **SEO & optimisation des performances** (WordPress, Shopify…)\n✔️ **Création et refonte de sites web**\n✔️ **Gestion client & suivi de projet**\n\n💻 **Freelancing**\nJ’ai également eu l’opportunité de travailler en **freelance**, ce qui m’a permis :\n✔️ D’explorer des projets variés\n✔️ De m’adapter à des besoins spécifiques\n✔️ De respecter les délais et attentes des clients 🌟\n\nChaque projet est pour moi une nouvelle aventure et un défi à relever avec passion !",
    imageUrl: "assets/accordeon/experience.png",
    button:"Une nouvelle aventure ?",
  },
  {
    title: "Études",
    content: "📚 **Un parcours académique varié**, mêlant **développement web** et **design UI**, qui m’a permis d’acquérir une expertise complète.\n\n💻 **Premiers pas en développement** : J’ai débuté avec une année à **Campus Academy**, où j’ai posé les bases de mes compétences techniques.\n\n🎨 **Passion pour le design** : J’ai exploré l’**Infographie** pendant un an à **Webstart**, puis me suis spécialisée en **Webdesign** à **MJM Graphics Design**.\n\n🖥️ **Approfondissement en UI/UX** : À **l’ECV Digital**, j’ai perfectionné mes compétences en **Conception UI**, en imaginant des expériences utilisateurs réussies.\n\n🚀 **Développement Fullstack** : J’ai finalisé mon parcours avec un **Bac+3 en développement web à Le Wagon**, où j’ai consolidé ma maîtrise des technologies modernes.\n\nUn parcours riche qui me permet aujourd’hui de concevoir des interfaces **à la fois performantes et esthétiques** !",
    imageUrl: "assets/accordeon/etudes.png",
    button:"Des questions ?",
  },
];

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
