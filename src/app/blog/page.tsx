import { getAllArticlesMeta } from "@/lib/articles";
import CardArticle from "@/components/CardArticle"; // ou le chemin correct

export const metadata = {
  title: "Nos articles de Blog | Clarisse K",
  description: "Conseils en web design, développement Webflow, SEO et plus encore.",
};

export default function BlogPage() {
  const articles = getAllArticlesMeta();

  return (
    <div className="title-page">
      <h1>Blog</h1>
      <p>Des conseils simples sur le design, le SEO et le développement no-code 👇</p>

      <div className="cards-articles">
      {articles.map((article) => (
      <CardArticle
        key={article.slug}
        slug={article.slug}
        title={article.title}
        metaDescription={article.metaDescription}
        image={article.image}
      />
))}
</div>

    </div>
  );
}
