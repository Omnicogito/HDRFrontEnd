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

  constructor(private activatedRoute: ActivatedRoute, private humanService: HumanService) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.humanService.getHuman(routeData.get('id')).subscribe((singlehuman: Human) => {
        this.human = singlehuman;
      });
      console.log(routeData);
    });
  }

}
