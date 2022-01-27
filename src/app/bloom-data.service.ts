import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { bloomDetails } from './models/bloomData';
@Injectable({
  providedIn: 'root'
})
export class BloomDataService {

  constructor(private hc:HttpClient) { }

  getBloomdata():Observable<bloomDetails[]>{
    return this.hc.get<bloomDetails[]>("/assets/blooms.json")
  }
}
 