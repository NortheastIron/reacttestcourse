// export interface IRequestParams {
//     id?: number | string;
//     filters?: IFilter;
//     [others: string]: any;
// }

export interface IResourceParams {
    id?: number | string;
    [others: string]: any;
}

export interface ICollectionParams {
    filters?: IFilter;
}

export interface IFilter {
    [key: string]: any;
}
