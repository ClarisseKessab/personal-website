import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMeta {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  tags: string[];
}

export interface Article extends ArticleMeta {
  content: string;
}

const articlesDirectory = path.join(process.cwd(), '/src/content/articles');

export function getAllArticlesMeta(): ArticleMeta[] {
  const filenames = fs.readdirSync(articlesDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug: data.slug,
      title: data.title,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      image: data.image,
      tags: data.tags,
    };
  });
}

export function getArticleBySlug(slug: string): Article {
  const filePath = path.join(articlesDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug: data.slug,
    title: data.title,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    image: data.image,
    tags: data.tags,
    content,
  };
}
