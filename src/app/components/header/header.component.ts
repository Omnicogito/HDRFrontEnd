import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // isAdmin: boolean;
  // isLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
    // if (localStorage.getItem('user_role') === 'Admin') { this.isAdmin = true; } else { this.isAdmin = false; }

    // if (localStorage.getItem('id_token') != null) { this.isLoggedIn = true; } else { this.isLoggedIn = false; }
  }

  // onSubmitLogout() {
  //   this.auth.logout();
  //   this.ngOnInit();

  // }

}
