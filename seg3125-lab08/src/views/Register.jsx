import { useRef } from "react";
import { useState } from "react";


function Register(props){

    const ref = useRef(null);
    const [email, setEmail] = useState("");
    const [lName, setLName] = useState("");
    const [FName, setFName] = useState("");

    
    const emailValidate = (email) =>{
        const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid_email = email_regex.test(email);
        console.log("email");
        if(!valid_email){
            alert("Please enter a valid email address.");
            return false;
        }
        return true;

    }

    const validateAllInputs = () =>{
        let emailCheck = emailValidate(email);
        if(emailCheck){
            alert("Good input!");
        } 
    } 

    return(
        <div id='form' className="p-4 container">
            <p className="display-3 text-center ">Registration Form</p>
            <form >
                <div>
                    <p className="h1"></p>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4 vert-spacing">
                        <label className="form-label" htmlFor="FName">First Name:</label>
                        <input type="text" className="form-control" id="FName"></input>
                    </div>
                    <div className="col-6 col-md-4 vert-spacing">
                        <label className="form-label" htmlFor="LName">Last Name:</label>
                        <input type="text" className="form-control" id="LName"></input>
                    </div>
                    <div className="col-6 col-md-4 vert-spacing">
                        <label className="form-label" htmlFor="Email">Email address</label>
                        <input type="email" className="form-control" id="Email" onChange={(event) => setEmail(event.target.value)}></input>
                    </div>
                </div>
                <div>
                    <p className="h4 text-decoration-underline vert-spacing">Optional: Package</p>
                </div>
                <div className="row">
                    <div className="package form-check">
                        <input className="form-check-input" type="radio" name="package" id="beginner"/>
                        <label className="form-check-label" htmlFor="beginner">Beginner</label>
                    </div>
                    <div className="package form-check">
                        <input className="form-check-input" type="radio" name="package" id="intermediate"/>
                        <label className="form-check-label" htmlFor="intermediate">Intermediate</label>
                    </div>
                    <div className="package form-check">
                        <input className="form-check-input" type="radio" name="package" id="advanced"/>
                        <label className="form-check-label" htmlFor="advanced">Advanced</label>
                    </div>
                </div>
                
                <div className="row form-expert mt-3">
                    {props.propExperts.map(elem => {
                        return( 
                            <div className="col-lg mb-4 mb-lg-0" key={elem.key}>
                                <div>
                                    <img src={elem.portrait}></img>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input " type="radio" name="expert" id={elem.name}></input>
                                    <label className="form-check-label" htmlFor={elem.name}> {elem.name}</label>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="row mt-3 d-flex">
                    <div className="col-6">
                        <label htmlFor="course-select">Court</label>
                        <select class="form-select" aria-label="Default select example" id="course-select" title="Please select a court to practice on.">
                            {props.propCourts.map( elem => (
                                <option value={elem.value} key={elem.key}>{elem.name}</option>
                                )
                            )}
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="court-select">Course</label>
                        <select className="form-select" aria-label="Default select example" id="court-select" title="Please select a course to partake in">
                            {props.propCourses.map( elem => (
                                <option value={elem.value} key={elem.key}>{elem.name}</option>
                                )
                            )}
                        </select>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <label for="credit" class="form-label">Credit Card</label>
                        <input type="text" class="form-control" id="credit-card" title="This is only needed in case of last minute cancellation." placeholder="xxxx xxxx xxxx xxxx"/> 
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn-danger btn-lg  mt-3 " onClick={validateAllInputs}>SUBMIT</button>            
                </div>
            </form>
        </div>

    );



}

export default Register;