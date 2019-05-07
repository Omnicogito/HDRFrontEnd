import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';

const ApiUrl = 'humananddoggo.azurewebsites.net/api';

@Injectable()
export class PersonService {
  constructor(private _http: HttpClient) { }

  getPerson(id: string) {
    return this._http.get(`${ApiUrl}/Person/${id}`, { headers: this.getHeaders() });
  }

  getPersons() {
    return this._http.get(`${ApiUrl}/Person` , { headers: this.getHeaders() });
  }

  createPerson(person: Person) {
    return this._http.post(`${ApiUrl}/Person`, person, { headers: this.getHeaders() });
  }
  updatePerson(person: Person) {
    return this._http.put(`${ApiUrl}/Person`, person, { headers: this.getHeaders() });
  }
  deletePerson(id: number) {
    return this._http.delete(`${ApiUrl}/Person/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

