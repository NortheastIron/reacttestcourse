import {ProductRating} from "./ProductRatingT";

export type ProductsInfoT = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
};
