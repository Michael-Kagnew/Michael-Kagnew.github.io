import coach_tay from "../assets/images/rsz_coach_taylor.png";
import coach_nick from "../assets/images/coach_nick_rsz.jpg";
import coach_damian from "../assets/images/coach_damian_rsz.jpg";
import tay_vid from "../assets/videos/taylor_vid.mp4";
import damin_vid from "../assets/videos/damin_vid.mp4";
import nick_vid from "../assets/videos/nick_vid.mp4";


export let user_testimonials =
{
    english: [{
        name: "fred",
        text: "I've gained the most amount of skill in ball handling and shooting that I ever have. Nowhere could I find a program that can fit all my needs. Thank you so much BasketballCo for your training regiment!",
        id: 1
    },
    {
        name: "Claire",
        text: "As a new player to this sport, I needed something that can help me get accustomed to the way it is played, but at a pace that doesn't make me feel rushed. I stumbled upon BasketballCo and it has been the best decision I've made to join this program. I've learned so much during my time here, and will keep using the program to level up.",
        id: 2
    }
    ],
    french: [
        {
            name: "Fred",
            text: "J'ai acquis le plus d'habiletés dans le maniement du ballon et le tir que j'ai jamais eu. Nulle part je n'ai pu trouver un programme qui puisse répondre à tous mes besoins. Merci beaucoup BasketballCo pour votre régiment d'entraînement !",
            id: 1
        },
        {
            name: "Claire",
            text: "En tant que nouveau joueur dans ce sport, j'avais besoin de quelque chose qui puisse m'aider à m'habituer à la façon dont il est joué, mais à un rythme qui ne me fait pas me sentir pressé. Je suis tombé sur BasketballCo et cela a été la meilleure décision que j'ai prise. J'ai fait pour rejoindre ce programme. J'ai tellement appris pendant mon séjour ici, et je continuerai à utiliser le programme pour passer au niveau supérieur. ",
            id: 2
        }
    ]
}

 export let experts = [{
        name: {
            english: "Coach Taylor",
            french: "Entraîneur Taylor"
        },
        portrait:  coach_tay,
        video: tay_vid,
        value: "tay",
        id: 1
    },
     {
        name:{ 
            english:"Coach Nick",
            french: "Entraîneur Nick"
        },
        portrait:  coach_nick,
        video: nick_vid,
        value: "nick",
        id: 2
    },
    {
        name:{
            english: "Coach Damin",
            french: "Entraîneur Damin"
        },
        portrait: coach_damian,
        video: damin_vid,
        value: "damin",
        id : 3
    }
    
]