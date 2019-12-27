import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    posts:Array<object> = [];

    constructor(
        private api: DataServiceService,
    ) { }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.api.posts().subscribe(
            (data:Array<object>) => {
                this.posts = data;
            },
            (error) => {

            }
        )
    }

}
