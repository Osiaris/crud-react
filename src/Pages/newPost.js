import '../Assets/bootstrap.min.css';
import { useUpdateCardData } from '../Components/Firebase/crudContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [name, setName] = useState('');

    const updateCardData = useUpdateCardData();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const postData = {
            title: title,
            post: post,
            author: name,
        };
        updateCardData(postData);
        navigate('/');
    };

    return (
        <div className="container bg-light border py-4 text-center">
            <h2>Skapa nytt inlägg</h2>
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
                    maxLength="200"></textarea>
                <br />
                <label className="mt-2" htmlFor="name">
                    Signatur (valfritt):
                </label>
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
                <button className="mt-2 btn btn-success" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NewPost;
