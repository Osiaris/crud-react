import '../Assets/bootstrap.min.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="d-flex flex-grow-1">
                    <span className="w-100 d-lg-none d-block"></span>
                    <Link className="navbar-brand" to="/">CRUD - React</Link>
                    <Link className="navbar-brand ms-3" to="/newpost">Nytt inlägg</Link>
                    <Link className="navbar-brand ms-3" to="/">Alla inlägg</Link>
                    <div className="w-100 text-right"></div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
