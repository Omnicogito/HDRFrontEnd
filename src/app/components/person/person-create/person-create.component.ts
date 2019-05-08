import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {

  personForm: FormGroup;

  constructor(private personService: PersonService, private form: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.personForm = this.form.group({
      FullName: new FormControl(),
      Address: new FormControl(),
      Phone: new FormControl(),
      Email: new FormControl(),
      DoggoName: new FormControl(),
    });
  }

  onSubmit() {
    this.personService.createPerson(this.personForm.value).subscribe(data => {
      this.router.navigate(['/person']);
    });
  }
}
