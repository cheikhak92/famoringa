import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'; 
import {AProposComponent} from './a-propos/a-propos.component';
import {ContactezNousComponent} from './contactez-nous/contactez-nous.component';
import {NosProduitsComponent} from './nos-produits/nos-produits.component';
import {NosEvenementsComponent} from './nos-evenements/nos-evenements.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';
const routes: Routes = [
 {path:'accueil', component: AccueilComponent},
 {path:'propos', component: AProposComponent, data: { animation: 'isPropos' }},
 {path:'evenements', component: NosEvenementsComponent, data: { animation: 'isService' }},
 {path:'produit', component: NosProduitsComponent, data: { animation: 'isEvenements' }},
 {path:'contact', component: ContactezNousComponent, data: { animation: 'isContact' }},
 {path:'temoignage', component: TemoignagesComponent, data: { animation: 'isTemoignage' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
