import { getArticleBySlug, getAllArticlesMeta } from '@/lib/articles';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import '@/styles/components/markdown.css';

/** ✅ alias qui matche le type “PageProps” attendu par Next */
type Props = {
  params: { slug: string };
};

/* -------- 1. slugs à générer -------- */
export async function generateStaticParams() {
  return getAllArticlesMeta().map(({ slug }) => ({ slug }));
}

/* -------- 2. métadonnées dynamiques -------- */
export async function generateMetadata({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

/* -------- 3. page article -------- */
export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  const html = marked.parse(article.content);

  return (
    <div className="projet-title">
      <h1>{article.title}</h1>

      <div className="image-projet">
        {/* on peut garder <img>; le warning n’empêche pas le build */}
        <img src={article.image} alt={article.title} />
      </div>

      <div className="texts-projet">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
