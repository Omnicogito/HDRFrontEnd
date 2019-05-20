import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Doggo } from '../models/doggo';
import { APIURL } from '../../../src/environments/environment.prod';

const ApiUrl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class DoggoService {

  constructor(private http: HttpClient) { }

  getDoggos() {
    return this.http.get(`${APIURL}/Doggo` , { headers: this.getHeaders() });
  }

  getDoggo(id: string) {
    return this.http.get(`${APIURL}/Doggo/${id}` , {headers: this.getHeaders() });
  }

  createDoggo(doggo: Doggo) {
    return this.http.post(`${APIURL}/Doggo`, doggo, {headers: this.getHeaders()});
  }

  updateDoggo(doggo: Doggo) {
    return this.http.put(`${APIURL}/Doggo/` , doggo, { headers: this.getHeaders() });
  }

  removeDoggo( id: number) {
    return this.http.delete(`${APIURL}/Doggo/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }


}
