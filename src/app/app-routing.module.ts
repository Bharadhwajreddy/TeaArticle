import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { BlockchainbloomComponent } from './blockchainbloom/blockchainbloom.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { EntertbloomComponent } from './entertbloom/entertbloom.component';
import { HomeComponent } from './home/home.component';
import { SportbloomComponent } from './sportbloom/sportbloom.component';
import { SportsComponent } from './sports/sports.component';
import { StockbloomsComponent } from './stockblooms/stockblooms.component';
import { StocksComponent } from './stocks/stocks.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SukeshComponent } from './sukesh/sukesh.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'stock',component:StocksComponent},
  {path:'Blockchain', component:BlockchainComponent},
  {path:'Sports', component:SportsComponent},
  {path:'Entertainment',component:EntertainmentComponent},
  {path:'view', component:ViewComponent,
   children:[
     {path:'stockblooms',component:StockbloomsComponent},
     {path:'blockchainblooms', component:BlockchainbloomComponent},
     {path:'sportblooms', component:SportbloomComponent},
     {path:'entertblooms', component:EntertbloomComponent}
   ]
},
  {path:'sukesh',component:SukeshComponent},
  {path:'subscribe' , component:SubscribeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
