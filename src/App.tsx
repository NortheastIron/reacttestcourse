import React, {createElement as e, useEffect, useState} from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/modal/Modal";
import {CreateProduct} from "./components/create-product/create-product";

function App() {
    const {loading, error, products} = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-10">
        <h1>Hello React</h1>
        {loading && <Loader />}
        {error && <ErrorMessage error={error}/>}
        {products.map(product => <Product product={product} key={product.id}/>)}
        {/*<Product product={products[0]}/>*/}
        {/*<Product product={products[1]}/>*/}
        <Modal title='Create product'>
            <CreateProduct/>
        </Modal>
    </div>
  );

  // return React.createElement('div', {}, [
  //     e('h1', {className: 'font-bold', key: 1}, `TEST, ${count}`),
  //     e('button', {className: 'py-2 px-4 border', key: 2, onClick: () => {
  //         setCount(count + 1);
  //         console.log('clicked', count);
  //         }}, 'click')
  // ]);
}


export default App;
