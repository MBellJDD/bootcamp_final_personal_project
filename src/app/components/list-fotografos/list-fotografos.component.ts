import { Component, OnInit } from '@angular/core';
import { Fotografos } from '../../fotografos';
import { FotografosService } from '../../services/fotografos.service';

@Component({
  selector: 'app-list-fotografos',
  templateUrl: './list-fotografos.component.html',
  styleUrls: ['./list-fotografos.component.scss']
})
export class ListFotografosComponent implements OnInit {

  fotografos:Fotografos[];

  constructor(private fotografosService:FotografosService) { }

  ngOnInit(): void {
  //   this.obtenerFotografos();
  // }
  //   private getFotografos(){
  //     this.fotografosService.GetFotografos().subscribe(dato =>{
  //       this.fotografos = dato;
  //     });

    this.fotografos = [{
      "id": 1,
      "name":"lluisgaga",
      "email":"lluisgaga@lluis.com"
    },
    {
      "id": 2,
      "name":"trotsky",
      "email": "trotsky@trotsky.com"
    }];


  }
}
