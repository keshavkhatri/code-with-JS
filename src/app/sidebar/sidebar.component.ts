import { Component, OnInit } from '@angular/core';
import { STATIC_SIDEBAR, SOCIALLINKS } from '../core/system.constants';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    static: any = STATIC_SIDEBAR;
    socialLinks: any = SOCIALLINKS;
    
    constructor() { }

    ngOnInit() {

    }

}
