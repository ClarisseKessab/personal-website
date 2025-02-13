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
    <div>
      <h1>{projet.title}</h1>
      <p>{projet.description}</p>
    </div>
  )
}
