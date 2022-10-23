import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'SEMEYES DOGS';
  subtitle: string = '-PET PHOTOGRAPHY -';
  constructor() { }

  ngOnInit(): void {
  }

}
