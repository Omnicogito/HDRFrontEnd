import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', Validators.required],
      interest: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.http
       .post('https://formspree.io/your@email.com', {
         name: this.messageForm.value.name,
         interest: `${this.messageForm.value.interest}`,
         email: this.messageForm.value.email,
         message: this.messageForm.value.message
       });
  }
  ngOnInit() {
  }

}
