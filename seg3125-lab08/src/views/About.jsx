function About(props){

    const commonLang = props.othrTxt[props.propLang]["common"];
    const aboutLang = props.othrTxt[props.propLang]["about"];
    return(
        <div>
            <p className="display-2 text-center mb-5">{commonLang.about}</p>
            
            <div className="justify-content-center d-flex">
                <p className="display-4 text-decoration-underline  mt-5 text-center" >{aboutLang.weDo}</p>
            </div>
            <div className="d-flex justify-content-center">
                <p className="border border-dark border-3  w-50 fs-3 mb-5">{aboutLang.doDesc}</p>
            </div>

            <p className="display-2 text-center mt-3">{aboutLang.goalTtl}</p>
            <p className="fst-italic fs-3 text-center">{aboutLang.goal}</p>

        </div>
    )
}

export default About;