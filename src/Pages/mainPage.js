import '../Assets/bootstrap.min.css';
import CardList from '../Components/cardlist';
import { useUpdateCardData } from '../Components/firebase/crudContext';

const MainPage = () => {
    const updateCardData = useUpdateCardData();
    const test = () => {
        updateCardData('TestTitel', 'TestText');
    };

    return (
        <div className="container bg-light border py-4 text-center">
            <h2>CRUD - Create, Read, Update, Delete</h2>
            <button onClick={test} >Write</button>
            <button >Fetch</button>
            <CardList />
        </div>
    );
};

export default MainPage;
