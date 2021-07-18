function Experts(props) {
    let commonLang = props.othrTxt[props.propLang]["common"];
    let experts = props.propExperts;

  return (
    <div>
      <p className="display-2 text-center">{commonLang.course}</p>

      <div className="row d-flex justify-content-evenly">
        {experts.map((elem) => {
          return (
            <div className="card col-8 col-lg-3" >
              <img src={elem.portrait} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{elem.name[props.propLang]}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <p className="display-4 text-center mt-5">{commonLang.interview}</p>

        {experts.map((elem)=>(
            <div className="row  mb-5 ">
                <p className="h1 text-center">{elem.name[props.propLang]}</p>
                <div className="col justify-content-center d-flex">
                <video width="80%" height="auto" controls>
                    <source src= {elem.video} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                    </div>

            </div>
        ))}

        
    </div>
  );
}

export default Experts;
