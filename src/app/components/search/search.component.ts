import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { PersonaService } from '../../services/persona.service';
import { VuelosService } from '../../services/vuelos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  implements OnInit {

  pasajero: any[] = [];


  constructor(private searchService: SearchService,
              private vuelosService: VuelosService,
              private personaService: PersonaService) { 
  



  }

  ngOnInit(): void {
  }

  buscar(termino: string){

    console.log(termino);
    this.searchService.buscarUsuario(termino)
    .subscribe((data: any) => {
      console.log(data);
      this.pasajero = data;

    });


  }

  actulizarUsuario(pasajero: any){

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
