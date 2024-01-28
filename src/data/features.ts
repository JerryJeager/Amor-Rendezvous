import invites from "/images/invitations.svg"
import venueMap from "/images/venue-map.svg"
import collaborations from "/images/collaborators.svg"


export type featuresType = {
    image: string
    title: string
    content: string
    bg: string
}

export const featuresContent: featuresType[] = [
    {
        image: invites,
        title: "Sending invites",
        content: "Effortlessly invite your guests with our intuitive invitation system. Choose from a variety of designs and personalize your invites to match the theme of your special day.",
        bg: "#e9f5db"
    },
    {
        image: venueMap,
        title: "Show Wedding Venue in Map",
        content: "Explore and visualize potential wedding venues on an interactive map. Get a sense of the location's charm and plan the perfect setting for your celebration.",
        bg: "#fadde1"
    },
    {
        image: collaborations,
        title: "Locating Vendors",
        content: "Discover the finest vendors for your wedding needs. Our platform makes it easy to find and connect with trusted vendors, ensuring a seamless and stress-free planning process.",
        bg: "#ede0d4"
    }
]