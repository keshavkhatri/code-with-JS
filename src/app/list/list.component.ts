import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { SYSTEM_CONSTANTS, STATIC_LIST } from '../core/system.constants';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    posts: Array<object> = [];
    currentPage: number = SYSTEM_CONSTANTS.DEFAULTPAGE;
    pageSize: number = SYSTEM_CONSTANTS.DEFAULTPAGESIZE;
    loading: boolean = false;
    static: object = STATIC_LIST;
    totalPages:number;

    constructor(
        private api: DataServiceService,
    ) { }

    ngOnInit() {
        this.loading = true;
        this.getPosts();
    }

    nextPage() {
        this.currentPage += 1;
        this.getPosts();
    }

    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage -= 1;
        }
        this.getPosts();
    }

    getPosts() {
        this.api.posts(this.currentPage, this.pageSize).subscribe(
            (data: any) => {
                this.totalPages = data.headers.get('x-wp-totalpages');
                this.posts = data.body;
                this.loading = false;
            },
            (error) => {

            }
        )
    }
}
