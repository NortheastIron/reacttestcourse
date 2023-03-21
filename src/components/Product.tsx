import React, {useState} from "react";
import {Products} from "../models";

interface ProductProps {
    product: Products;
    // key: any;
}


export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false);
    console.log('props', product);
    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClasses = ['py-2 px-4 border', btnBgClassName];
    return (
        <div className='border py-2 px-4 flex flex-col items-center mb-2'>
            <img src={product.image} className='w-1/6' alt={product.title}/>
            <p>{product.title}</p>
            <p className='font-bold'>{product.price}</p>
            <button className={btnClasses.join(' ')} onClick={() => setDetails(!details)}>{details ? 'Hide Details' : 'Show Details'}</button>
            {details && <div>
                {product.description}
                <p> Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    );
}
