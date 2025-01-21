export interface Project {
    id: number;
    title: string;
    technologies: string[];
    thumbnail: string;
    description: string;
    images: string[];
    github: string;
    demo: string;
}


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

export const ufoodImages: string[] = [
    ufood_home,
    ufood_filter,
    ufood_home_map,
    home_restau_search,
    home_user_search,
    ufood_restaurant,
    ufood_restaurant_map,
    ufood_profile,
    following,
    ufood_home_mobile,
    ufood_restaurant_mobile
];
