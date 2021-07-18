import rap_court from "../assets/images/court_raptor.jpg";
import ash_court from "../assets/images/ash_court.jpg";
import bron_court from "../assets/images/Bron_court.jpg";
import shooting from "../assets/images/shooting_course.jpg";
import pr from "../assets/images/pr_course.jpg";
import dribble from "../assets/images/dribbling_prac.jpg"

export let courts =  [
        {
            name: {
                english: "Raptor Court",
                french: "Raptor Cours"
            }, 
            portrait: rap_court,
            value: "rap_court",
            rim: {english:"single", french: "seul"},
            location: {
                english:"park",
                french: "parc"
            },
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
            rim: {english:"double", french:"double"},
            location: {
                english:"park",
                french: "parc"
            },
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
            rim: {english:"double", french:"double"},
            location: {
                english:"beach",
                french: "plage"
            },            desc: {
                english: "This court offers some of the best traction, and the best possible view of the cleanest, brightest waters. The fresh ocean air is sure to invigorate your spirits, and really push you to go beyond your limits.",
                french: "Ce court offre l'une des meilleures tractions et la meilleure vue possible sur les eaux les plus propres et les plus brillantes. L'air frais de l'océan vous revigorera à coup sûr et vous poussera vraiment à dépasser vos limites."
            },
            id: 3
        }
        
    ]


export let courses = [
    {
        name: {
            english: "Shooting Fundamentals",
            french: "Principes de Base du Tir"
        },
        portrait: shooting,
        skill: {
            english: "beginner",
            french: "débutant"
        },
        desc: {
            english: "This shooting course is designed to really help beginners find the correct alignment that will support their physiological build, whilst maintaining the fundamentals that every great shooter follows. It is sure to truly help you start your development.",
            french: "Ce cours de tir est conçu pour vraiment aider les débutants à trouver le bon alignement qui soutiendra leur construction physiologique, tout en maintenant les principes fondamentaux que tout grand tireur suit. Il est sûr de vraiment vous aider à démarrer votre développement."
        },
        value: "beg",
        id: 1
    },
    {
        name: {
            english: "Dissecting the Pick and Roll",
            french: "Disséquer le Sélectionner et Rouleau"
        },
        portrait: pr,
        skill: {
            english: "intermediate",
            french: "intermédiaire"
        },
        desc: {
            english: "The pick and roll is one skill every guard should know to be able to control the flow of the game. In this course, we will go through step by step from initiating the pick and how to orchestrate the roll.",
            french: "Le pick and roll est une compétence que chaque garde devrait connaître pour pouvoir contrôler le déroulement du jeu. Dans ce cours, nous passerons en revue étape par étape de l'initiation du pick et comment orchestrer le roulement."
        }, 
        id: 2,
        value: "inter"
    },

    {
        name: {
            english: "Advanced Dribbling",
            french: "Dribble Avancé"
        },
        portrait: dribble,
        skill: {
            english: "advanced",
            french: "avancé"
        }, 
        desc: {
            english: "Dribbling is an essential part of a game, and the one who can control the ball the best has a huge advantage over the opponent. In this course, we will be going over advanced moves used by professionals to truly expand their capabilities on the court.",
            french: "Le dribble est une partie essentielle d'un jeu, et celui qui peut le mieux contrôler le ballon a un énorme avantage sur l'adversaire. Dans ce cours, nous passerons en revue les mouvements avancés utilisés par les professionnels pour vraiment étendre leurs capacités sur le terrain."
        },
        id: 3,
        value: "advanced"
    }
]