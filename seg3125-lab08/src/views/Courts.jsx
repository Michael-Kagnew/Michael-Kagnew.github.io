
import Filter from "./Filter";
function Courts(props) {
    let commonLang = props.othrTxt[props.propLang]["common"];
    let courtInfo = props.propCourts;

    const [rimType, setRimType] = setState("");
    const [location, setLocation] = setState("");
    let filterData = {
        english: [
            {
                rim: "rim",
                single: "Single",
                double: "Double"
            },
            {
                location: "location",
                beach: "beach",
                park: "park"
            }   
        ],
        french:[
        {
            rim: "jante",
            single: "Seul",
            double: "Double"
        },
        {
            location: "emplacement",
            beach: "plage",
            park: "le parc"
        }  
            

        ]
    }

    let createCard = (elem) =>{
        return (
            <div className="card mb-5 pb-0" key={elem.key} style={{ width: "18rem;" }}>
                <img src={elem.portrait} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p className="card-title fw-bold fs-2">{elem.name[props.propLang]}</p>
                    <p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + elem.value} aria-expanded="false" aria-controls="collapseExample">
                            {commonLang.show}
                        </button>
                    </p>
                    <div class="collapse" id={elem.value} >
                        <div class="card card-body">
                            {elem.desc[props.propLang]}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container-flex ">
            <p className="display-2 text-center">{commonLang.court}</p>
            <div className="row">
                <div className="col">
                <Filter filterData = {filterData} filterLang = {commonLang.filter} primaryFunc = {setRimType} secondFunc = {setLocation}/>
                </div>
                <div className=" col mr-0 ml-auto ">
                    <div>
                        {courtInfo.map((elem) =>    
                            {createCard(elem)}
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courts;
