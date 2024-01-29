import rika from "/images/rika.jpg"
import yuta from "/images/yuta.webp"


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
        vendorImage: yuta,
        profession: "Photographer",
        reviewContent: "Working with Amor Rendezvous was a fantastic experience! The platform made it easy to connect with couples, and the support from the team was outstanding. Looking forward to more collaborations!",
        name: "Yuta"
    },
    {
        user: "couple",
        partner1Image: yuta,
        partnet2Image: rika,
        reviewContent: "Amor Rendezvous made planning our wedding a breeze. The vendor options were diverse, and the map feature helped us find the perfect venue. Our special day wouldn't have been the same without it",
        name: "Sukuna & Mahoraga"
    }
]