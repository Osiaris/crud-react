import '../Assets/bootstrap.min.css';

const Card = (props) => {
  return (
    <div className="card mt-3">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
  </div>
</div>
  );
}

export default Card;