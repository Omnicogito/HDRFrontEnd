import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { human } from '../models/human';

const ApiUrl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class humanService {
  constructor(private http: HttpClient) { }

  gethumans() {
    return this.http.get(`${ApiUrl}/Human` , { headers: this.getHeaders() });
  }

  gethuman(id: string) {
    return this.http.get(`${ApiUrl}/Human/${id}`, { headers: this.getHeaders() });
  }

  createhuman(human: human) {
    return this.http.post(`${ApiUrl}/Human`, human, { headers: this.getHeaders() });
  }
  updatehuman(human: human) {
    return this.http.put(`${ApiUrl}/Human`, human, { headers: this.getHeaders() });
  }
  deletehuman(id: number) {
    return this.http.delete(`${ApiUrl}/Human/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

 