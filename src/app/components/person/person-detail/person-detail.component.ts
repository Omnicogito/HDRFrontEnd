import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  person: Person;

  constructor(private _activatedRoute: ActivatedRoute, private _personService: PersonService) { }
  
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._personService.getPersons(routeData.get('id')).subscribe((singlePerson: Person) => {
        this.person = singlePerson;
      });
      console.log(routeData);
    });
  }

}
