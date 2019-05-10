import { Injectable } from "@angular/core";
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHeaders } from '@angular/common/http';

const ApiURl = 'https://humananddoggo.azurewebsites.net/api';

@Injectable({
    providedIn: 'root'
})
export class KennelService {
    constructor(private http: HttpClient) { }

    getKennels() {
        return this.http.get(`${ApiURl}/Kennel` , {headers: this.getHeaders()  });
    }

    createKennel(Kennel: Kennel) {
        return this.http.post(`${ApiURl}/Kennel` , Kennel, {headers: this.getHeaders()});
    }
    getKennel(id: string) {
        return this.http.get(`${ApiURl}/Kennel/${id}` , {headers: this.getHeaders()});
    }
    updateKennel(kennel: Kennel) {
        return this.http.put(`${ApiUrl}/Kennel` , kennel, { headers: this.getHeaders()});
    }
    removeKennel(id: number) {
        return this.http.delete(`${ApiURl}/Kennel/${id}` , {header: this.getHeaders()});
    }
    private getHeaders(){
        return new HttpHeaders().set('Authoriziation', `Bearer ${localStorage. getItem('id_token')}`);
    }
}