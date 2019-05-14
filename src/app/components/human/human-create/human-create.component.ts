import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { humanService } from 'src/app/services/human.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-human-create',
  templateUrl: './human-create.component.html',
  styleUrls: ['./human-create.component.scss']
})
export class humanCreateComponent implements OnInit {

  humanForm: FormGroup;

  constructor(private humanService: humanService, private form: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.humanForm = this.form.group({
      FullName: new FormControl(),
      Address: new FormControl(),
      Phone: new FormControl(),
      Email: new FormControl(),
      DoggoName: new FormControl(),
    });
  }

  onSubmit() {
    this.humanService.createhuman(this.humanForm.value).subscribe(data => {
      this.router.navigate(['/human']);
    });
  }
}
