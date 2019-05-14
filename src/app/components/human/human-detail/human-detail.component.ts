import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { human } from 'src/app/models/human';
import { humanService } from 'src/app/services/human.service';
@Component({
  selector: 'app-human-detail',
  templateUrl: './human-detail.component.html',
  styleUrls: ['./human-detail.component.scss']
})
export class humanDetailComponent implements OnInit {

  human: human;

  constructor(private _activatedRoute: ActivatedRoute, private _humanService: humanService) { }
  
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._humanService.gethuman(routeData.get('id')).subscribe((singlehuman: human) => {
        this.human = singlehuman;
      });
      console.log(routeData);
    });
  }

}
