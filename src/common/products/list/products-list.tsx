import React, {useEffect, useState} from "react";

import './styles.scss';

import {Loader} from "../../../components/loader/loader";
import {ErrorMessage} from "../../../components/error-message/ErrorMessage";
import {typedFastCopy} from "../../../utils";
import {ProductsListT} from "../services/types/ProductsListT";
import {ProductsDataProvider} from "../services/products.data-provider";
import {Modal} from "../../../components/modal/modal";
import {ProductsCreateProduct} from "../create-product/products.create-product";

export function ProductsList() {

    const productDataProvider = new ProductsDataProvider();
    const [products, setProducts] = useState<ProductsListT[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [modal, setModal] = useState(true);

    const createHandler = (res: any) => {
        console.log('rrr', res);
        setModal(false);
    };

    function fetchProducts() {
        setLoading(true);
        setError('');

        return productDataProvider.list({pagination: {limit: 5}}).then(res => {
            console.log('res', res);
            setProducts(res);
            setLoading(false);
        }).catch(err => {
            console.log('err', err.message);
            setError(err.message);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // const {loading, error, products} = useProducts();
    const [details, setDetails] = useState<number[]>([]);

    function updateDetails(id: number) {
        if (details.includes(id)) {
            setDetails(details.filter(item => item !== id));
        } else {
            let temp: any = typedFastCopy(details);
            temp.push(id);
            setDetails(temp);
        }
    }


    return (
        <>
            {modal && <Modal title='Create product'>
                <ProductsCreateProduct onCreate={createHandler}/>
            </Modal>}
            <div className='products-list'>
                <div className='products-list__management'>
                    <div className='buttons-line'>

                    </div>
                    <div className='filters-line'>

                    </div>
                </div>
                <div className='products-list__list'>
                    {loading && <Loader />}
                    {error && <ErrorMessage error={error}/>}
                    {
                        products.map(product => <div className='products-list__list__item' key={product.id}>
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                                <p className='price'>{product.price}</p>
                                <button className={details.includes(product.id) ? 'hide' : 'show'} onClick={() => {
                                    updateDetails(product.id);
                                }}>{details.includes(product.id) ? 'Hide Details' : 'Show Details'}</button>
                                {details.includes(product.id) && <div>
                                    {product.description}
                                    <p> Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
                                </div>}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
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
