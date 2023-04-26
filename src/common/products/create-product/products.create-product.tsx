import React, {useState} from "react";

import './styles.scss';
import {typedFastCopy} from "../../../utils";
import {ProductsAddT} from "../services/types/ProductsAddT";
import {ProductsDataProvider} from "../services/products.data-provider";

const addDataExample: ProductsAddT = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
};

interface IProductsCreateProduct {
    onCreate: (res: any) => void;
}

export function ProductsCreateProduct({onCreate}: IProductsCreateProduct) {

    const productDataProvider = new ProductsDataProvider();
    const [value, setValue] = useState('');
    // const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = (event: React.FormEvent) => {

        event.preventDefault();
        setLoading(true);

        const data = typedFastCopy(addDataExample);
        data.title = value;

        return productDataProvider.add(data).then((res) => {
            onCreate(res);
        }).catch(() => {
            setLoading(false);
        });
    };

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <form onSubmit={submitHandler} className='products-create-product'>
            <input disabled={loading} type="text" placeholder='Enter product name...' value={value} onChange={changeValue}/>
            <button disabled={!value || loading} type='submit' className={`${!value || loading ? 'disabled' : ''}`}>Create</button>
        </form>
    );
}
