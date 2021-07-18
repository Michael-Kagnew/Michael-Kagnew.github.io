import "../css/common.css";
import logo from "../assets/images/logo_tr.png";
import court_icon from "../assets/images/court.png";
import course_icon from "../assets/images/course.png";
import coach_icon from "../assets/images/coach.png";
import about_icon from "../assets/images/about.png";
import {Link} from "react-router-dom";
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
                                <Link to="/" className="navbar-brand"><img src={logo} width="70px"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/courts"><img src={court_icon}></img>{commonLang.court}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses"><img src={course_icon}></img>{commonLang.course}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/experts"><img src={coach_icon}></img>{commonLang.expert}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><img src={about_icon}></img>{commonLang.about}</Link>
                            </li>
                            <li>
                                <select className="form-select mt-3" aria-label="Langauge" onChange={(event) =>props.propLangChange(event)}>
                                    <option value="english">English</option>
                                    <option value="french">Français</option>
                                </select>
                            </li>
                            <li className="nav-item">
                                <Link to="/register"><btn className="btn-danger btn mt-3 ">{commonLang.reg_btn}</btn></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}



export default NavBar;