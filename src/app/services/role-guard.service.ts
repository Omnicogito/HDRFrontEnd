import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserInfo } from '../models/UserInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  userInfo: UserInfo;

  constructor(
    private router: Router) { }

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((obs) => {
      if (localStorage.getItem('user_role') !== 'Admin') {
        this.router.navigate(['/login']);
        return obs.next(false);
      } else {
        return obs.next(true);
      }
    });
  }
}
