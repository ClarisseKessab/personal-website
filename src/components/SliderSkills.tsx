/* eslint-disable @next/next/no-img-element */
"use client";

import useDarkMode from "@/hooks/useDarkMode";

const skills = [
  "Semrush",
  "Adobe Creative",
  "Java",
  "Html",
  "CSS",
  "Javascript",
  "React",
  "TypeScript",
  "Ruby On Rails",
  "Webflow",
  "Figma",
];

const SliderSkills: React.FC = () => {
  const { isDark } = useDarkMode();
  const duplicatedSkills = [...skills, ...skills];

  const getImagePath = (name: string) => {
    const folder = isDark ? "dark" : "light";
    const formattedName = name.replace(/\s+/g, "%20"); // pour les espaces
    return `/skills/${folder}/${formattedName}.png`;
  };

  return (
    <div className="skills-slider">
      <div className="skill-slider">
        {duplicatedSkills.map((skill, index) => (
          <div className="element-skill" key={index}>
            <img src={getImagePath(skill)} alt={skill} className="logo-skill" />
            <span className="text-skill">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderSkills;
