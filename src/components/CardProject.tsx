import Image from "next/image";

type CardProjectProps = {
  title: string;
  descard: string;
  image: string;
  emoji?: string;
  tags?: string[];
};

export default function CardProject({ title, descard, image, emoji, tags }: CardProjectProps) {
  return (
    <div className="card-projet">
      <div className="card-image-wrapper">
        <Image
          src={image}
          alt={title}
          width={340}
          height={230}
          className="card-photo-projet"
        />
        {tags && (
          <div className="tag-badge-group">
            {tags.map((tag) => (
              <span key={tag} className="tag-badge">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className="card-projet-text">
        <h3>{emoji ? `${emoji} ${title}` : title}</h3>
        <p>{descard}</p>
      </div>
    </div>
  );
}
