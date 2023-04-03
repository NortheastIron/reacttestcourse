import React, {useState} from "react";

import './styles.scss';
import {ProductsAdd} from "../../models";
import {typedFastCopy} from "../../utils";

const addDataExample: ProductsAdd = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
};

export function CreateProduct() {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = (event: React.FormEvent) => {
        console.log('submit');
        event.preventDefault();
        setLoading(true);

        const data = typedFastCopy(addDataExample);

        data.title = value;

        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => console.log('res!', json));
    };

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <form onSubmit={submitHandler} className='create-product'>
            <input disabled={loading} type="text" placeholder='Enter product name...' value={value} onChange={changeValue}/>
            <button disabled={!value || loading} type='submit' className={`${!value || loading ? 'disabled' : ''}`}>Create</button>
        </form>
    );
}