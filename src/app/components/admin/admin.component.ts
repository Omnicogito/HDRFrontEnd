import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KennelService } from 'src/app/services/kennel.service';
import { Kennel, Size } from 'src/app/models/kennel';

import { MatTableDataSource, MatDialog } from '@angular/material';
import { KennelDeleteComponent } from 'src/app/components/kennels/kennel-delete/kennel-delete.component';
import { KennelCreateComponent } from 'src/app/components/kennels/kennel-create/kennel-create.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  kennel: Kennel;
  size: string[] = [
    'small', 'medium', 'large', 'Xlarge'
  ];
  enumDisplay: string;

  constructor(private kennelService: KennelService, private ar: ActivatedRoute, private router: Router) { }

  columnNames = ['details', 'KennelNumber', 'Size', 'Occupied', 'DoggoID', 'buttons']

  dataSource: MatTableDataSource<Kennel>;

  ngOnInit() {
    this.kennelService.getKennels().subscribe((kennels: Kennel[]) => {this.dataSource = new MatTableDataSource<Kennel>(kennels);
      // tslint:disable-next-line: forin
      // tslint:disable-next-line: align
            for (const kennel in kennels) {
              this.enumDisplay = Size[this.dataSource.data[kennel].Size];
              this.dataSource.data[kennel].Size = this.enumDisplay;
            }
          });
  }

}
