import '../Assets/bootstrap.min.css';
import { useState, useEffect } from 'react';



const CardList = (props) => {
    const [databaseData, setDatabaseData] = useState([]);

    useEffect(() => {
    }, []);

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <button className="btn btn-primary">Ändra</button>
                <button className="btn btn-primary">Ändra</button>
            </div>
        </div>
    );
};

export default CardList;
