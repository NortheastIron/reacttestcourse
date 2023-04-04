import React, {useState} from "react";

import './styles.scss';

import {useProducts} from "../../../hooks/products";
import {Loader} from "../../../components/loader/loader";
import {ErrorMessage} from "../../../components/error-message/ErrorMessage";

export function ProductsList() {

    const {loading, error, products} = useProducts();
    const [details, setDetails] = useState<number[]>([]);

    // const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    // const btnClasses = [btnBgClassName];

    return (
        <div className='products-list'>
            {loading && <Loader />}
            {error && <ErrorMessage error={error}/>}
            {
                products.map(product => <div className='products-list__item' key={product.id}>
                    <img src={product.image} alt={product.title}/>
                    <p>{product.title}</p>
                    <p className='price'>{product.price}</p>
                    <button className={details.includes(product.id) ? 'hide' : 'show'} onClick={() => {
                        if (details.includes(product.id)) {
                            setDetails([product.id]);
                        } else {
                            setDetails([product.id]);
                        }
                    }}>{details.includes(product.id) ? 'Hide Details' : 'Show Details'}</button>
                    {details.includes(product.id) && <div>
                        {product.description}
                        <p> Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
                    </div>}
                </div>
                )
            }

            {/*{products.map(product => <Products product={product} key={product.id}/>)}*/}
        </div>
    );
}

/*import React, {useState} from "react";

import './styles.scss';

import {ProductsListT} from "../../models";
import {useProducts} from "../../hooks/products";

interface ProductProps {
    product: ProductsListT;
    // key: any;
}


export function Products({product}: ProductProps) {
    const {loading, error, products} = useProducts();
    /*
    {loading && <Loader />}
        {error && <ErrorMessage error={error}/>}
        {products.map(product => <Products product={product} key={product.id}/>)}
    * */

/*
const [details, setDetails] = useState(false);
// console.log('props', product);
const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
const btnClasses = ['py-2 px-4 border', btnBgClassName];
return (
    <div className='products'>
        <ProductsList/>
        <img src={product.image} alt={product.title}/>
        <p>{product.title}</p>
        <p className='price'>{product.price}</p>
        <button className={btnClasses.join(' ')} onClick={() => setDetails(!details)}>{details ? 'Hide Details' : 'Show Details'}</button>
        {details && <div>
            {product.description}
            <p> Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
        </div>}
    </div>
);
}
*/


/*
import React, {useState} from "react";

import './styles.scss';

import {ProductsList} from "../../models";

interface ProductProps {
    product: ProductsList;
    // key: any;
}


export function Products({product}: ProductProps) {
    const [details, setDetails] = useState(false);
    // console.log('props', product);
    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClasses = ['py-2 px-4 border', btnBgClassName];
    return (
        <div className='products'>
            <img src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <p className='price'>{product.price}</p>
            <button className={btnClasses.join(' ')} onClick={() => setDetails(!details)}>{details ? 'Hide Details' : 'Show Details'}</button>
            {details && <div>
                {product.description}
                <p> Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    );
}
 */
