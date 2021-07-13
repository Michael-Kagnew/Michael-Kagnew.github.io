import "../css/common.css";
function NavBar() {

    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid bg-light">
        <a className="navbar-brand" href="www.google.ca/">LOGO HERE</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav bg-light">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/courts">Courts</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/courses">Courses</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/experts">Experts</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn-danger btn-sm mb-3 mt-3">REGISTER</a>            
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    );
}



export default NavBar;