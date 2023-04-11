import {useEffect, useState} from "react";
import {ProductsListT} from "../common/products/services/types/ProductsListT";

export function useProducts() {
    const [products, setProducts] = useState<ProductsListT[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchProducts() {
        setLoading(true);
        setError('');
        return fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>{
                res.json().then((json) => {
                    console.log('jss', json);
                    setProducts(json);
                    setLoading(false);
                });
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
