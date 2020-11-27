import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PasajeroComponent } from '../components/pasajero/pasajero.component';
import { PersonaModel } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  persona: PersonaModel = new PersonaModel();

  constructor(private http: HttpClient) { 

    console.log('servicios ok');
  }

  // tslint:disable-next-line: typedef
  getNewVuelos() {

    return this.http.get('http://localhost:8080/vuelos/vuelo/all');
  }

  // tslint:disable-next-line: typedef
  getPasajeros(id: string){
    return this.http.get(`http://localhost:8080/vuelos/personas/pasajeros/${id}`);
  }

  // tslint:disable-next-line: typedef
  updatePasajero(persona: any){

    return this.http.put('http://localhost:8080/vuelos/personas/update', persona);
  }

  
}


