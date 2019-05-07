import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.scss']
})
export class PersonDeleteComponent implements OnInit {

  constructor(private _personService: PersonService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._personService.getPersons(p.get('id')).subscribe((singlePerson: Person) => {
        this.person = singlePerson;
      });
    });
   }

  ngOnInit() {
  }
onDelete(){
  this._personService.deletePerson(this.person.FullName).subscribe(() => {
    this._router.navigate(['/person']);
  });
}
}
