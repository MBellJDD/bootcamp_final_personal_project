import { Injectable } from '@angular/core';
import FotografoModel from '../models/fotografoModel';
import { MainService } from './main.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fotografos } from '../fotografos';

@Injectable({
  providedIn: 'root',
})
export class FotografosService {
  //   //Esta URL obtiene el listado de todos los fotografos en el backend
  //   private baseURL = "http://localhost:8080/api/fotografos";

  //   constructor(private httpClient : HttpClient){ }
  //   //Este método me sirve para obtener los empleados
  // getFotografos():Observable<Fotografos[]>{
  //     return this.httpClient.get<Fotografos[]>(`${this.baseURL}`);
  //   }
  // }

  public service: MainService;
  constructor(private HttpClient: HttpClient) {}
  public async GetFotografos(): Promise<FotografoModel[]> {
    return await this.service.HttpGet('/fotografos');
  }
}
