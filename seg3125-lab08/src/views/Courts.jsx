
import Filter from "./Filter";
import { useState } from 'react';

function Courts(props) {
    let commonLang = props.othrTxt[props.propLang]["common"];
    let courtInfo = props.propCourts;

    const [rimType, setRimType] = useState(""); //THE STATES WILL USE ENGLISH LANGUAGE
    const [location, setLocation] = useState("");
    let filterResult;
    let filterData = {
        english: [
            {
                filter: "rim",
                options: ["single", "double"],
                stateFunc: setRimType,
                id: 1
            },
            {
                filter: "location",
                options: ["beach", "park"],
                stateFunc: setLocation,
                id: 2
            }   
        ],
        french:[
        {
            filter: "jante",
            options: ["seul", "double"],
            stateFunc: setRimType,
            id: 3
        },
        {
            filter: "emplacement",
            options: ["parc", "plage"],
            stateFunc: setLocation,
            id: 4

        } 
        ]
    }
 

    let createCard = () =>{
        filterResult =  courtInfo.filter((elem) =>  {
            if(rimType== "" && location == ""){
                return elem;}
            else if (rimType == "") {
                return elem.location[props.propLang] == location 
            } else if (location == "") {
                return elem.rim[props.propLang] == rimType;
            } else {
                return elem.rim[props.propLang] == rimType && elem.location[props.propLang] == location
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
            <p className="display-2 text-center">{commonLang.court}</p>
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
    );
}

export default Courts;
