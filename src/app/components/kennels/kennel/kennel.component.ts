import { Component, OnInit } from '@angular/core';
import { KennelService } from '../../../services/kennel.service';
import {Kennel, Size } from '../../../models/kennel';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-kennel-index',
  templateUrl: './kennel.component.html',
  styleUrls: ['./kennel.component.scss']
})

export class KennelComponent implements OnInit {
  kennel: Kennel;
  size: string[] = [
    'small', 'medium', 'large', 'Xlarge'
  ];
  enumDisplay: string;

  constructor(private kennelService: KennelService) { }

  columnNames = ['details', 'KennelNumber', 'Size', 'Occupied', 'DoggoID', 'buttons'];

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
