import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PasajerosComponent } from './components/pasajeros/pasajeros.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {FormsModule } from '@angular/forms';

import { from } from 'rxjs';

import { ROUTES } from './app.routes';
import { PasajeroComponent } from './components/pasajero/pasajero.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    PasajerosComponent,
    NavbarComponent,
    PasajeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
