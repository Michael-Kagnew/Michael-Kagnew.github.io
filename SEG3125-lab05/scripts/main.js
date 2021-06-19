

$(document).ready(function(){
    
     if($("input[type='radio'][name='specialist']").is(":checked")){


        $('input.timepicker').timepicker({}); //CHANGE THIS

     } else {
        $( "#datepicker" ).datepicker({
            minDate: 0
        });

        $('input.timepicker').timepicker({}); 

     }

    $("input[type='radio']").checkboxradio();
    $("input[type='checkbox']").checkboxradio();
    //Setting the values for each service input dynamically here
    $("#MoveR").val(services["Movement"]);
    $("#Massage").val(services["Massage"]);
    $("#AquaTherapy").val(services["Aqua"]);
    $("#Chiro").val(services["Chiro"]);
    $("#Acupuncture").val(services["Acup"]);

    //Listen to service click, manipulate specialist list
    $("#service_form input").click(function(event){
        let services_selected = [];
        $('#service_form input:checked').each(function() {
            services_selected.push($(this).val());
        });
        showSpecialist(services_selected);        
    });





});

function showSpecialist(services_selected){
    for(let expert in expertInfo){
        //console.log(expert);
        let flag = true;
        services_for_expert = expertInfo[expert]["services"];
        console.log(services_for_expert);
        console.log(services_selected);

        for (let i =0; i < services_selected.length; i++){
            temp_flag = services_for_expert.includes(services_selected[i]);
            // for(let x =0; x < services_for_expert.length; x++)
            if (temp_flag == false){
                flag = false;
                $("#"+expert).parent().hide();
            } 
        }
        if (flag == true){
            $("#"+expert).parent().show();

        }

    }

}

function SpecialistSelection(){
    
    $( "#datepicker" ).datepicker("option", "disabledDates", );


}


function disabledDates(day){

    let specialist = $("input[type='radio'][name='specialist']:checked").val();
    // let specialist = $("#specialists input:checked").val();
    // let specialist = $("#specialists input:checked").attr("value");
    console.log(specialist)
    specialist_days = expertInfo[specialist]["days"];
    
    let flag = false;
    for (let i = 0; i < specialist_days.length; i++){
        if (specialist_days[i] == day.getDay()){
            flag = true;
        }
    }
    return [flag];
}
  