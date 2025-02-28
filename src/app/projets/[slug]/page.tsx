import { Metadata } from 'next'
import projets from '../../../data/projects.json'
import { GrGroup, GrDocumentTime, GrDocument } from "react-icons/gr";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Projet {
  slug: string;
  titre: string;
  description: string;
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projets.map((projet) => ({
    slug: projet.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const projet = projets.find((p) => p.slug === slug)
  return { title: projet?.title || 'Projet non trouvé' }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const projet = projets.find((p) => p.slug === slug)

  if (!projet) {
    return <div>Projet non trouvé</div>
  }

  const projetUrl = projet.demo;

  const getButtonText = (url: string): string => {
    if (url.startsWith("https://github.com/")) return "Voir le GitHub";
    if (url.startsWith("https://canva.com")) return "Voir la présentation";
    if (url.startsWith("https://notion.so/")) return "Voir le Notion";
    if (url.startsWith("https://www.figma.com")) return "Voir le Figma";
    return "Visiter le site";
  };


  return (
    <>
      <div className="projet-title">
        <h1>{projet.title}</h1>
        <p>{projet.description}</p>
        <div className="btns-projet">
          <a href={`${projet.demo}`}className="btn btn-projet" target="_blank"> {getButtonText(projetUrl)}</a>
          <a className="btn btn-projet-secondary" href="/contact"> Des questions ?</a>
        </div>
      </div>
      <div className="types-projet">
        <div className="type-projet">
          <GrGroup className="icon-projet"/>
          <p className="title-type-projet"> {projet.team?.length && projet.team.length > 1 ? (
          <>
            Par <br />
            {projet.team.length} personnes
          </>
        ) : (
          "Seule"
        )}
        </p>
        </div>
        <div className="type-projet">
          <GrDocumentTime className="icon-projet"/>
          <p className="title-type-projet">Réalisé en <br/> {projet.duration}</p>
        </div>
        <div className="type-projet">
          <GrDocument className="icon-projet"/>
          <p className="title-type-projet">Projet <br/> {projet.projet}</p>
        </div>


      </div>
      <div className="blur-big-violet left-10 top"></div>
        <div className="container-img-projet">
        <img src={projet.image} alt={`Presentation ${projet.title}`} className="image-projet" />
        </div>
        <div className="stack-section">
        <h2 className="h2 hidden">Technologies utilisées</h2>
        <div className="stack-group">
        {projet.stack.map((stack, index) => (
          <div className="element-skill" key={index}>
            <img src={`/skills/${stack}.png`} alt={projet.title} className="logo-skill" />
            <span className="text-skill">{stack}</span>
          </div>
        ))}
        </div>
        </div>
        <div className="texts-projet">
          <div className="brief-projet">
          <h2 className="h2">Contexte ✨</h2>
          <p>{projet.brief}</p>
          </div>
          <div className="feature-projet">
          <h2 className="h2">Fonctionnalités ⚙️</h2>
      <div className="blur-big-green left-10 top"></div>

          {projet.features.map((feature, index) => (
          <div className="features" key={index}>
            <p className="feature">{feature}</p>
          </div>
        ))}
          </div>
        </div>
      <div className="photos-section">
        <h2 className="h2">Aperçu 📸</h2>
        <div className="photos-group">
        {projet.images.map((image, index) => (
          <div className="photo-projet" key={index}>
            <img src={`${image}`} alt={projet.title} className="img-projet" />
          </div>
        ))}
      <div className="blur-little-blue left-10 top"></div>
        </div>
        </div>
    </>
  )
}


{/* <div className="btns-projet">
          <a href={`${projet.github}`}className="btn btn-projet"> {getButtonText(projetUrl)}</a>
          <a className="btn btn-projet-secondary"> Des questions ?</a>
        </div> */}
