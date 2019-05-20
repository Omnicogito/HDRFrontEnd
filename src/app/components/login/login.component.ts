import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private form: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.form.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value);
    this.router.navigate(['/kennel']);
  }

}
