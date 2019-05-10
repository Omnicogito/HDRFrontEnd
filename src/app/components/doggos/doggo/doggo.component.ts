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

  columnNames = ['details','DoggoName' , 'Breed' , 'Size' , 'HumanID' , 'DoggoFriendly' , 'PeopleFriendly' , 'SpecialNeeds' , 'Age' , 'Image', 'buttons'];

  dataSource: MatTableDataSource<Doggo>;

  ngOnInit() {
    this.doggoService.getDoggos().subscribe((doggos: Doggo[]) => {this.dataSource = new MatTableDataSource<Doggo>(doggos);
    });
  }

}
