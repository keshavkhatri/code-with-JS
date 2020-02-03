import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { STATIC_DETAILS } from '../core/system.constants';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    loading:boolean;
    post:any;
    static:any = STATIC_DETAILS;
    pageId:string;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataServiceService
    ) { }

    ngOnInit() {
        this.loading = true;
        this.getPost();
    }

    getPost(){
        this.dataService.post(this.route.snapshot.paramMap.get('id')).subscribe(
            (data: Response)=>{
                console.log(data.body);
                this.post = data.body[0];
                this.pageId = this.route.snapshot.paramMap.get('id');
            },
            (error)=>{

            }
        );
    }

}
