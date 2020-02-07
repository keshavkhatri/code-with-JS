import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { SYSTEM_CONSTANTS, STATIC_HOME } from '../core/system.constants';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    posts: Array<object> = [];
    currentPage: number = SYSTEM_CONSTANTS.DEFAULTPAGE;
    pageSize: number = SYSTEM_CONSTANTS.DEFAULTPAGESIZE;
    static = STATIC_HOME;
    length: number = SYSTEM_CONSTANTS.PARALENGTH;
    loading: boolean = false;
    subscribeForm: FormGroup;
    errorMsg:string;
    successMsg:string;

    constructor(
        private api: DataServiceService,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.loading = true;
        this.getPosts();
        this.createForm();
    }

    createForm() {
        this.subscribeForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    subscribeFormSubmit() {
        if (this.subscribeForm.invalid) {
            this.errorMsg = this.static.EMAILERROR;
            return;
        }
        this.api.subscribe(this.subscribeForm.value).subscribe(
            (data: any) => {
                this.successMsg = this.static.SUBSCRIBESUCCESS;
                this.subscribeForm.reset();
                this.hideMessage();
            },
            (error) => {
                this.subscribeForm.get('email').setErrors({ 'incorrect': true });
                this.errorMsg = error.error.message;
                this.hideMessage();
            }
        )
    }

    hideMessage(){
        setTimeout(() => {
            this.successMsg = '';
            this.errorMsg = '';
        }, 3000);
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
