import { useState } from "react";
import Filter from "./Filter";

function Course(props){

    const [skill, setSkill] = useState("");

    const courseInfo = props.propCourses;
    let commonLang = props.othrTxt[props.propLang]["common"];

    const filterData = {
        english: [
            {
            filter: "Skill Level",
            options: ["beginner", "intermediate", "advanced"],
            stateFunc: setSkill
        }
        ],
        french: [
            {
                filter: "Niveau de Compétence",
                options: ["débutant", "intermédiaire", "avancé"],
                stateFunc: setSkill

            }
        ]
    }
    let createCard = () =>{
        let filterResult =  courseInfo.filter((elem) =>  {
            if(skill == ""){
                return elem;
            } else {
                return elem.skill["english"] == skill;
            }
            }
        )
            let to_output = filterResult.map( elem => {return (
                <div className="card mb-5 pb-0" key={elem.id} >
                <img src={elem.portrait} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title fw-bold fs-2">{elem.name[props.propLang]}</p>
                    <p>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + elem.value} aria-expanded="false" aria-controls="collapseExample">
                            {commonLang.show}
                        </button>
                    </p>
                    <div className="collapse" id={elem.value} >
                        <div className="card card-body">
                            {elem.desc[props.propLang]}
                        </div>
                    </div>
                </div>
            </div>
            )})
        return (
            to_output
        )
    }

    
    
    return (
        <div className="container-flex ">
        <p className="display-2 text-center">{commonLang.course}</p>
        <div className="row">
            <div className="col">
            <Filter filterData = {filterData} propLang = {props.propLang} othrTxt = {commonLang}/>
            </div>
            <div className=" col mr-0  ml-auto ">
                    {
                        createCard()
                }
            </div>
        </div>
    </div>
    )
}

export default Course;