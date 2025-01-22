import following from "@/assets/pictures/projects/ufood/following.png";
import ufood_filter from "@/assets/pictures/projects/ufood/ufood_filter.png";
import ufood_home from "@/assets/pictures/projects/ufood/ufood_home.png";
import ufood_home_map from "@/assets/pictures/projects/ufood/ufood_home_map.png";
import ufood_home_mobile from "@/assets/pictures/projects/ufood/ufood_home_mobile.png";
import ufood_profile from "@/assets/pictures/projects/ufood/ufood_profile.png";
import ufood_restaurant from "@/assets/pictures/projects/ufood/ufood_restaurant.png";
import ufood_restaurant_map from "@/assets/pictures/projects/ufood/ufood_restaurant_map.png";
import ufood_restaurant_mobile from "@/assets/pictures/projects/ufood/ufood_restaurant_mobile.png";
import home_restau_search from "@/assets/pictures/projects/ufood/home_restau_search.png";
import home_user_search from "@/assets/pictures/projects/ufood/home_user_search.png";
import tictactoe_1 from "@/assets/pictures/projects/tic_tac_toe/tictactoe_1.png";
import tictactoe_2 from "@/assets/pictures/projects/tic_tac_toe/tictactoe_2.png";
import solidium_about_us from "@/assets/pictures/projects/solidium/solidium_about_us.png";
import solidium_contact_us from "@/assets/pictures/projects/solidium/solidium_contact_us.png";
import solidium_home from "@/assets/pictures/projects/solidium/solidium_home.png";
import solidium_services from "@/assets/pictures/projects/solidium/solidium_services.png";
import solidium_services_mobile from "@/assets/pictures/projects/solidium/solidium_services_mobile.png";
import solidium_contact_us_mobile from "@/assets/pictures/projects/solidium/solidium_contact_us_mobile.png";
import solidium_home_mobile from "@/assets/pictures/projects/solidium/solidium_home_mobile.png";

export interface MediaContent {
    url: string;
    isImage: boolean;
}

export interface Project {
    id: number;
    title: string;
    technologies: string[];
    thumbnail: string;
    description: string;
    mediaContent: MediaContent[];
    github: string;
    demo: string;
}


const vuejs: string = "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg";
const bootstrap: string = "https://cdn-icons-png.flaticon.com/512/5968/5968672.png";
const javascript: string = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png";
const java: string = "https://www.vectorlogo.zone/logos/java/java-vertical.svg";
const javafx: string = "https://avatars.githubusercontent.com/u/43116912";
const tailwindcss: string = "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg";
const typescript: string = "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg";

export const ufoodMediaContent: MediaContent[] = [
    {url: ufood_home, isImage: true},
    {url: ufood_filter, isImage: true},
    {url: ufood_home_map, isImage: true},
    {url: home_restau_search, isImage: true},
    {url: home_user_search, isImage: true},
    {url: ufood_restaurant, isImage: true},
    {url: ufood_restaurant_map, isImage: true},
    {url: ufood_profile, isImage: true},
    {url: following, isImage: true},
    {url: ufood_home_mobile, isImage: true},
    {url: ufood_restaurant_mobile, isImage: true}
];

export const ufoodTechStack: string[] = [
    vuejs,
    javascript,
    bootstrap
];

export const tictactoeMediaContent: MediaContent[] = [
    {
        url: tictactoe_1,
        isImage: true
    },
    {
        url: tictactoe_2,
        isImage: true
    }
]

export const tictactoeTechStack: string[] = [
    java,
    javafx
]


export const solidiumMediaContent: MediaContent[] = [
    {
        url: solidium_home,
        isImage: true
    },
    {
        url: solidium_services,
        isImage: true
    },
    {
        url: solidium_about_us,
        isImage: true
    },
    {
        url: solidium_contact_us,
        isImage: true
    },
    {
        url: solidium_home_mobile,
        isImage: true
    },
    {
        url: solidium_services_mobile,
        isImage: true
    },
    {
        url: solidium_contact_us_mobile,
        isImage: true
    }
]

export const solidiumTechStack: string[] = [
    vuejs,
    typescript,
    tailwindcss
]