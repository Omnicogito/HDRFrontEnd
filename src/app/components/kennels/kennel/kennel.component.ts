import { Component, OnInit } from '@angular/core';
import { KennelService } from '../../../services/kennel.service';
import {Kennel} from '../../../models/kennel';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-kennel',
  templateUrl: './kennel.component.html',
  styleUrls: ['./kennel.component.scss']
})
export class KennelComponent implements OnInit {

  constructor(private kennelService: KennelService) { }

  columnNames = ['Kennel Number','Size','Occupied','Doggo Name','Owner Name'];

  dataSource: MatTableDataSource<Kennel>;

  ngOnInit() {
    this.kennelService.getKennels().subscribe((kennels: Kennel[])=>
    {this.dataSource=new MatTableDataSource<Kennel>(kennels);});
  }

}
