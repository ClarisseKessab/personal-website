/* eslint-disable @next/next/no-img-element */
"use client";

import Image from 'next/image'

const skills = [
  "Semrush",
  "Adobe Creative",
  "Page Speed Insights",
  "Html",
  "Css",
  "Javascript",
  "React",
  "Typescript",
  "Ruby On Rails",
  "Webflow",
  "Figma",
];

const SliderSkills: React.FC = () => {
  const duplicatedSkills = [...skills, ...skills];

  const getImagePath = (name: string) => {
    const formattedName = name.replace(/\s+/g, "%20");
    return `/skills/${formattedName}.svg`;
  };

  return (
    <div className="skills-slider">
      <div className="skill-slider">
        {duplicatedSkills.map((skill, index) => (
          <div className="element-skill" key={index}>
            <Image src={getImagePath(skill)} alt={skill} className="logo-skill" width={20} height={100}/>
            <span className="text-skill">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderSkills;
