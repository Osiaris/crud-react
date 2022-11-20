import '../Assets/bootstrap.min.css';
import CardList from '../Components/cardList';

const MainPage = () => {

    return (
        <div className="container bg-light border py-4 text-center">
            <h2>Lista med inlägg hämtade från Firebase</h2>
            <CardList />
        </div>
    );
};

export default MainPage;
