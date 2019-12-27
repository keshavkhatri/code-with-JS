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

    posts() {
        return this.http.get(`${APIS.POSTS}`);
    }
}
