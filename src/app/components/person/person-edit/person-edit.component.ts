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
  constructor(private _form: FormBuilder,
    private _personService: PersonService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._personService.getPerson(p.get('id')).subscribe((singlePerson: Person) => {
        this.person = singlePerson;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm(){
    this.editPersonForm = this._form.group({
      FullName: new FormControl(this.person.FullName),
      Address: new FormControl(this.person.Address),
      Phone: new FormControl(this.person.Phone),
      Email: new FormControl(this.person.Phone),
      DoggoName: new FormControl(this.person.DoggoNames)
    });
  }
  onSubmit(form){
    const updatePerson: Person = {
      FullName: form.value.FullName,
      Address: form.value.Address,
      Phone: form.value.Phone,
      Email: form.value.Email,
      DoggoNames: form.value.DoggoName
    };
    this._personService.updatePerson(updatePerson).subscribe(d => {
      this._router.navigate(['/person']);
    });
  }
}
