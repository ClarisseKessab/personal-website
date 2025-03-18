/* eslint-disable @next/next/no-img-element */
const skills = [
  { src: "/skills/Semrush.png", alt: "SemRush" },
  { src: "/skills/Adobe Creative.png", alt: "Adobe Creative" },
  { src: "/skills/Java.png", alt: "Java" },
  { src: "/skills/Html.png", alt: "HTML" },
  { src: "/skills/CSS.png", alt: "CSS" },
  { src: "/skills/Javascript.png", alt: "Javascript" },
  { src: "/skills/React.png", alt: "React" },
  { src: "/skills/TypeScript.png", alt: "Typescript" },
  { src: "/skills/Ruby On Rails.png", alt: "Ruby On Rails" },
  { src: "/skills/Webflow.png", alt: "Webflow" },
  { src: "/skills/figma.png", alt: "Figma" },
];

const SliderSkills: React.FC = () => {

  const duplicatedSkills = [...skills, ...skills];

  return (
    <>
    <div className="skills-slider">
      <div className="skill-slider">
        {duplicatedSkills.map((skill, index) => (
          <div className="element-skill" key={index}>
            <img src={skill.src} alt={skill.alt} className="logo-skill" />
            <span className="text-skill">{skill.alt}</span>
          </div>
        ))}
        {skills.map((skill, index) => (
          <div className="element-skill" key={`second-${index}`}>
            <img src={skill.src} alt={skill.alt} className="logo-skill" />
            <span className="text-skill">{skill.alt}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SliderSkills;
