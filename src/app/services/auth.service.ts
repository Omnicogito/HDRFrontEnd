import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/registeruser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../models/userinfo';
import { APIURL } from 'src/environments/environment.prod';

const ApiUrl = 'https://humananddoggo.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: Token;
  public isLoggedIn = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router) { }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  register(regUserData: RegisterUser) {
    return this.http.post(`${APIURL}/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${ApiUrl}/Token`, str)
      .subscribe((token: Token) => {
        this.userInfo = token;
        localStorage.setItem('id_token', token.access_token);
        this.isLoggedIn.next(true);
        this.setCurrentUser();
        this.router.navigate(['/home']);
      });
  }

  setCurrentUser() {
    this.http.get(`${ApiUrl}/api/Account/UserInfo`, { headers: this.setHeader() })
      .subscribe((userRole: UserInfo) => {
        localStorage.setItem('user_role', userRole.Role);
        localStorage.setItem('username', userRole.Username);
        window.location.reload();
      });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.http.post(`${ApiUrl}/api/Account/Logout`, { headers: this.setHeader() });
    this.router.navigate(['/login']);
  }
}
