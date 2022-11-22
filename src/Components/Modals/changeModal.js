import "../../Assets/bootstrap.min.css";
import Modal from "react-modal";
import { useState } from "react";
import { useEditCardData } from "../FirebaseConfig/crudFirebase";

const ChangeModal = (props) => {
  const [title, setTitle] = useState(props.cardProps.props.title);
  const [post, setPost] = useState(props.cardProps.props.content);
  const [name, setName] = useState(props.cardProps.props.author);

  const editCardData = useEditCardData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      title: title,
      post: post,
      id: props.cardProps.props.id,
      author: name,
    };
    editCardData(postData, props.cardProps.props.id);
    props.setModalIsOpen(false);
  };
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.setModalIsOpen(false)}
    >
      <h2>{`Ändra datan i inlägg med ID: ${props.cardProps.props.id}!`}</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titel:</label> <br />
          <input
            className=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Exempeltitel"
            type="text"
            name="title"
            required
          />
          <br />
          <label className="mt-2" htmlFor="post">
            Inlägg:
          </label>
          <br />
          <textarea
            className="mt-2"
            name="post"
            placeholder="Här skriver du ditt inlägg.."
            value={post}
            onChange={(e) => setPost(e.target.value)}
            rows="4"
            cols="50"
            maxLength="200"
          ></textarea>
          <br />
          <label className="mt-2" htmlFor="name">
            Signatur (valfritt):
          </label>{" "}
          <br />
          <input
            className="mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Exempelsignatur"
            type="text"
            name="name"
          />
          <br />
          <button
            onClick={() => props.setModalIsOpen(false)}
            className="mt-2 me-2 btn btn-secondary"
            type="submit"
          >
            Avbryt
          </button>
          <button className="mt-2 btn btn-success" type="submit">
            Ändra
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default ChangeModal;
