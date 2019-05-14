import { Component, OnInit } from '@angular/core';
import { Kennel } from 'src/app/models/kennel';
import { ActivatedRoute, RouterPreloader } from '@angular/router';
import { KennelService } from 'src/app/services/kennel.service';

@Component({
  selector: 'app-kennel-detail',
  templateUrl: './kennel-detail.component.html',
  styleUrls: ['./kennel-detail.component.scss']
})
export class KennelDetailComponent implements OnInit {

  kennel: Kennel;

  constructor(private activatedRoute: ActivatedRoute, private kennelService: KennelService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.kennelService.getKennel(routeData.get('id')).subscribe((singleKennel: Kennel) => {this.kennel = singleKennel;
      });
    });
  }

}
