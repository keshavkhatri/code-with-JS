import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { APIS } from '../core/system.constants';

@Injectable({
    providedIn: 'root'
})

export class DataServiceService {

    constructor(
        private http: BaseService,
    ) { }

    posts(currentPage, pageSize) {
        return this.http.get(`${APIS.POSTS}?per_page=${pageSize}&page=${currentPage}`);
    }

    post(slug){
        return this.http.get(`${APIS.POSTS}?slug=${slug}`);
    }

    subscribe(data){
        return this.http.post(`${APIS.SUBSCRIBE}`,data);
    }
}
