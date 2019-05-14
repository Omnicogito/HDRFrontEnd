import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Human } from '../models/human';

const ApiUrl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class HumanService {
  constructor(private http: HttpClient) { }

  getHumans() {
    return this.http.get(`${ApiUrl}/Human` , { headers: this.getHeaders() });
  }

  getHuman(id: string) {

    return this.http.get(`${ApiUrl}/Human/${id}`, { headers: this.getHeaders() });
  }

  createHuman(human: Human) {
    return this.http.post(`${ApiUrl}/Human`, human, { headers: this.getHeaders() });
  }

  updateHuman(human: Human) {
    return this.http.put(`${ApiUrl}/Human`, human, { headers: this.getHeaders() });
  }
  deleteHuman(id: number) {
    return this.http.delete(`${ApiUrl}/Human/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

 