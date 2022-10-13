import { Component, OnInit, Input } from '@angular/core';
import FotografoModel from 'src/app/models/fotografoModel';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Input() img: string = 'Este valor viene del hijo';

public fotografos: FotografoModel[];

  constructor(private service:MainService) {}

async reload(): Promise<void> {
    this.fotografos = await this.service.fotografo.GetFotografos();
  }

  async ngOnInit(): Promise<void> {
    await this.reload();
    console.log(this.fotografos);
  }


}
