import "./Card.css";

const Card = ({ value }) => {
  return (
    <div className="card">
      <h3>{value.title}</h3>
      <p>{value.content}</p>
    </div>
  );
};

export default Card;
