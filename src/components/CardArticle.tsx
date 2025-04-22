import Image from "next/image";
import Link from "next/link";

type CardArticleProps = {
  slug: string;
  title: string;
  metaDescription: string;
  image: string;
};

export default function CardArticle({ slug, title, metaDescription, image }: CardArticleProps) {
  return (
    <div className="card-article">
      <div className="card-article-image">
        <Image
          src={image}
          alt={title}
          width={340}
          height={200}
          className="card-article-photo"
        />
      </div>
      <div className="card-article-content">
        <h3 className="card-article-title">{title}</h3>
        <p className="card-article-desc">{metaDescription.slice(0, 140)}...</p>
        <Link href={`/blog/${slug}`} className="card-article-link">
          Lire l&apos;article
        </Link>
      </div>
    </div>
  );
}
