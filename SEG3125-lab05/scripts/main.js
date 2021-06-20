

$(document).ready(function(){
    $( "#datepicker" ).datepicker({
        minDate: 0
    });

    $('input#timepicker').timepicker({}); 
    $("input[type='radio']").checkboxradio();
    $("input[type='checkbox']").checkboxradio({
        icon: true,
        classes:{
            // "ui-checkboxradio-icon": custom 
        }
    });

    $("#form-submit").click(function(){
        checkSubmission();
    })
    $("select").selectmenu();
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

    //Listen to specialist selection and edit the calendar and time availability
    $("#specialists input[type='radio']").click(function(){
        if($(this).is(":checked")){
            specialistSchedule();
        }
    })


    $("#credit-card").tooltip({
        classes: {
            "ui-tooltip": "ui-corner-all tooltip-shadow"
          }
    });


});

//Manipulate which specialist shown depending on service clicked
function showSpecialist(services_selected){

    //Need to reset the datepicker
    $( "#datepicker" ).datepicker("option", "beforeShowDay", null);

    for(let expert in expertInfo){ //Going through the experts, seeing if they have the same services as selected.
        let flag = true;
        services_for_expert = expertInfo[expert]["services"];


        for (let i =0; i < services_selected.length; i++){
            temp_flag = services_for_expert.includes(services_selected[i]);
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

//
function specialistSchedule(){
    
    $( "#datepicker" ).datepicker("option", "beforeShowDay", availableDates);
    availableTime();

}


function availableDates(day){
    let specialist = $("input[type='radio'][name='specialist']:checked").val();
    let specialist_days = expertInfo[specialist]["days"];
    
    let flag = false;
    for (let i = 0; i < specialist_days.length; i++){
        if (specialist_days[i] == day.getDay()){
            flag = true;
        }
    }
    return [flag];
}


function availableTime(){
    let specialist = $("input[type='radio'][name='specialist']:checked").val();
    let specialist_min_time = expertInfo[specialist]["minTime"];
    let specialist_max_time = expertInfo[specialist]["maxTime"];
    
    //Removing the default timepicker, and then will add the new one with different time for specialist.
    $("input#timepicker").remove();
    $("label[for='timepicker']").after(
        "<input id='timepicker' class='form-control'></input>"
        );

    $('input#timepicker').timepicker({
        timeFormat: 'hh:mm p',
        minTime: specialist_min_time ,
        maxTime: specialist_max_time,
        interval: 30
    });
}

//Attached to submit button of the form
function checkSubmission(){
    let credit_card_num = $("#credit-card").val();
    console.log(credit_card_num);
    creditCardFormat(credit_card_num);
}

function creditCardFormat(creditNumber){
    const credit_regex = new RegExp("^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$");
    

    let valid_num = credit_regex.test(creditNumber);
    if (!valid_num){
        alert("incorrect credit card format, please have it in the xxxx xxxx xxxx xxxx format.");
    }
}