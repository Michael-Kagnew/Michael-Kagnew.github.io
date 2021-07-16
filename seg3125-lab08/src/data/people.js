import coach_tay from "../assets/images/rsz_coach_taylor.png";
import coach_nick from "../assets/images/coach_nick_rsz.jpg";
import coach_damian from "../assets/images/coach_damian_rsz.jpg";
import tay_vid from "../assets/videos/taylor_vid.mp4";


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
            name: "fred",
            text: "",
            id: 1
        },
        {
            name: "Claire",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            id: 2
        }
    ]
}

 export let experts = [{
        name: "Coach Taylor",
        portrait:  coach_tay,
        video: tay_vid,
        id: 1
    },
     {
        name: "Coach Nick",
        portrait:  coach_nick,
        video: tay_vid,
        id: 2
    },
    {
        name:"Coach Damin",
        portrait: coach_damian,
        video: tay_vid,
        id : 3
    }
    
]