import '../Assets/bootstrap.min.css';
import { useState } from 'react';
import ChangeModal from './Modals/changeModal';
import DeleteModal from './Modals/deleteModal';

const Card = (props) => {
    const [changeModalIsOpen, setChangeModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

    return (
        <div className="card mt-3">
            <div id={props.id} className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <p className="fst-italic fw-light">-{props.author}</p>
                <button
                    onClick={() => setChangeModalIsOpen(true)}
                    className="btn btn-secondary mx-3">
                    Ändra
                </button>
                <button
                    onClick={() => setDeleteModalIsOpen(true)}
                    className="btn btn-danger mx-3">
                    Ta bort
                </button>
                {changeModalIsOpen && (
                    <ChangeModal
                        modalIsOpen={changeModalIsOpen}
                        setModalIsOpen={setChangeModalIsOpen}
                        cardProps={{ props }}
                    />
                )}
                {deleteModalIsOpen && (
                    <DeleteModal
                        modalIsOpen={deleteModalIsOpen}
                        setModalIsOpen={setDeleteModalIsOpen}
                        id={props.id}
                    />
                )}
            </div>
        </div>
    );
};

export default Card;
