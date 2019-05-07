import { Component, OnInit } from '@angular/core';
import { DoggoService } from '../../../services/doggo.service';
import { Doggo } from '../../../models/doggo';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-doggo',
  templateUrl: './doggo.component.html',
  styleUrls: ['./doggo.component.scss']
})
export class DoggoComponent implements OnInit {

  constructor(private doggoService: DoggoService) { }

  columnNames = ['Doggo Name' , 'Breed' , 'Size' , 'Human' , ' Doggo Friendly' , 'People Friendly' , 'Special Needs' , 'Age' , 'Doggo Pic'];

  dataSource: MatTableDataSource<Doggo>;

  ngOnInit() {
    this.doggoService.getDoggos().subscribe((doggos: Doggo[]) => {this.dataSource = new MatTableDataSource<Doggo>(doggos);
    });
  }

}
