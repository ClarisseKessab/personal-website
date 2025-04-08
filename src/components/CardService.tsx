import Image from "next/image";
import { useEffect, useState } from "react";

// Déclaration des props du composant CardService
type CardServiceProps = {
  iconLight: string;
  iconDark: string;
  alt: string;
  title: string;
  description: string;
  isDark: boolean;
};

// Composant CardService
export default function CardService({
  iconLight,
  iconDark,
  alt,
  title,
  description,
  isDark,
}: CardServiceProps) {
  // Déclaration d'un état local pour gérer l'icône en fonction du mode
  const [currentIcon, setCurrentIcon] = useState(iconLight);

  // Utilisation de useEffect pour mettre à jour l'icône lors du changement de mode
  useEffect(() => {
    setCurrentIcon(isDark ? iconDark : iconLight);
  }, [isDark]); // Dépendance sur isDark pour déclencher l'effet au changement du mode

  return (
    <div className="card-service-content">
      <Image
        src={currentIcon} // Affichage de l'icône dynamique
        alt={alt}
        width={60}
        height={60}
      />
      <div className="card-service-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
