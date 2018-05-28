import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private baseApiPath = 'https://viacep.com.br/ws';

  constructor(public http: HttpClient) { }

  public getCep(cep: string): any {
    return this.http.get(`${this.baseApiPath}/${cep}/json`);
  }
}
