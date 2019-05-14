import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Human } from 'src/app/models/human';
import { HumanService } from 'src/app/services/human.service';
@Component({
  selector: 'app-human-detail',
  templateUrl: './human-detail.component.html',
  styleUrls: ['./human-detail.component.scss']
})
export class HumanDetailComponent implements OnInit {

  human: Human;

  constructor(private _activatedRoute: ActivatedRoute, private _humanService: HumanService) { }
  
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._humanService.gethuman(routeData.get('id')).subscribe((singlehuman: Human) => {
        this.human = singlehuman;
      });
      console.log(routeData);
    });
  }

}
