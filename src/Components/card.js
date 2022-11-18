import '../Assets/bootstrap.min.css';

const Card = (props) => {
  return (
    <div id={props.id} className="card mt-3">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <button className="btn btn-secondary mx-3">Ändra</button>
    <button className="btn btn-danger mx-3">Ta bort</button>
  </div>
</div>
  );
}

export default Card;