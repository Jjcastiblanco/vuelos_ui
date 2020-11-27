
import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../../services/vuelos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  datos: any[] = [];

  constructor(private vuelos: VuelosService ) {


    this.vuelos.getNewVuelos().subscribe((data: any) =>{
      console.log(data);
      this.datos = data;

    });


   }

  ngOnInit(): void {
  }

}
