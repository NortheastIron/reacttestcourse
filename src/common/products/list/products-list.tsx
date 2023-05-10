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
    const [modal, setModal] = useState(false);
    const [submitProduct, setSubmitProduct] = useState(false);

    const createHandler = () => {
        setModal(false);
        setSubmitProduct(false);
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

    function onCreateProduct() {
        if (!modal) {
            setModal(true);
        }
    }

    function modalActionWatcher(res: string) {
        if (res === 'close' && modal) {
            setModal(false);
        }
        // console.log('resM', res);
    }

    function createProductActionWatcher(res: string) {
        console.log('res', res);
        if (res === 'submit') {
            setSubmitProduct(true);
        } else if (res === 'stop') {
            setSubmitProduct(false);
        }
    }


    return (
        <>
            {modal && <Modal title='Create product' disabled={submitProduct} actionWatch={modalActionWatcher}>
                <ProductsCreateProduct onCreate={createHandler} actionWatch={createProductActionWatcher}/>
            </Modal>}
            <div className='products-list'>
                <div className='products-list__management'>
                    <div className='buttons-line'>
                        <button onClick={onCreateProduct}>Create product</button>
                    </div>
                    {/*<div className='filters-line'>*/}
                    {/*    <div>*/}
                    {/**/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
