import '../Assets/bootstrap.min.css';
import { fetchData, appendToDB } from '../Components/firebase/crud'
import CardList from '../Components/cardlist';


const MainPage = () => {

    return (
        <div className="container bg-light border py-4 text-center">
            <h2>CRUD - Create, Read, Update, Delete</h2>
            <button onClick={appendToDB}>Write</button>
            <button onClick={fetchData}>Fetch</button>
            <CardList />
        </div>
    );
}

export default MainPage;
