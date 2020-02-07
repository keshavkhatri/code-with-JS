import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { SYSTEM_CONSTANTS, STATIC_HOME } from '../core/system.constants';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    loading:boolean = false;
    content:any;
    static = STATIC_HOME;
    subscribeForm: FormGroup;
    errorMsg: string;
    successMsg: string;

    constructor(
        private api: DataServiceService,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.loading = true;
        this.getPage();
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

    getPage(){
        this.api.aboutMe().subscribe(
            (data: any) => {
                this.content = data.body[0];
                this.loading = false;
            },
            (error) => {

            }
        )
    }

    hideMessage() {
        setTimeout(() => {
            this.successMsg = '';
            this.errorMsg = '';
        }, 3000);
    }
}   
