import { Injectable } from '@angular/core';
import FotografoModel from '../models/fotografoModel';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotografosService {
  public service: MainService;
  constructor() { }

  public async GetFotografos(): Promise<FotografoModel[]> {
    return await this.service.HttpGet('/fotografos');
  }

}

