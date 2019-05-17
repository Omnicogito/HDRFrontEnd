import { Component, OnInit } from '@angular/core';
import { KennelService } from '../../../services/kennel.service';
import {Kennel} from '../../../models/kennel';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-kennel-index',
  templateUrl: './kennel.component.html',
  styleUrls: ['./kennel.component.scss']
})
export class KennelComponent implements OnInit {
  size: string[] = [
    'small', 'medium', 'large', 'Xlarge'
  ];

  constructor(private kennelService: KennelService) { }

  columnNames = ['details', 'KennelNumber', 'Size', 'Occupied', 'DoggoName', 'DoggoID', 'buttons'];

  dataSource: MatTableDataSource<Kennel>;

  ngOnInit() {
    this.kennelService.getKennels().subscribe((kennels: Kennel[]) => {this.dataSource = new MatTableDataSource<Kennel>(kennels);
    });
  }

}
