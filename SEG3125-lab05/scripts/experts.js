services = {
    Movement: "MovementR",
    Aqua: "AquaT",
    Chiro: "Chiro",
    Acup: "Acpuncture",
    Massage: "Massage"
}


expertInfo = {
    Michael: {
        days: [1, 2,3],
        services: [services["Aqua"], services["Acup"], services["Movement"]]
    }, 
    Bianca: {
        days: [4, 5],
        services: [services["Massage"], services["Chiro"], services["Movement"]]
    },

    Nikola: {
        days: [1, 3, 5],
        services: [services["Acup"], services["Massage"], services["Chiro"]]
    },
}