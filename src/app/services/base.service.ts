import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SYSTEM_CONSTANTS } from '../core/system.constants';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    constructor(
        private http: HttpClient,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    get(url, headers = null) {
        return this.request('GET', url, '');
    }

    post(url = '', data: any = '', headers: any = '') {
        return this.request('POST', url, data, headers);
    }

    put(url = '', data: any = '', headers: any = '') {
        return this.request('PUT', url, data, headers);
    }

    delete(url = '', headers: any = '') {
        return this.request('DELETE', url, headers);
    }

    file(url = '', data: any = '', headers: any = '') {
        return this.request('POST_FILE', url, data, headers);
    }

    request(method = '', url = '', data: any = '', token: any = '', options: any = '') {
        url = `${SYSTEM_CONSTANTS.API_ROOT}${SYSTEM_CONSTANTS.API_VERSION}${url}`;
        if (method == 'POST') {
            return this.http.post(url, data, this.generateOptions(false, options))
        } else if (method == 'POST_FILE') {
            return this.http.post(url, data, this.generateOptions(true, options))
        } else if (method == 'GET') {
            return this.http.get(url, this.generateOptions())
        } else if (method == 'GET_FILE') {
            return this.http.get(url, this.generateOptions())
        } else if (method == 'DELETE') {
            return this.http.delete(url, this.generateOptions())
        } else if (method == 'PUT') {
            return this.http.put(url, data, this.generateOptions())
        } else if (method == 'S3FILEPOST') {
            return this.http.post(url, data)
        }
    }

    generateOptions(fileStatus = false, headers = '') {
        let defaultHeaders;
        let options;
        if (isPlatformBrowser(this.platformId)) {
            if (fileStatus) {
                defaultHeaders = this.createAuthorizationHeader(localStorage.getItem('token'), headers);
                options = { headers: defaultHeaders, 'responseType': 'blob' };
            } else {
                defaultHeaders = this.createAuthorizationHeader(localStorage.getItem('token'), headers);
                options = { headers: defaultHeaders };
            }
        }
        options.observe = 'response';
        return options;
    }

    createAuthorizationHeader(token, addHeaders) {
        let headers: any = {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Cache-Control': 'no-cache',

        };

        if (isPlatformBrowser(this.platformId)) {

        }

        if (addHeaders) {
            let additionalHeaders = JSON.parse(addHeaders);
            Object.keys(additionalHeaders).map(function (key, index) {
                headers[key] = additionalHeaders[key];
            });
        }
        let finalHeaders = new HttpHeaders(
            headers
        );
        return finalHeaders;
    }
}
