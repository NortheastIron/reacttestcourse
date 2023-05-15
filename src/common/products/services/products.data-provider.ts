import {FirstDataProvider, IFirstDataProvider} from '../../../utils/data-provider/first-data-provider';
import {
    ProductsListT,
    ProductsInfoT,
    ProductsAddT,
    ProductsUpdateT
} from './types';

export interface IProductsDataProvider extends IFirstDataProvider<ProductsListT, ProductsInfoT, ProductsAddT, ProductsUpdateT> {}

export class ProductsDataProvider extends FirstDataProvider<ProductsListT, ProductsInfoT, ProductsAddT, ProductsUpdateT>
    implements IProductsDataProvider {

    constructor() {
        super();
        this.setApiUrl('https://fakestoreapi.com/products');
    }
}
