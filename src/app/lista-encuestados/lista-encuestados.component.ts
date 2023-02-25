import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Encuestado} from "../models/encuestado";
import {EncuestadoService} from "../services/encuestado.service";

@Component({
  selector: 'app-lista-encuestados',
  templateUrl: './lista-encuestados.component.html',
  styleUrls: ['./lista-encuestados.component.css']
})
export class ListaEncuestadosComponent implements OnInit,AfterViewInit {

  encuestados: Encuestado[];
  constructor(private encuestadoServicio:EncuestadoService, private elementRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'yellow';
  }
  ngOnInit(): void {
    this.obtenerEncuestados();
  }

  private obtenerEncuestados(){
    this.encuestadoServicio.getListadoEncuestados().subscribe(dato => {
      this.encuestados = dato;
      console.log(dato);
    });
  }
}
