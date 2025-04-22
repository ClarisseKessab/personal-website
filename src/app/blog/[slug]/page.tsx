// app/blog/[slug]/page.tsx
import { getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { marked } from "marked";
import "@/styles/components/markdown.css"; // tu peux styliser ton markdown

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  const htmlContent = marked(article.content);

  return (
    <div className="projet-title">
      <h1>{article.title}</h1>
      <div className="image-projet">
        <img src={article.image} alt={article.title} />
      </div>

      <div className="texts-projet">
        <div className="brief-projet">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  );
}
