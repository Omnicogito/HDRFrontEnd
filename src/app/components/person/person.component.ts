import { Component, OnInit } from '@angular/core';
import { humanService } from '../../services/human.service';
import { human } from 'src/app/models/human';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-human-index',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.scss']
})
export class humanComponent implements OnInit {

  constructor(private humanService: humanService) { }

  columnNames = [ 'FullName', 'Address', 'Phone', 'Email', 'DoggoName', 'buttons'];

  dataSource: MatTableDataSource<human>;

  ngOnInit() {
    this.humanService.gethumans().subscribe((human: human[]) => {
      this.dataSource = new MatTableDataSource<human>(human);
    });
  }
}
