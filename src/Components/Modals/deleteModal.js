import '../../Assets/bootstrap.min.css';
import Modal from 'react-modal';
import { useRemoveCard } from '../Firebase/crudContext';

const DeleteModal = (props) => {
    const removeCard = useRemoveCard();

    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={() => props.setModalIsOpen(false)}>
            <div>
                <h2>{`Är du säker?`}</h2>
                <button
                    onClick={() => props.setModalIsOpen(false)}
                    className="mx-2 btn btn-secondary"
                    type="submit">
                    Avbryt
                </button>
                <button
                    onClick={() => {
                        removeCard(props.id);
                        props.setModalIsOpen(false);
                    }}
                    className="mx-2 btn btn-danger"
                    type="submit">
                    Ta bort
                </button>
            </div>
        </Modal>
    );
};
export default DeleteModal;
