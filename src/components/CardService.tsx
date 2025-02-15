const services = [
  { title: "Conception UI", desc:"Conception d'interfaces utilisateurs modernes et intuitives, centrées sur l'expérience utilisateur.", src: "🎨", alt: "Java", color:"green" },
  { title: "Développement", desc:"Développement de sites et applications web sur mesure et performants", src: "💻", color:"violet" },
  { title: "SEO", desc:"Optimisation SEO pour améliorer la visibilité et le classement sur les moteurs de recherche.", src: "⚙️", color:"blue" },
];

export default function CardService(){
  return(
    <>
    <div className="cards-service">
    {services.map((service, index) => (
          <div className="element-service" key={index} style={{ backgroundColor: `var(--${service.color})` }}>
            <p className="icon-service">{service.src}</p>
            <h3 className="title-service">{service.title}</h3>
            <p className="desc-service">{service.desc}</p>
          </div>
        ))}
    </div>
    </>
  );

}
