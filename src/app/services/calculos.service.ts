import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor(private httpClient: HttpClient) { }


  calcularConGET(expression: string, precision: number): Promise<any> {
    return this.httpClient.get(`https://desafio-slingr-nodejs.herokuapp.com/calculos/${expression}/${precision}`).toPromise();
  }

  calcularConPOST(expression: string, precision: number): Promise<any> {
    let datos = {
      expression: expression,
      precision: precision
    }
    return this.httpClient.post(`https://desafio-slingr-nodejs.herokuapp.com/calculos`, datos).toPromise();
  }

}
