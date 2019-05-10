import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from 'src/app/models/person';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-person-index',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }

  columnNames = [ 'FullName', 'Address', 'Phone', 'Email', 'DoggoName', 'buttons'];

  dataSource: MatTableDataSource<Person>;

  ngOnInit() {
    this.personService.getPersons().subscribe((person: Person[]) => {
      this.dataSource = new MatTableDataSource<Person>(person);
    });
  }
}
