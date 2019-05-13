import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.scss']
})
export class PersonDeleteComponent implements OnInit {
  person: Person;

  constructor(private personService: PersonService, private ar: ActivatedRoute, private router: Router) {
    this.ar.paramMap.subscribe(p => {
      this.personService.getPerson(p.get('id')).subscribe((singlePerson: Person) => {
        this.person = singlePerson;
      });
    });
   }

  ngOnInit() {
  }
onDelete() {
  this.personService.deletePerson(this.person.HumanId).subscribe(() => {
    this.router.navigate(['/human']);
  });
}
}
