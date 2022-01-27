import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from '../article-data.service';
import { BloomDataService } from '../bloom-data.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class CustomModule { }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:any
  blooms:any
  

  constructor(private artobj:ArticleDataService, private blmobj:BloomDataService) { }


   ngOnInit(): void {
    this.artobj.getArticleData().subscribe(
      (data:any)=>{
        this.articles=data
        console.log("it worked man")
      },
      err=>{
        console.log ('error is ', err)
      }

    )

      this.blmobj.getBloomdata().subscribe(
        (data:any)=>{
          this.blooms=data
          console.log('its ok!!!!')
        },
        (err: any)=>{
          console.log ('error is ', err)
        }
  
  
      )
  
}

}