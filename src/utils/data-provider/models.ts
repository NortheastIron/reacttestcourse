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
    pagination?: IPagination;
    sorting?: ISorting[];
}

export interface IFilter {
    [others: string]: any;
}

export interface IPagination {
    limit?: number;
}

export interface ISorting {
    field?: string;
    direction: string;
    priority?: number;
}
