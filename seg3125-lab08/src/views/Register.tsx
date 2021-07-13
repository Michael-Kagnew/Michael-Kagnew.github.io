import { useRef } from "react";
import { useState } from "react";


function Register(){

    const ref = useRef(null);
    const [email, setEmail] = useState("");
    const [lName, setLName] = useState("");

    
    const emailValidate = (email: string) =>{
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
        let emailCheck = emailValidate(lName);
        if(emailCheck){
            alert("Good input!");
        } 
    } 

    return(
        <div id='form'>
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
                

                <button onClick={validateAllInputs}></button>
            </form>
        </div>

    );



}

export default Register;