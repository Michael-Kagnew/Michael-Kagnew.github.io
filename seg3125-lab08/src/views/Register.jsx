import { useState } from "react";
import {useHistory} from "react-router-dom";

function Register(props){
    let history = useHistory();
    let displayLang = props.othrTxt[props.propLang]["register"];
    let commonLang = props.othrTxt[props.propLang]["common"];
    let experts = props.propExperts;
    let courses = props.propCourses;
    let courts = props.propCourts;
     

    //This section is for variables that user will edit via inputs
    const [email, setEmail] = useState("");
    const [lName, setLName] = useState("");
    const [FName, setFName] = useState("");
    const [trainer, setTrainer] = useState("");
    const [course, setCourse] = useState("");
    const [court, setCourt] = useState("");
    const [credit, setCredit] = useState("");

    //Variables used to automatically fill in fo
    const packageHandler = (e) =>{
        if(e.target.value == "beginner"){
            setTrainer(experts[0].value);
            setCourse(courses[0].value);
            setCourt(courts[0].value);
        } else if(e.target.value == "intermediate"){
            setTrainer(experts[1].value);
            setCourse(courses[1].value);
            setCourt(courts[1].value);

        } else if (e.target.value == "advanced"){
           setTrainer(experts[2].value);
           setCourse(courses[2].value);
           setCourt(courts[2].value);
        }

    }

    
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

    const fNameValidate = (fname) =>{
        if(!fname){
            alert("Please enter in a first name");
            return false;
        }
        return true;
    }

    const lNameValidate = (lName) =>{
        if(!lName){
            alert("Please enter in a last name");
            return false;
        }
        return true;
    }

    const trainerValidate = (trainer) => {
        if(!trainer){
            alert("Please select a trainer.");
            return false;
        }
        return true;
    }

    const courseValidate = (course) => {
        if(!course){
            alert("Please select a course.");
            return false;
        }
        return true;
    }

    const courtValidate = (court) => {
        if(!court){
            alert("Please select a court.");
            return false;
        }
        return true;
    }

    const ccValidate = (credit_number)=>{
        const credit_regex = new RegExp("^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$");
        let valid_num = credit_regex.test(credit_number);
        if (!valid_num){
            alert("Please enter the correct credit card format, replacing the 'x' with digits:  xxxx xxxx xxxx xxxx");
            return false;
        }
    
        return true;
    }
    const validateAllInputs = () =>{
        let emailCheck = emailValidate(email);
        let fNameCheck = fNameValidate(FName);
        let lNameCheck = lNameValidate(lName);
        let trainerCheck = trainerValidate(trainer);
        let courseCheck = courseValidate(course);
        let courtCheck = courtValidate(court);
        let ccCheck = ccValidate(credit)
        if(emailCheck && fNameCheck && lNameCheck && trainerCheck && courseCheck && courtCheck && ccCheck){
            alert("Thank you for your submission! You will be notified via your email for further information. ")
            history.push("/");
            return true;
        } 
        return false;
    } 

    return(
        <div id='form' className="p-4 mt-5 container margin">
            <p className="display-3 text-center ">{displayLang.title}</p>
            <form action="javascript: void(0);" >
                <div>
                    <p className="h1"></p>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4 vert-spacing">
                        <label className="form-label" htmlFor="FName">{displayLang.fName}</label>
                        <input type="text" className="form-control" id="FName" onChange={(e)=>setFName(e.target.value)}></input>
                    </div>
                    <div className="col-6 col-md-4 vert-spacing">
                        <label className="form-label" htmlFor="LName">{displayLang.lName}</label>
                        <input type="text" className="form-control" id="LName" onChange={(e)=>setLName(e.target.value)}></input>
                    </div>
                    <div className="col-6 col-md-4 vert-spacing">
                        <label className="form-label" htmlFor="Email">{displayLang.email}</label>
                        <input type="email" className="form-control" id="Email" onChange={(event) => setEmail(event.target.value)}></input>
                    </div>
                </div>
                <div>
                    <p className="h4 text-decoration-underline vert-spacing">{displayLang.package}</p>
                </div>
                <div className="row" onChange={(e)=>packageHandler(e)} >
                    <div className="package form-check">
                        <input className="form-check-input" type="radio" name="package" id="beginner" value="beginner"/>
                        <label className="form-check-label" htmlFor="beginner">{commonLang.beginner}</label>
                    </div>
                    <div className="package form-check">
                        <input className="form-check-input"  type="radio" name="package" id="intermediate" value="intermediate"/>
                        <label className="form-check-label" htmlFor="intermediate">{commonLang.inter}</label>
                    </div>
                    <div className="package form-check">
                        <input className="form-check-input"type="radio" name="package" id="advanced" value="advanced"/>
                        <label className="form-check-label" htmlFor="advanced">{commonLang.advanced}</label>
                    </div>
                </div>
                
                <div className="row form-expert mt-3">
                    {experts.map(elem => 
                        ( 
                            <div className="col-lg mb-4 mb-lg-0" key={elem.id}>
                                <div>
                                    <img src={elem.portrait}></img>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" checked={trainer===elem.value} onChange={()=>setTrainer(elem.value)} type="radio" name="expert" id={elem.name[props.propLang]}></input>
                                    <label className="form-check-label" htmlFor={elem.name[props.propLang]}> {elem.name[props.propLang]}</label>
                                </div>
                            </div>
                        )
                    )}
                </div>
                
                <div className="row mt-3 d-flex">
                    <div className="col-6">
                        <label htmlFor="course-select">{commonLang.course}</label>
                        <select class="form-select" onChange={(e)=>setCourse(e.target.value)} aria-label="Default select example" id="course-select" title="Please select a court to practice on.">
                           <option select></option>
                            {courses.map( elem => (
                                <option value={elem.value}  selected={elem.value === course} key={elem.key}>{elem.name[props.propLang]}</option>
                                )
                            )}
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="court-select">{commonLang.court}</label>
                        <select className="form-select" onChange={(e)=>setCourt(e.target.value)} aria-label="Default select example" id="court-select" title="Please select a course to partake in">
                        <option select></option>
                            {courts.map( elem => (
                                <option value={elem.value}  selected={elem.value === court} key={elem.id}>{elem.name[props.propLang]}</option>
                                )
                            )}
                        </select>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <label for="credit" class="form-label">{displayLang.credit}</label>
                        <input type="text" onChange={(e)=>setCredit(e.target.value)} class="form-control" id="credit-card" title="This is only needed in case of last minute cancellation." placeholder="xxxx xxxx xxxx xxxx"/> 
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn-danger btn-lg  mt-3 " onClick={validateAllInputs}>{commonLang.submit}</button>            
                </div>
            </form>
        </div>

    );



}

export default Register;