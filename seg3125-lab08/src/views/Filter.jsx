

function Filter(props){

    const filterOptions = props.filterData[props.propLang];
    const commonLang = props.othrTxt;
return(
    <div className="bg-light d-inline-block pe-4">
        <div className="h3 fw-bold ">{commonLang.filter}</div>
        <div className="row">
        {filterOptions.map(elem => (
                <div className="mb-3">
                    <div className="fw-bold">{elem.filter}</div>
                    {elem.options.map(e => (
                        <div>
                        <input className="form-check-input" type="radio" id={e} name={elem.filter} value={e} onChange={(e) =>elem.stateFunc(e.target.value)}></input> 
                        <label className="form-check-label" htmlFor={e}>{e}</label> 
                        </div>
                    ))}
                </div>
        ))}
            </div>
        
    </div>
);
}

export default Filter;