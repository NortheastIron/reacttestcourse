import React, {useEffect, useState} from 'react';

import './styles.scss';

import {Loader} from '../../../components/loader/loader';
import {ErrorMessage} from '../../../components/error-message/ErrorMessage';
import {ProductsListT} from '../services/types/ProductsListT';
import {ProductsDataProvider} from '../services/products.data-provider';
import {Modal} from '../../../components/modal/modal';
import {ProductsCreateProduct} from '../create-product/products.create-product';
import {ProductsDetails} from "../details";

export function ProductsList() {

    const productDataProvider = new ProductsDataProvider();
    const [products, setProducts] = useState<ProductsListT[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [modal, setModal] = useState(false);
    const [submitProduct, setSubmitProduct] = useState(false);
    const [formVisible, setFormVisible] = useState<string>('');
    const [detailsId, setDetailsId] = useState<number>(0);

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
            setError(err.message);
            setLoading(false);
        });
    }

    function showDetails(id: number) {
        // if (formVisible === 'create') {
        //     return;
        // }
        setFormVisible('details');

        const tempId = detailsId || id;
        setDetailsId(tempId);
        setModal(true);
    }

    function onCreateProduct() {
        // if (formVisible === 'details') {
        //     return;
        // }
        setFormVisible('create');
        setModal(true);
    }

    function modalActionWatcher(res: string) {
        if (res === 'close' && modal) {
            setModal(false);
            if (formVisible === 'details') {
                setDetailsId(0);
            }
            setFormVisible('');
        }
    }

    function createProductActionWatcher(res: string) {
        console.log('res', res);
        if (res === 'submit') {
            setSubmitProduct(true);
        } else if (res === 'stop') {
            setSubmitProduct(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            {modal && <Modal title='Create product' disabled={submitProduct} actionWatch={modalActionWatcher}>
                {
                    formVisible && (formVisible === 'create')
                        ? <ProductsCreateProduct onCreate={createHandler} actionWatch={createProductActionWatcher}/>
                        : <ProductsDetails id={detailsId}/>
                }
            </Modal>}
            <div className='products-list'>
                <div className='products-list__management'>
                    <div className='buttons-line'>
                        <button className='active-button' onClick={onCreateProduct}>Create product</button>
                    </div>
                </div>
                <div className='products-list__list'>
                    {loading && <Loader />}
                    {error && <ErrorMessage error={error}/>}
                    {
                        products.map(product =>
                            <div className='products-list__list__item' key={product.id}>
                                <div className='products-list__list__item__top'>
                                    <div className='products-list__list__item__top__left'>
                                        <img src={product.image} alt={product.title}/>
                                    </div>
                                    <div className='products-list__list__item__top__right'>
                                        <p>{product.title}</p>
                                    </div>
                                </div>
                                <div className='products-list__list__item__bottom'>
                                    <p className='price'>{product.price}</p>
                                    <button className='active-button' onClick={() => {
                                        showDetails(product.id);
                                    }}>Details</button>
                                </div>
                                {/*<div className='products-list__list__item__bottom'>*/}
                                {/*    <p className='price'>{product.price}</p>*/}
                                {/*    <button className={details.includes(product.id) ? 'hide' : 'show'} onClick={() => {*/}
                                {/*        showDetails(product.id);*/}
                                {/*    }}>{details.includes(product.id) ? 'Hide Details' : 'Details'}</button>*/}
                                {/*</div>*/}
                                {/*{details.includes(product.id) && <div>*/}
                                {/*    {product.description}*/}
                                {/*    <p> Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>*/}
                                {/*</div>}*/}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}
