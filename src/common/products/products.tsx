import React from 'react';

import './styles.scss';

import {ProductsList} from './list';
import {Header, IHeaderConfig} from '../../components/header/header';

export function Products() {
    const headerConfig: IHeaderConfig = {
        title: 'Products',
        backLink: '/'
    };

    return (
        <div className='products'>
            <Header headerConfig={headerConfig}/>
            <div className='products__content'>
                <ProductsList/>
            </div>

        </div>
    );
}
