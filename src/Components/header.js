import '../Assets/bootstrap.min.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="d-flex flex-grow-1">
                    <span className="w-100 d-lg-none d-block"></span>
                    <a className="navbar-brand" href="#">
                        CRUD - React
                    </a>
                    <a className="navbar-brand ms-3" href="#">
                        Lägg till post
                    </a>
                    <a className="navbar-brand ms-3" href="#">
                        Något annat
                    </a>
                    <div className="w-100 text-right"></div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
