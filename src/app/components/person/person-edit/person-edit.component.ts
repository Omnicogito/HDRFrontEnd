import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  person: Person;

  editPersonForm: FormGroup;
  constructor(private form: FormBuilder,
              private personService: PersonService,
              private ar: ActivatedRoute,
              private router: Router) {

    this.ar.paramMap.subscribe(p => {
      this.personService.getPerson(p.get('id')).subscribe((singlePerson: Person) => {
        this.person = singlePerson;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editPersonForm = this.form.group({
      HumanID: new FormControl(this.person.HumanId),
      FullName: new FormControl(this.person.FullName),
      Address: new FormControl(this.person.Address),
      Phone: new FormControl(this.person.Phone),
      Email: new FormControl(this.person.Phone),
      DoggoName: new FormControl(this.person.DoggoName)
    });
  }
  onSubmit(form) {
    const updatePerson: Person = {
      HumanId: form.value.HumanID,
      FullName: form.value.FullName,
      Address: form.value.Address,
      Phone: form.value.Phone,
      Email: form.value.Email,
      DoggoName: form.value.DoggoName
    };
    this.personService.updatePerson(updatePerson).subscribe(d => {
      this.router.navigate(['/person']);
    });
  }
}
