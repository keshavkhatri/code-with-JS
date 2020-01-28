import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { SYSTEM_CONSTANTS, STATIC_HOME } from '../core/system.constants';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    posts: Array<object> = [];
    currentPage: number = SYSTEM_CONSTANTS.DEFAULTPAGE;
    pageSize: number = SYSTEM_CONSTANTS.DEFAULTPAGESIZE;
    static: object = STATIC_HOME;
    length: number = SYSTEM_CONSTANTS.PARALENGTH;
    loading: boolean = false;

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
                this.posts = data.body;
                this.loading = false;
            },
            (error) => {

            }
        )
    }

}
