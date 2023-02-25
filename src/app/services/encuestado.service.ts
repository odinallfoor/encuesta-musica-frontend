import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Encuestado} from "../models/encuestado";

@Injectable({
  providedIn: 'root'
})
export class EncuestadoService {

  // Endpoint listado de todos los encuestados
  private baseURL = "http://localhost:8080/api/v1/encuestados";
  constructor(private httpClient : HttpClient) { }

  getListadoEncuestados():Observable<Encuestado[]>{
    return this.httpClient.get<Encuestado[]>(`${this.baseURL}`);
  }

  guardarEncuestado(encuestado:Encuestado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, encuestado);
  }
}
