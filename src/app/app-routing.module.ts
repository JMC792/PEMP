import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { FeaturesComponent } from './features/features.component';
import { MortgageComponent } from './features/mortgage/mortgage.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Connect', component: ConnectComponent},
  {path: 'Features', component: FeaturesComponent},
  {path: 'Mortgage', component: MortgageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
