import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss']
})
export class PhotographerComponent implements OnInit {

  phofographer = {
    img: './assets/images/Fotografa.PNG',
    name: 'Lleby Zaid',
    email: 'info@llebyzaid.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
