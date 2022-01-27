import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { FooterComponent } from './footer/footer.component';
import { StocksComponent } from './stocks/stocks.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BloomCardComponent } from './bloom-card/bloom-card.component';
import { ViewComponent } from './view/view.component';
import { StockbloomsComponent } from './stockblooms/stockblooms.component';
import { BlockchainbloomComponent } from './blockchainbloom/blockchainbloom.component';
import { SportbloomComponent } from './sportbloom/sportbloom.component';
import { EntertbloomComponent } from './entertbloom/entertbloom.component';
import { SukeshComponent } from './sukesh/sukesh.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscribeComponent,
    ArticleCardComponent,
    FooterComponent,
    StocksComponent,
    BlockchainComponent,
    SportsComponent,
    EntertainmentComponent,
    BloomCardComponent,
    ViewComponent,
    StockbloomsComponent,
    BlockchainbloomComponent,
    SportbloomComponent,
    EntertbloomComponent,
    SukeshComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
