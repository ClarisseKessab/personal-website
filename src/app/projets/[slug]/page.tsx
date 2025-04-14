import { Metadata } from 'next'
import Image from 'next/image'
import projets from '../../../data/projects.json'
export const dynamic = 'force-static';



interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projets.map((projet) => ({
    slug: projet.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);

  return {
    title: projet?.title || "Projet non trouvé",
    description: projet?.metaDescription || projet?.description || "Projet réalisé par Clarisse Kessab.",
    openGraph: {
      title: projet?.title,
      description: projet?.metaDescription || projet?.description,
      images: projet?.image ? [{ url: projet.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: projet?.title,
      description: projet?.metaDescription || projet?.description,
      images: projet?.image ? [projet.image] : [],
    },
  };
}


export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const projet = projets.find((p) => p.slug === slug)

  if (!projet) {
    return <div>Projet non trouvé</div>
  }

  const projetUrl = projet.demo;

  const getButtonText = (url: string): string => {
    if (url.startsWith("x")) return "Le site n'est pas encore en ligne";
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
          <a href={`${projet.demo}`} className="btn btn-projet" target="_blank"> {getButtonText(projetUrl)}</a>
          <a className="btn btn-projet-secondary" href="/contact">Des questions ?</a>
        </div>
      </div>

      <div className="blur blur-medium blur-violet" style={{ top: '200px', right: '100px' }} />
      <div className="blur blur-small blur-green" style={{ top: '300px', right: '400px' }} />
      <div className="blur blur-big blur-blue" style={{ top: '2000px', left: '0' }} />
      <div className="blur blur-medium blur-blue" style={{ top: '1000px', right: '100px' }} />

      <div className="container-img-projet">
       <div className="image-projet-wrapper">
       <Image
  src={projet.image}
  alt={`Présentation ${projet.title}`}
  width={1500}
  height={800}
  className="image-projet"
/>
        </div>

  </div>

      <div className="stack-section">
        <h2 className="h2">Technologies utilisées</h2>
        <div className="stack-group">
          {projet.stack.map((stack, index) => (
            <div className="element-skill" key={index}>
              <Image src={`/skills/${stack}.svg`} alt={projet.title} className="logo-skill" width={20} height={100}/>
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
              <Image src={image} alt={`Image ${index + 1}`} className="img-projet" width={200} height={100}/>
            </div>
          ))}
        </div>
      </div>
      <div className="section-cta">
        <div className="cta-card">
          <h2>Envie de donner vie à votre projet ? 🚀</h2>
          <p>Un café virtuel pour en discuter, ça vous tente ?</p>
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/clarisse-freelance/appel-decouverte" className="btn-primary">Prendre rendez-vous</a>
        </div>
    </div>
    </>
  );
}
