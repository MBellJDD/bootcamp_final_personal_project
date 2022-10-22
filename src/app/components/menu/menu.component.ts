import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title = 'SEMEYES DOGS';
  subtitle: string = '-PET PHOTOGRAPHY -';

  constructor() { }

  ngOnInit(): void {
  }

}
