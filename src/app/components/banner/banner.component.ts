import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner ={
    image: '/assets/images/foto-portada.jpg',
  }

  constructor() {}

  ngOnInit(): void {
      
  }
}
