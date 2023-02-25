import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEncuestadosComponent } from './lista-encuestados/lista-encuestados.component';
import {HttpClientModule} from "@angular/common/http";
import { GuardarEncuestadoComponent } from './guardar-encuestado/guardar-encuestado.component';
import {FormsModule} from "@angular/forms";
import { MenuEncuestadosComponent } from './menu-encuestados/menu-encuestados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEncuestadosComponent,
    GuardarEncuestadoComponent,
    MenuEncuestadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
