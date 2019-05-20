import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private form: FormBuilder, private authService: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.registerForm = this.form.group({
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  onSubmit() {
    this.authService
    .register(this.registerForm.value)
    .subscribe( () => this.authService.login(this.registerForm.value));
  }

}
