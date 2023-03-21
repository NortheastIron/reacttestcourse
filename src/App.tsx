import React, {createElement as e, useEffect, useState} from 'react';
import {Product} from "./components/Product";
import {Products} from "./models";
// import {products} from "./data";

function App() {
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchProducts() {
        setLoading(true);
        setError('');
        return fetch('https://fakestoreapi2.com/products?limit=5')
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

  return (
    <div className="container mx-auto max-w-2xl pt-10">
        <h1>Hello React</h1>
        {loading && <p className='text-center'>Loading...</p>}
        {error && <p>{error}</p>}
        {products.map(product => <Product product={product} key={product.id}/>)}
        {/*<Product product={products[0]}/>*/}
        {/*<Product product={products[1]}/>*/}
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
