import React from 'react';

import './styles.scss';

import {ProductsList} from './list';
import {Header, IHeaderConfig} from '../../components/header/header';

// interface ProductProps {
//     product: ProductsListT;
    // key: any;
// }

export function Products() {
    // const {loading, error, products} = useProducts();
    /*
    {loading && <Loader />}
        {error && <ErrorMessage error={error}/>}
        {products.map(product => <Products product={product} key={product.id}/>)}
    * */
    // const [details, setDetails] = useState(false);
    // console.log('props', product);
    // const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    // const btnClasses = ['py-2 px-4 border', btnBgClassName];
    const headerConfig: IHeaderConfig = {
        title: 'Products',
        backLink: '/'
    };

    return (
        <div className='products'>
            <Header headerConfig={headerConfig}/>
            <ProductsList/>

            {/*<img src={product.image} alt={product.title}/>*/}
            {/*<p>{product.title}</p>*/}
            {/*<p className='price'>{product.price}</p>*/}
            {/*<button className={btnClasses.join(' ')} onClick={() => setDetails(!details)}>{details ? 'Hide Details' : 'Show Details'}</button>*/}
            {/*{details && <div>*/}
            {/*    {product.description}*/}
            {/*    <p> Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>*/}
            {/*</div>}*/}
        </div>
    );
}
