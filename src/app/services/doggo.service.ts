import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const ApiUrl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class DoggoService {

  constructor(private http: HttpClient) { }

  getDoggos() {
    return this.http.get(`${ApiUrl}/Doggo` , { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
