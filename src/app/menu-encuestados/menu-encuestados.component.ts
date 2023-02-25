import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-encuestados',
  templateUrl: './menu-encuestados.component.html',
  styleUrls: ['./menu-encuestados.component.css']
})
export class MenuEncuestadosComponent {

  constructor(private router:Router){}

  goToEncuesta(){
    this.router.navigate(['/guardar-encuestado']);
  }

  goToResultados(){
    this.router.navigate(['/encuestados']);
  }
}
