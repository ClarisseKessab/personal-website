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
    content: "💡 <b>Développeuse Fullstack & UI Designer</b> | 🎨💻 22 ans<br><br>🎓 <b>Double BAC +3</b> en Conception UI & Développement<br><br>🚀 Passionnée par le design et le code, j’aime créer des expériences fluides et performantes.<br><br>🌟 <b>On dit de moi :</b><br>✔️ <b>Créative & Rigoureuse</b> – J’allie esthétique et performance<br>✔️ <b>Énergique & Curieuse</b> – Toujours en quête d’apprentissage<br>✔️ <b>Positive & Engagée</b> – Dynamisme et motivation au rendez-vous !",
    imageUrl: "assets/accordeon/developpeur.png",
    button: "En savoir plus"
  },
  {
    title: "Expériences",
    content: "🎯 <b>Expérience en développement et gestion de projets digitaux.</b><br><br>🚀 <b>Développement Web :</b><br>- Création de 2 applications en Ruby on Rails & JavaScript<br><br>💼 <b>Gestion de projet :</b><br>- 2 ans et demi en alternance<br>- SEO & optimisation des performances (WordPress, Shopify...)<br>- Création et refonte de sites<br>- Gestion client & suivi de projet<br><br>💻 <b>Freelance :</b><br>- Adaptabilité aux besoins spécifiques<br>- Respect des délais et attentes clients",
    imageUrl: "assets/accordeon/experience.png",
    button: "Une nouvelle aventure ?"
  },
  {
    title: "Études",
    content: "📚 <b>Un parcours mêlant développement web et design UI.</b><br><br>💻 <b>Campus Academy</b> – Bases du développement<br>🎨 <b>Webstart & MJM Graphics Design</b> – Infographie & Webdesign<br>🖥️ <b>ECV Digital</b> – Spécialisation UI/UX<br>🚀 <b>Le Wagon</b> – Développement Fullstack (Bac+3)<br><br>Une expertise qui allie <b>créativité et technique</b> !",
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
