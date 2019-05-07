import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Doggo } from '../models/doggo';

const ApiUrl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class DoggoService {

  constructor(private http: HttpClient) { }

  getDoggos() {
    return this.http.get(`${ApiUrl}/Doggo` , { headers: this.getHeaders() });
  }

  createDoggo(doggo: Doggo) {
    return this.http.post(`${ApiUrl}/Doggos`, doggo, {headers: this.getHeaders()});
  }

  getDoggo(id: string) {
    return this.http.get(`${ApiUrl}/Doggos/${id}` , {headers: this.getHeaders() });
  }

  updateDoggo(doggo: Doggo) {
    return this.http.put(`${ApiUrl}/Doggos` , doggo, { headers: this.getHeaders() });
  }

  removeDoggo( id: number) {
    return this.http.delete(`${ApiUrl}/Doggo/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }


}
