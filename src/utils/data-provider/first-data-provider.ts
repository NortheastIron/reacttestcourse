import {useEffect, useState} from "react";
import {ICollectionParams, IResourceParams} from "./models";
import {MethodsRequest} from "./enums";
// import {IRequestParams} from "./models";

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
        return fetch(this.updateUrl(resourceParams)).then(res => res.json());
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

    private updateUrl(params: IResourceParams = {}): string {
        let result = this.apiUrl;

        if (params) {
            Object.keys(params).forEach((key) => {
                let val = params[key];
                result = result.replace(new RegExp('{' + key + '}', 'g'), val);
            });
            if (params.id && this.apiUrl.indexOf('{id}') === -1) {
                if (result[result.length - 1] !== '/') {
                    result += '/';
                }
                result += params.id;
            }
        }

        return result;
    }

}
