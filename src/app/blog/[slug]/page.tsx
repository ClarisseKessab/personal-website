import { getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { marked } from "marked";
import "@/styles/components/markdown.css";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}


export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug); // <= si async
  if (!article) return notFound();

  const htmlContent = marked.parse(article.content); // .parse au lieu de simple call

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
