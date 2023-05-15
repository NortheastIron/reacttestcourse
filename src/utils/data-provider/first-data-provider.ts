import {useEffect, useState} from 'react';
import {ICollectionParams, IResourceParams} from './models';
import {MethodsRequest} from './enums';

export interface IFirstDataProvider<ListObject, InfoObject, AddObject, UpdateObject> {
    setApiUrl(url: string): void;
    list(collectionParams?: ICollectionParams, resourceParams?: IResourceParams): Promise<ListObject[]>;
    get(resourceParams?: IResourceParams): Promise<InfoObject>;
    add(item: AddObject, resourceParams?: IResourceParams): Promise<InfoObject>;
    update(item: UpdateObject, resourceParams?: IResourceParams): Promise<InfoObject>;
}

export abstract class FirstDataProvider<ListObject = {}, InfoObject = {}, AddObject = {}, UpdateObject = {}>
    implements IFirstDataProvider<ListObject, InfoObject, AddObject, UpdateObject> {

    protected url: string;

    // protected updateMethod = 'PUT';
    // protected patchMethod = 'PATCH';
    // protected addMethod = 'POST';
    // protected removeMethod = 'DELETE';

    protected constructor() {
        this.url = '';
    }

    public setApiUrl(url: string) {
        this.url = url;
        if (this.url[this.url.length - 1] === '/') {
            this.url = this.url.slice(0, -1);
        }
    }

    public get apiUrl(): string {
        return this.url;
    }

    public list(collectionParams: ICollectionParams = {}, resourceParams: IResourceParams = {}): Promise<ListObject[]> {
        return fetch(this.updateUrl(resourceParams, collectionParams)).then(res => res.json());
    }

    public get(resourceParams: IResourceParams = {}): Promise<InfoObject> {
        return fetch(this.updateUrl(resourceParams)).then(res => res.json());
    }

    public add(item: AddObject, resourceParams: IResourceParams = {}): Promise<InfoObject> {
        return fetch(this.updateUrl(resourceParams), {
            method: MethodsRequest.addMethod,
            body: JSON.stringify(item)
        }).then(res => res.json());
    }

    public update(item: UpdateObject, resourceParams: IResourceParams = {}): Promise<InfoObject> {
        return fetch(this.updateUrl(resourceParams), {
            method: MethodsRequest.updateMethod,
            body: JSON.stringify(item)
        }).then(res => res.json());
    }

    private updateUrl(resourceParams: IResourceParams = {}, collectionParams: ICollectionParams = {}): string {
        let result = this.apiUrl;

        if (resourceParams) {
            Object.keys(resourceParams).forEach((key) => {
                let val = resourceParams[key];
                result = result.replace(new RegExp('{' + key + '}', 'g'), val);
            });
            if (resourceParams.id && this.apiUrl.indexOf('{id}') === -1) {
                if (result[result.length - 1] !== '/') {
                    result += '/';
                }
                result += resourceParams.id;
            }
        }

        if (collectionParams) {
            let colParArr: string[] = [];

            if (collectionParams.filters) {
                Object.keys(collectionParams.filters).forEach(key => {
                    colParArr.push(`${key}=${collectionParams.filters && collectionParams.filters[key]}`);
                });
            }

            if (collectionParams.pagination && collectionParams.pagination.limit) {
                colParArr.push(`limit=${collectionParams.pagination.limit}`);
            }

            if (collectionParams.sorting) {
                collectionParams.sorting.forEach(item => {
                    colParArr.push(`sort=${item.field ? item.field + ',' + item.direction : item.direction}`)
                });
            }

            if (colParArr.length !== 0) {
                result += '?' + colParArr.join('&');
            }
        }

        return result;
    }

}
