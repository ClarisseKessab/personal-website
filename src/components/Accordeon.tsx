// Accordeon.tsx
"use client";

import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

interface Section {
  title: string;
  content: string;
  imageUrlLight: string;
  imageUrlDark: string;
}

const sections: Section[] = [
  {
    title: "On discute de votre projet",
    content: "Un premier appel ou message pour poser les bases : on parle de ton activité, tes objectifs, ton public cible et l’image que tu veux transmettre. Je prends aussi note de ton univers graphique et de tes préférences en termes d’ergonomie. → L’objectif : cerner ta vision pour créer un site cohérent, utile et beau.",
    imageUrlLight: "/etapes/icon-1-dark.png",
    imageUrlDark: "/etapes/icon-1-light.png",
  },
  {
    title: "Je vous propose une solution claire",
    content: "Je te propose la meilleure solution selon ton besoin : template personnalisé ou site sur-mesure. Tu reçois un document avec la structure du site (arborescence), les fonctionnalités, la méthodo design + dev, et les options SEO. Le tout avec un budget transparent et des délais précis.",
    imageUrlLight: "/etapes/icon-2-dark.png",
    imageUrlDark: "/etapes/icon-2-light.png",
  },
  {
    title: "Je t’envoie une reco claire et sur-mesure",
    content: "Design, intégration, responsive… Je construis votre site avec soin, dans les délais annoncés.",
    imageUrlLight: "/etapes/icon-3-dark.png",
    imageUrlDark: "/etapes/icon-3-light.png",
  },
  {
    title: "Je conçois ton site de A à Z",
    content: "Je crée l’interface (UI) en respectant ton identité visuelle, en m’appuyant sur de bonnes pratiques UX. Une fois validé, j’intègre tout (responsive & accessible), et j’optimise le site techniquement pour la performance (vitesse, SEO technique, mobile first). Tu suis l’avancée via un lien privé.",
    imageUrlLight: "/etapes/icon-6-dark.png",
    imageUrlDark: "/etapes/icon-6-light.png",
  },
  {
    title: "Je te livre un site prêt à l’emploi",
    content: "Ton site est en ligne ! Je t’envoie les accès + une vidéo tuto pour t’apprendre à gérer ton contenu (textes, images, etc.). Tout est pensé pour que tu sois autonome sans te perdre dans la technique.",
    imageUrlLight: "/etapes/icon-4-dark.png",
    imageUrlDark: "/etapes/icon-4-light.png",
  },
  {
    title: "Suivi + SEO & maintenance",
    content: "je reste dispo pour les petits ajustements. Et si tu veux aller plus loin : – Je peux t’accompagner sur ta stratégie SEO (balises, contenu, mots-clés) – Je propose aussi une maintenance mensuelle : mises à jour, surveillance, sécurité.",
    imageUrlLight: "/etapes/icon-5-dark.png",
    imageUrlDark: "/etapes/icon-5-light.png",
  }
];

const Accordeon: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isDark } = useDarkMode();

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="accordeon-wrapper">
      <div className="accordeon-image">
        <img
          src={isDark ? sections[selectedIndex].imageUrlDark : sections[selectedIndex].imageUrlLight}
          alt={sections[selectedIndex].title}
        />
      </div>
      <div className="accordeon-content">
        {sections.map((section, index) => {
          const isActive = index === selectedIndex;
          return (
            <div
              className={`accordeon-item ${isActive ? "active" : ""} ${isDark ? "dark" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="accordeon-header">
                <div className="accordeon-title-left">
                  <div className="step-badge plain">{index + 1}.</div>
                  <h3>{section.title}</h3>
                </div>
                <div className="icon-toggle">{isActive ? "−" : "+"}</div>
              </div>
              {isActive && (
                <div className="accordeon-body">
                  <p>{section.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordeon;
