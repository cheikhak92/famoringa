import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AProposComponent } from './a-propos/a-propos.component';
import { NosEvenementsComponent } from './nos-evenements/nos-evenements.component';
import { NosProduitsComponent } from './nos-produits/nos-produits.component';
import { ContactezNousComponent } from './contactez-nous/contactez-nous.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AccueilComponent } from './accueil/accueil.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';

@NgModule({
  declarations: [
    AppComponent,
    AProposComponent,
    NosEvenementsComponent,
    NosProduitsComponent,
    ContactezNousComponent,
    AccueilComponent,
    TemoignagesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
