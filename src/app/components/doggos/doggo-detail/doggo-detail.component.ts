import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doggo } from 'src/app/models/doggo';
import { DoggoService } from 'src/app/services/doggo.service';

@Component({
  selector: 'app-doggo-detail',
  templateUrl: './doggo-detail.component.html',
  styleUrls: ['./doggo-detail.component.scss']
})
export class DoggoDetailComponent implements OnInit {

  doggo: Doggo;

  constructor(private activatedRoute: ActivatedRoute, private doggoService: DoggoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.doggoService.getDoggo(routeData.get('id')).subscribe((singleDoggo: Doggo) => {this.doggo = singleDoggo;
      });
    });
  }

}
