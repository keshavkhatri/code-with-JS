import { Component, OnInit } from '@angular/core';
import { CONTACT_PAGE, SOCIALLINKS } from '../core/system.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  static: object = CONTACT_PAGE;
  socialLinks: object = SOCIALLINKS;

  constructor() { }

  ngOnInit() {
  }

}
