import { Component } from '@angular/core';
import {Encuestado} from "../models/encuestado";
import {EncuestadoService} from "../services/encuestado.service";
import {Router} from "@angular/router";
import swal from 'sweetalert2';
import {EstilosMusicalesService} from "../services/estilos-musicales.service";
import {EstilosMusicales} from "../models/estilos-musicales";

@Component({
  selector: 'app-guardar-encuestado',
  templateUrl: './guardar-encuestado.component.html',
  styleUrls: ['./guardar-encuestado.component.css']
})
export class GuardarEncuestadoComponent {
  encuestado : Encuestado = new Encuestado();
  selectedValue = new EstilosMusicales();
  estilos: EstilosMusicales[];
  

  constructor(private encuestadoServicio:EncuestadoService, private estilosServicio:EstilosMusicalesService, private router:Router){

  }

  guardarEncuestado(){
    console.log('ASD1 => ' + this.encuestado);
    this.encuestadoServicio.guardarEncuestado(this.encuestado).subscribe(dato => {
      console.log(dato);
      //this.mostrarListaEncuestas();
    }, error => console.log(error));
  }

  mostrarListaEncuestas(){
    this.router.navigate(['/encuestados']);
    swal('Encuesta Registrada',`El encuestado ${this.encuestado.email} ha sido registrado con exito`,`success`);
  }

  private obtenerEstilosMusicales(){
    this.estilosServicio.getListadoEstilosMusicales().subscribe(datos =>{
      this.estilos = datos;
    });
  }

  onSubmit(){
    this.guardarEncuestado();
  }

  ngOnInit(): void {
    this.obtenerEstilosMusicales();
  }
}
