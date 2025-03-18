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
    "content": "<p>💡 Développeuse Fullstack & UI Designer | 🎨💻 22 ans</p><p>🎓 Double BAC +3 en Conception UI & Développement</p><p>🚀 Passionnée par le design et le code, j’aime créer des expériences fluides et performantes.</p><p>🌟 On dit de moi :</p><ul><li>✔️ Créative & Rigoureuse – J’allie esthétique et performance</li><li>✔️ Énergique & Curieuse – Toujours en quête d’apprentissage</li><li>✔️ Positive & Engagée – Dynamisme et motivation au rendez-vous !</li></ul>",
    "imageUrl": "assets/accordeon/developpeur.png",
    "button": "En savoir plus"
  },
  {
    "title": "Expériences",
    "content": "<p>🎯 Expérience en développement et gestion de projets digitaux.</p><p>🚀 <strong>Développement Web :</strong></p><ul><li>Création de 2 applications en Ruby on Rails & JavaScript</li></ul><p>💼 <strong>Gestion de projet :</strong></p><ul><li>2 ans et demi en alternance</li><li>SEO & optimisation des performances (WordPress, Shopify...)</li><li>Création et refonte de sites</li><li>Gestion client & suivi de projet</li></ul><p>💻 <strong>Freelance :</strong></p><ul><li>Adaptabilité aux besoins spécifiques</li><li>Respect des délais et attentes clients</li></ul>",
    "imageUrl": "assets/accordeon/experience.png",
    "button": "Une nouvelle aventure ?"
  },
  {
    "title": "Études",
    "content": "<p>📚 Un parcours mêlant développement web et design UI.</p><p>💻 <strong>Campus Academy</strong> – Bases du développement</p><p>🎨 <strong>Webstart & MJM Graphics Design</strong> – Infographie & Webdesign</p><p>🖥️ <strong>ECV Digital</strong> – Spécialisation UI/UX</p><p>🚀 <strong>Le Wagon</strong> – Développement Fullstack (Bac+3)</p><p>Une expertise qui allie créativité et technique !</p>",
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
