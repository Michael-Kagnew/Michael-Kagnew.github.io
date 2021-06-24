services = {
    Movement: "Movement Rehab",
    Aqua: "Aqua Therapy",
    Chiro: "Chiro",
    Acup: "Acpuncture",
    Massage: "Massage"
}


expertInfo = {
    Michael: {
        days: [1, 2,3],
        services: [services["Aqua"], services["Acup"], services["Movement"]],
        minTime: "12:00pm",
        maxTime: "6:00pm"
    }, 
    Bianca: {
        days: [4, 5],
        services: [services["Massage"], services["Chiro"], services["Movement"]],
        minTime: "8:00am",
        maxTime: "5:00pm"
    },

    Nikola: {
        days: [1, 3, 5],
        services: [services["Acup"], services["Massage"], services["Chiro"]],
        minTime: "9:00am",
        maxTime: "7:00pm"
    },
}