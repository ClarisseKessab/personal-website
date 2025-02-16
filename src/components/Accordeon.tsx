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
    content: "Je suis Clarisse, une passionnée de design et de développement web ! 🎨💻 À 22 ans, j'ai une double certification de niveau 6 (BAC +3) en Conception UI et en Développement fullstack. Toujours motivée, je suis prête à relever tous les défis et créer des expériences utilisateurs captivantes 🚀. On me décrit souvent comme une personne pleine de joie de vivre, toujours prête à faire de chaque projet une aventure fun et dynamique 🌟. Avec moi, c’est l’assurance de ne jamais s’ennuyer ! 😄",
    imageUrl: "assets/accordeon/developpeur.png",
    button: "En savoir plus",
  },
  {
    title: "Expériences",
    content: "J’ai eu la chance de travailler sur une variété de projets qui m’ont permis d’acquérir une expérience solide en développement et gestion de projets digitaux. 🎯 J’ai créé de A à Z deux applications en Ruby on Rails et JavaScript, ce qui m'a permis de maîtriser l'ensemble du processus de développement, du back-end au front-end 🚀. Parallèlement, j’ai passé 2 ans et demi en alternance en tant que cheffe de projet digital, où j’ai développé des compétences en SEO, création et refonte de sites web, ainsi qu’en gestion client 📈💻. J’ai aussi eu l’opportunité de faire du freelancing, ce qui m’a permis de travailler sur des projets variés et de m’adapter à des besoins spécifiques tout en respectant les délais et les attentes des clients. 🌟",
    imageUrl: "assets/accordeon/experience.png",
    button:"Une nouvelle aventure ?",
  },
  {
    title: "Études",
    content: "J'ai suivi un parcours académique varié, me permettant d’acquérir une expertise à la fois en développement web et en design UI. 📚 Tout a commencé avec une année à Campus Academy en Développement où j’ai posé les premières pierres de mes compétences techniques 💻. Ensuite, j’ai étudié l’Infographie pendant un an à Webstart, ce qui a renforcé ma passion pour le visuel et la création graphique 🎨. J’ai poursuivi avec une année à MJM Graphics Design, me spécialisant en Webdesign, avant de me tourner vers l’ECV, où j'ai perfectionné mes compétences en Conception UI pour imaginer des expériences utilisateurs réussies 🖥️. Enfin, j'ai terminé mon parcours avec un Bac +3 en Développement Fullstack à Le Wagon, où j'ai consolidé mes compétences techniques et ma maîtrise des technologies web modernes 🚀.",
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
              <h3 className="h3-title">{section.title}</h3>
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
  );
};

export default Accordeon;
