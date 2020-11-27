import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url = 'http://localhost:8080/vuelos/personas';

  constructor(private http: HttpClient) { }

  buscarUsuario(cedula: any ){

    return this.http.get(`${this.url}/${cedula}`);
  

  }
}
