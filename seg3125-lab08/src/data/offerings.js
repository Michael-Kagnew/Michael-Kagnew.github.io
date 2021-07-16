import rap_court from "../assets/images/court_raptor.jpg";
import ash_court from "../assets/images/ash_court.jpg";
import bron_court from "../assets/images/Bron_court.jpg";

export let courts =  [
        {
            name: {
                english: "Raptor Court",
                french: "Raptor Cours"
            }, 
            portrait: rap_court,
            value: "rap_court",
            rim: "single",
            location: "park",
            desc: {
                english: "A vibrant, colour place, this location offers some of the best views into the forest, with the iconic Toronto basketball logo, the pride of Canada's NBA team.",
                french: "Un endroit vibrant et coloré, cet endroit offre certaines des meilleures vues sur la forêt, avec le logo emblématique du basket-ball de Toronto, la fierté de l'équipe NBA du Canada."
            },
            id: 1
        },
        {
            name: {
                english: "Ashbury Court",
                french: "Ashbury Cours"
            },
            portrait: ash_court,
            value: "ash_court",
            rim: "double",
            location: "park",
            desc:{
                english: "A very nice, colourul basketball court filled with the various lines for various shooting ranges, which will help basketball players of all levels find their comfortable range to train their shooting.",
                french: "Un très beau terrain de basket coloré rempli de différentes lignes pour différents pas de tir, qui aidera les basketteurs de tous niveaux à trouver leur terrain de jeu confortable pour s'entraîner au tir.",
            },
            id: 2
        },
        {   
            name: {
                english: "Bron Court",
                french: "Bron Cours"    
            },
            portrait: bron_court,
            value: "bron_court",
            rim: "double",
            location: "beach",
            desc: {
                english: "This court offers some of the best traction, and the best possible view of the cleanest, brightest waters. The fresh ocean air is sure to invigorate your spirits, and really push you to go beyond your limits.",
                french: "Ce court offre l'une des meilleures tractions et la meilleure vue possible sur les eaux les plus propres et les plus brillantes. L'air frais de l'océan vous revigorera à coup sûr et vous poussera vraiment à dépasser vos limites."
            },
            id: 3
        }
        
    ]


export let courses = [
    {

    }
]