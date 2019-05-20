import { Component, OnInit } from '@angular/core';
import { DoggoService } from '../../../services/doggo.service';
import { Doggo, Size} from '../../../models/doggo';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-doggo',
  templateUrl: './doggo.component.html',
  styleUrls: ['./doggo.component.scss']
})
export class DoggoComponent implements OnInit {

  enumDisplay: string;
  doggo: Doggo;
  constructor(private doggoService: DoggoService) { }

// tslint:disable-next-line: max-line-length
  columnNames = ['details', 'DoggoName' , 'Breed' , 'Size' , 'HumanID' , 'DoggoFriendly' , 'PeopleFriendly' , 'SpecialNeeds' , 'Age' , 'Image', 'buttons'];

  dataSource: MatTableDataSource<Doggo>;

  ngOnInit() {
    this.doggoService.getDoggos().subscribe((doggos: Doggo[]) => {this.dataSource = new MatTableDataSource<Doggo>(doggos);
// tslint:disable-next-line: forin
                                                                  for (const doggo in doggos) {
        this.enumDisplay = Size[this.dataSource.data[doggo].Size];
        this.dataSource.data[doggo].Size = this.enumDisplay;
      }
    });
  }

}
