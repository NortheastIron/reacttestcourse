import {useEffect, useState} from "react";

export interface IFirstDataProvider<ListObject, InfoObject, AddObject, UpdateObject> {
    setApiUrl(url: string): void;
    list(): Promise<ListObject[]>;
    get(): Promise<InfoObject>;
    add(): Promise<AddObject>;
    update(): Promise<UpdateObject>;
}

export abstract class FirstDataProvider<ListObject = {}, InfoObject = {}, AddObject = {}, UpdateObject = {}>
    implements IFirstDataProvider<ListObject, InfoObject, AddObject, UpdateObject> {

    protected url: string;

    protected updateMethod = 'PUT';
    // protected patchMethod = 'PATCH';
    protected addMethod = 'POST';
    protected removeMethod = 'DELETE';

    protected constructor() {
        this.url = '';
    }

    public setApiUrl(url: string) {
        this.url = url;
        if (this.url[this.url.length - 1] === '/') {
            this.url = this.url.slice(0, -1);
        }
    }

    public list(params: IListParams): Promise<ListObject[]> {
        return fetch().then(() => ([]));
    }

    public get(params: IGetParams): Promise<InfoObject> {
        return fetch().then(() => ({}));
    }

    public add(item: AddObject, params: IAddParams): Promise<AddObject> {
        return fetch();
    }

    public update(item: UpdateObject, params: IUpdateParams): Promise<UpdateObject> {
        return fetch();
    }

}
