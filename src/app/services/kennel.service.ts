import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Kennel } from '../models/kennel';
import { APIURL } from '../../../src/environments/environment.prod';

const ApiUrl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
    providedIn: 'root'
})
export class KennelService {
    constructor(private http: HttpClient) { }

    getKennels() {
        return this.http.get(`${APIURL}/Kennel`, { headers: this.getHeaders() });
    }

    getKennel(id: string) {
        return this.http.get(`${APIURL}/Kennel/${id}`, { headers: this.getHeaders() });
    }
    createKennel(kennel: Kennel) {
        return this.http.post(`${APIURL}/Kennel`, kennel, { headers: this.getHeaders() });
    }
    updateKennel(kennel: Kennel) {
        return this.http.put(`${APIURL}/Kennel`, kennel, { headers: this.getHeaders() });
    }
    removeKennel(id: number) {
        return this.http.delete(`${APIURL}/Kennel/${id}`, { headers: this.getHeaders() });
    }
    private getHeaders() {

        return new HttpHeaders().set('Authoriziation', `Bearer ${localStorage.getItem('id_token')}`);

    }
}
