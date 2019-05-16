import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Kennel } from '../models/kennel';

const ApiUrl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
    providedIn: 'root'
})
export class KennelService {
    constructor(private http: HttpClient) { }

    getKennels() {
        return this.http.get(`${ApiUrl}/Kennel` , {headers: this.getHeaders()  });
    }

    createKennel(kennel: Kennel) {
        return this.http.post(`${ApiUrl}/Kennel` , kennel, {headers: this.getHeaders()});
    }
    getKennel(id: string) {
        return this.http.get(`${ApiUrl}/Kennel/${id}` , {headers: this.getHeaders()});
    }
    updateKennel(kennel: Kennel) {
        return this.http.put(`${ApiUrl}/Kennel` , kennel, { headers: this.getHeaders()});
    }
    removeKennel(id: number) {
        return this.http.delete(`${ApiUrl}/Kennel/${id}` , {headers: this.getHeaders()});
    }
    private getHeaders() {
        return new HttpHeaders().set('Authoriziation', `Bearer ${localStorage. getItem('id_token')}`);
    }
}
