import { Component, OnInit } from '@angular/core';
import { HumanService } from '../../services/human.service';
import { Human } from 'src/app/models/human';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-human-index',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.scss']
})
export class HumanComponent implements OnInit {

  constructor(private humanService: HumanService) { }

  columnNames = [ 'details', 'FullName', 'Address', 'Phone', 'Email', 'DoggoName', 'buttons'];

  dataSource: MatTableDataSource<Human>;

  ngOnInit() {
    this.humanService.getHumans().subscribe((human: Human[]) => {
      this.dataSource = new MatTableDataSource<Human>(human);
    });
  }
}
