import rika from "/images/rika.jpg"
import yuta from "/images/yuta.webp"

import sasuke from "/images/sasuke.webp"

import sukuna from "/images/sukuna.jpg"
import mahoraga from "/images/mahoraga.webp"

import tsunade from "/images/tsunade.jpeg"

import naruto from "/images/naruto.webp"
import hinata from "/images/hinata.png"

import sanji from "/images/sanji.webp"


type reviews  = {
    reviewContent: string
    name: string
}

type couple = {
    user: "couple"
    partner1Image:  string
    partnet2Image:  string
} & reviews

type vendor = {
    user: "vendor"
    vendorImage: string
    profession: string
} & reviews

export type reveiwsType = (couple | vendor)

export const reveiwsData: reveiwsType[] =  [
    {
        user: "couple",
        partner1Image: yuta,
        partnet2Image: rika,
        reviewContent: "Our wedding was a dream come true, thanks to the amazing vendors at Amor Rendezvous. From the stunning venue to the delicious cake, everything was perfect. Highly recommend!",
        name: "Yuta & Rika"
    },
    {
        user: "vendor",
        vendorImage: sasuke,
        profession: "Photographer",
        reviewContent: "Amor Rendezvous has been a boon for my photography business. Couples can easily browse through my portfolio, making it simpler for them to envision their wedding day. A fantastic platform for vendors",
        name: "Sasuke"
    },
    {
        user: "couple",
        partner1Image: sukuna,
        partnet2Image: mahoraga,
        reviewContent: "Amor Rendezvous made planning our wedding a breeze. The vendor options were diverse, and the map feature helped us find the perfect venue. Our special day wouldn't have been the same without it",
        name: "Sukuna & Mahoraga"
    },
    {
        user: "vendor",
        vendorImage: tsunade,
        profession: "Makeup Artist",
        reviewContent: "As a makeup artist, Amor Rendezvous has been a game-changer for my business. Connecting with couples who appreciate my artistry has been fulfilling. The platform truly understands the needs of both couples and vendors.",
        name: "Lady Tsunade"
    },
    {
        user: "couple",
        partner1Image: naruto,
        partnet2Image: hinata,
        reviewContent: "From finding vendors to organizing our guest list, Amor Rendezvous simplified the entire wedding planning process. It's a comprehensive platform that every couple should use",
        name: "Naruto & Hinata"
    },
    {
        user: "vendor",
        vendorImage: sanji,
        profession: "Caterer",
        reviewContent: "Collaborating with couples on Amor Rendezvous has been incredible. I'm a caterer, and the platform's interface made it easy to showcase my menus. The positive feedback from couples is the best reward.",
        name: "Sanji"
    }
]