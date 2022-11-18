import '../Assets/bootstrap.min.css';
import CardList from '../Components/cardList';
import { useUpdateCardData } from '../Components/firebase/crudContext';
import { useState } from 'react';

const MainPage = () => {

    const [titleInputValue, setTitleInputValue] = useState('');
    const [postInputValue, setPostInputValue] = useState('');

    const updateCardData = useUpdateCardData();
    const sendData = () => {
        updateCardData(titleInputValue, postInputValue);
        setTitleInputValue('');
        setPostInputValue('');
    };

    const handleTitleChange = ({target}) => {
        setTitleInputValue(target.value);
      }
      const handlePostChange = ({target}) => {
        setPostInputValue(target.value);
      }

      const fetchDB = async () =>{
        
      }

    return (
        <div className="container bg-light border py-4 text-center">
            <h2>CRUD - Create, Read, Update, Delete</h2>
            <input placeholder="Titel" type="text" onChange={handleTitleChange} value={titleInputValue}/>
            <input placeholder="Post" type="text" onChange={handlePostChange} value={postInputValue} />
            <button onClick={sendData}>Write</button>
            <button onClick={fetchDB}>Fetch</button>
            <CardList />
        </div>
    );
};

export default MainPage;
