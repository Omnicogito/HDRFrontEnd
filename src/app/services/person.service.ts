import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';

const ApiUrl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get(`${ApiUrl}/Human` , { headers: this.getHeaders() });
  }

  getPerson(id: any) {
    return this.http.get(`${ApiUrl}/Human/${id}`, { headers: this.getHeaders() });
  }

  createPerson(person: Person) {
    return this.http.post(`${ApiUrl}/Human`, person, { headers: this.getHeaders() });
  }

  updatePerson(person: Person) {
    return this.http.put(`${ApiUrl}/Human`, person, { headers: this.getHeaders() });
  }

  deletePerson(id: any) {
    return this.http.delete(`${ApiUrl}/Human/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

