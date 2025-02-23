import { Metadata } from 'next'



import projets from '../../../data/projects.json'

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

  return (
    <>
      <div className="projet-title">
        <h1>{projet.title}</h1>
        <p>{projet.description}</p>
        <div className="btns-projet">
          <a href={`${projet.github}`}className="btn btn-projet"> Voir le projet</a>
          <a className="btn btn-projet-secondary"> Des questions ?</a>
        </div>
      </div>
      <div className="blur-big-green left-10 top"></div>
        <div className="container-img-projet">
        <img src={projet.image} alt={`Presentation ${projet.title}`} className="image-projet" />
        </div>
        <div className="stack-section">
        <h2 className="h2">Technologies utilisées</h2>
        <div className="stack-group">
        {projet.stack.map((stack, index) => (
          <div className="element-skill" key={index}>
            <img src={`/skills/${stack}.png`} alt={projet.title} className="logo-skill" />
            <span className="text-skill">{stack}</span>
          </div>
        ))}
        </div>
        </div>
      <div className="photos-section">
        <h2 className="h2">Photos</h2>
        <div className="photos-group">
        {projet.images.map((image, index) => (
          <div className="photo-projet" key={index}>
            <img src={`${image}`} alt={projet.title} className="img-projet" />
          </div>
        ))}
        </div>
        </div>

    </>
  )
}
