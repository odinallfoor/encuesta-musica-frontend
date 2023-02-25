import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaEncuestadosComponent} from "./lista-encuestados/lista-encuestados.component";
import {GuardarEncuestadoComponent} from "./guardar-encuestado/guardar-encuestado.component";
import {MenuEncuestadosComponent} from "./menu-encuestados/menu-encuestados.component";

const routes: Routes = [
  {path:'encuestados', component:ListaEncuestadosComponent},
  {path:'',redirectTo:'menu',pathMatch:'full'},
  {path:'guardar-encuestado', component: GuardarEncuestadoComponent},
  {path:'menu', component:MenuEncuestadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
