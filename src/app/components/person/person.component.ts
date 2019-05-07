import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from 'src/app/models/person';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-index',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private _personService: PersonService) { }

  columnNames = ['HumanId', 'FullName', 'Address', 'Phone', 'Email', 'DoggoName'];

  dataSource: MatTableDataSource<Person>;

  ngOnInit() {
    this._personService.getPersons().subscribe((person: Person[]) => {
      this.dataSource = new MatTableDataSource<Person>(person);
    });
  }
}
