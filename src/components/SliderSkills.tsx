/* eslint-disable @next/next/no-img-element */
const skills = [
  { src: "/skills/Java.png", alt: "Java" },
  { src: "/skills/Html5.png", alt: "HTML" },
  { src: "/skills/Css3.png", alt: "CSS" },
  { src: "/skills/Javascript.png", alt: "Javascript" },
  { src: "/skills/React.png", alt: "React" },
  { src: "/skills/TypeScript.png", alt: "Typescript" },
  { src: "/skills/RubyOnRails.png", alt: "Ruby On Rails" },
  { src: "/skills/Webflow.png", alt: "Webflow" },
  { src: "/skills/figma.png", alt: "Figma" },
];

const SliderSkills: React.FC = () => {

  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills]; // x4

  return (
    <div className="skills-slider">
      <div className="skill-slider">
        {duplicatedSkills.map((skill, index) => (
          <div className="element-skill" key={index}>
            <img src={skill.src} alt={skill.alt} className="logo-skill" />
            <span className="text-skill">{skill.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderSkills;
