import '../Assets/bootstrap.min.css';
import { useEditCardData, useRemoveCard } from './firebase/crudContext';
import { useState } from 'react';

const Card = (props) => {
  const editCardData = useEditCardData();
  const removeCard = useRemoveCard();

  const handleRemove = (e) => {
    removeCard(e);
    //Få cardList att rendera om här?
  }

  return (
    <div className="card mt-3">
  <div id={props.id} className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <button onClick={editCardData} className="btn btn-secondary mx-3">Ändra</button>
    <button onClick={handleRemove} className="btn btn-danger mx-3">Ta bort</button>
  </div>
</div>
  );
}

export default Card;