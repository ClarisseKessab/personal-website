/* eslint-disable @next/next/no-img-element */
"use client";

const skills = [
  "Semrush",
  "Adobe Creative",
  "Page Speed Insights",
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
  const duplicatedSkills = [...skills, ...skills];

  const getImagePath = (name: string) => {
    const formattedName = name.replace(/\s+/g, "%20");
    return `/skills/${formattedName}.png`;
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
