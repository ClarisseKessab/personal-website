interface CardReviewProps {
  clientName: string;
  review: string;
  rating?: number;
  emoji?: string;
}

export default function CardReview({ clientName, review, rating = 5, emoji }: CardReviewProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating ? "⭐" : "☆");

  return (
    <div className="card-review">
      <div className="card-review-content">
        <div className="review-info">
          <div className="review-stars">
            {stars.map((star, index) => (
              <span key={index} className="star-icon">
                {star}
              </span>
            ))}
          </div>
          <p className="review-text">{review}</p>
        </div>
        <h4 className="client-name">
          {emoji && <span>{emoji} </span>}
          {clientName}
        </h4>
      </div>
    </div>
  );
}
