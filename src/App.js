import React from 'react';
import Header from './Components/header';
import MainPage from './Pages/mainPage';
import NewPost from './Pages/newPost';
import { CardDataContext } from './Components/Firebase/crudContext';
import { database } from './Components/Firebase/config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
            <CardDataContext>
                    <Routes>
                        <Route exact path="/" element={<><Header /><MainPage /></>} />
                        <Route path="/newpost" element={<><Header /><NewPost /></>} />
                    </Routes>
            </CardDataContext>
            </Router>
        </div>
    );
}

export default App;
