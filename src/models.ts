export type ProductRating = {
    rate: number;
    count: number;
}

export type Products = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
}

// export interface IProduct {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating:
// }
