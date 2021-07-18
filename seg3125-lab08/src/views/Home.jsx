import "../css/common.css";
import shooting from "../assets/images/shooting.jpg";
import coaching from "../assets/images/coaching2.jpg";
import {Link } from "react-router-dom";

function Home(props) {
    let testiomonials = props.propTesti[props.propLang];
    let display_lang = props.othrTxt[props.propLang]["home"];
    let common_info= props.othrTxt[props.propLang]["common"];
    
    console.log(testiomonials);
    return (
        <div>
            <div className="row  here">
                <div className="d-flex justify-content-center">
                <p className="display-1 company-name " >BasketballCo</p>
                </div>
                <div className="motto  d-flex  justify-content-center">
                        
                    <p className="d-block">{display_lang.motto}</p>
                </div>
                <div id="home-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={coaching} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={shooting} className="d-block w-100 " alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={shooting} className="d-block w-100 " alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex  justify-content-center">
                <Link to="/register"><button className="btn-danger btn-lg mb-3 mt-3 ">{common_info.reg_btn}</button></Link>
            </div>

            <p className="display-1 mt-5 text-center">{display_lang.testimonial}</p>
            <div className="testiomonials ">
                {testiomonials.map(elem => {
                    return (
                        <div className="review" key={elem.key}>
                            <div className="name display-2 fw-bold">
                                <p className=" d-flex justify-content-start ">{elem.name}</p>
                            </div>
                            <div>
                                <p className="fst-italic text-start ms-5">{elem.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>

    )
}


export default Home;