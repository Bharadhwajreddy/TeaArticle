import { Component, OnInit,Input } from '@angular/core';
import { articleDetails } from '../models/articleData';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {

  @Input() articleObject: articleDetails={
    articleHead:'its a titte',
    articleTitle:'hello hii lorem ipsum',
    articletImage:'https://image.shutterstock.com/image-photo/two-green-brinal-three-white-260nw-386559169.jpg',
    Description:'xsrxdr akjlefklj lkjfsf fsdjllb slugdlgjb lshgfhbhgbhs slgsbg'
     }  

}


 