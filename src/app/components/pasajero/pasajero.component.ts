import { Component, OnInit } from '@angular/core';
import { PersonaModel } from '../../models/persona.model';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html'
})
export class PasajeroComponent implements OnInit {

  persona: PersonaModel = new PersonaModel();
  pasajero: any[] = [];


    constructor(private perosona: PersonaService,
                ) {

   }

  ngOnInit(): void {
  }
 


  // tslint:disable-next-line: typedef
  actualizar(form: NgForm){

    this.perosona.nuevoPasajero(this.persona).subscribe(resp =>{
      console.log(resp);
    });

    console.log(form);
    console.log(this.persona);
  }

}
