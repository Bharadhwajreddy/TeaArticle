import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { articleDetails } from './models/articleData';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private hc:HttpClient) { 
}
  getArticleData():Observable<articleDetails[]> {
    //get method is used to get data from outside
    return this.hc.get<articleDetails[]>("/assets/articles.json")
  }

}

 