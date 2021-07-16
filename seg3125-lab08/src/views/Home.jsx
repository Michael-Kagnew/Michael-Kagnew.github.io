import "../css/common.css";
import shooting from "../assets/images/shooting.jpg";
import coaching from "../assets/images/coaching2.jpg";

function Home(props) {
    let testiomonials = props.propTesti[props.propLang];
    let display_lang = props.othrTxt[props.propLang]["home"];
    let common_info= props.othrTxt[props.propLang]["common"];
    
    console.log(testiomonials);
    return (
        <div>
            <p className="display-1 text-center company-name">BasketballCo</p>
            <div className="row here">
                <div className="motto d-flex align-items-center justify-content-center">
                    <p className="">{display_lang.motto}</p><br />
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

            <div className="d-flex test justify-content-center">
                <button className="btn-danger btn-lg mb-3 mt-3 ">{common_info.reg_btn}</button>
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
                                <p className="fst-italic text-start">{elem.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>

    )
}


export default Home;