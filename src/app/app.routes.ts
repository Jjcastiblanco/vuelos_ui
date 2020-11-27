import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { PasajerosComponent } from './components/pasajeros/pasajeros.component';
import {SearchComponent} from './components/search/search.component';
import { PasajeroComponent } from './components/pasajero/pasajero.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'pasajeros/:id', component: PasajerosComponent},
    {path: 'pasajero', component: PasajeroComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},

];