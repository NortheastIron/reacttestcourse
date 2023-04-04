export type ProductRating = {
    rate: number;
    count: number;
};

export type ProductsListT = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
};

export type ProductsInfo = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
};

export type ProductsAdd = {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
};

// export interface IProduct {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating:
// }
