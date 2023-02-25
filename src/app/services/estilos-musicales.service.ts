import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EstilosMusicales} from "../models/estilos-musicales";


@Injectable({
  providedIn: 'root'
})
export class EstilosMusicalesService {

  private baseURL = "http://localhost:8080/api/v1/estilosMusicales";
  constructor(private httpClient : HttpClient) { }

  getListadoEstilosMusicales():Observable<EstilosMusicales[]>{
    return this.httpClient.get<EstilosMusicales[]>(`${this.baseURL}`);
  }
}
