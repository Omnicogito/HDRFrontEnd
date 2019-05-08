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
    return this.http.get(`${ApiUrl}/Person` , { headers: this.getHeaders() });
  }

  getPerson(id: string) {
    return this.http.get(`${ApiUrl}/Person/${id}`, { headers: this.getHeaders() });
  }

  createPerson(person: Person) {
    return this.http.post(`${ApiUrl}/Person`, person, { headers: this.getHeaders() });
  }
  updatePerson(person: Person) {
    return this.http.put(`${ApiUrl}/Person`, person, { headers: this.getHeaders() });
  }
  deletePerson(id: number) {
    return this.http.delete(`${ApiUrl}/Person/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

