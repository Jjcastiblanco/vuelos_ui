import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModel } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persona: PersonaModel = new PersonaModel();

 private url = 'http://localhost:8080/vuelos/personas';

  constructor(private http: HttpClient) { }

  nuevoPasajero( persona: PersonaModel){

    return this.http.put(`${this.url}/update`, persona);
  }


  borrarPasajero(persona: PersonaModel){

    return this.http.delete(`${this.url}/delete/${persona.idpasajero}`);
  }


}
