import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VuelosService } from '../../services/vuelos.service';
import { PersonaModel } from '../../models/persona.model';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styles: [
  ]
})
export class PasajerosComponent implements OnInit {

  
  persona: PersonaModel = new PersonaModel();
  pasajero: PersonaModel[] ;


  constructor(private activatedRoute: ActivatedRoute,
              private vuelosService: VuelosService,
              private personaService: PersonaService) { 

    this.activatedRoute.params.subscribe(params => {
     this.vuelosService.getPasajeros(params['id'] ).subscribe((data: any) => {
      console.log(data);
      this.pasajero = data;
     });
    });


  }

  ngOnInit(): void {
  }


  // tslint:disable-next-line: typedef
 actulizarUsuario(pasajero: PersonaModel){

     return this.vuelosService.updatePasajero(pasajero)
     .subscribe((data: any) => {
       console.log(data);
       this.pasajero = data;

     }) ;
 }

 // tslint:disable-next-line: typedef
 borrarUsuario(pasajero: any){

  this.personaService.borrarPasajero(pasajero)
  .subscribe((date: any) => {
    console.log(date);
    this.pasajero = this.pasajero.filter(p => p!==pasajero);
  });
 }

}
