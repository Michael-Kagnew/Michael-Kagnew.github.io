import "../css/common.css";
function NavBar(props) {

    let commonLang = props.othrTxt[props.propLang]["common"];
    return (
        <nav className="navbar navbar-expand-lg  navbar-light  sticky-top">
            <div className="container-fluid ">
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse bg-light" id="navbarNav">
                    <div className=" col-6 col-md-12 ">
                        <ul className="navbar-nav">
                            <li>
                                <a className="navbar-brand" href="/">LOGO HERE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/courts">{commonLang.court}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/courses">{commonLang.course}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/experts">{commonLang.expert}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">{commonLang.about}</a>
                            </li>
                            <li>
                                <select className="form-select" aria-label="Langauge" onChange={(event) =>props.propLangChange(event)}>
                                    <option value="english">English</option>
                                    <option value="french">Français</option>
                                </select>
                            </li>
                            <li className="nav-item">
                                <btn className="btn-danger btn" href="/register">{commonLang.reg_btn}</btn>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}



export default NavBar;