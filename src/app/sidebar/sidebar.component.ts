import { Component, OnInit } from '@angular/core';
import { STATIC } from '../core/system.constants';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    static:object = STATIC;
    constructor() { }

    ngOnInit() {
    }

}
