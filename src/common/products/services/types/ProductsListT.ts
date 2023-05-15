import {ProductRating} from './ProductRatingT';

export type ProductsListT = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
};
