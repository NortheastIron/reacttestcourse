import {useEffect, useState} from "react";
import {Products} from "../models";

export function useProducts() {
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchProducts() {
        setLoading(true);
        setError('');
        return fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>{
                res.json().then((json) => {
                    setProducts(json);
                    setLoading(false);
                })
            })
            .catch(err => {
                console.log('err', err.message);
                setError(err.message);
                setLoading(false);
            });
    }

    useEffect(() => {
        console.log('effect');
        fetchProducts();
    }, []);

    return {products, error, loading};
}
