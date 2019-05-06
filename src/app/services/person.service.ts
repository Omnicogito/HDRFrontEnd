import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'humananddoggo.azurewebsites.net/api';

@Injectable()
export class PersonService {
  constructor(private _http: HttpClient) { }

  getPersons() {
    return this._http.get(`${ApiUrl}/Human`, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

