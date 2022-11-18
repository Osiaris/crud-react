import React from 'react';
import Header from './Components/header';
import MainPage from './Pages/mainPage';
import { CardDataContext } from './Components/firebase/crudContext';
import { database } from './Components/firebase/config'

function App() {
    return (
        <div className="App">
            <Header />
            <CardDataContext>
                <MainPage />
            </CardDataContext>
        </div>
    );
}

export default App;
