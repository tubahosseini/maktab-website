import "./card.style.css";

interface cardProps {
  title: string;
  image: string;
  description: string;
}

function Card({ title, image, description }: cardProps) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={image} alt={title} width="25%" />
      <p className="card-description">{description}</p>
      <p className="card-info">28 هفته | 400 ساعت آموزش</p>
      <button className="btn-more-info">اطلاعات بیشتر</button>
    </div>
  );
}

export default Card;
