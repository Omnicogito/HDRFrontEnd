import { Component, OnInit } from '@angular/core';
import { humanService } from 'src/app/services/human.service';
import { ActivatedRoute, Router } from '@angular/router';
import { human } from 'src/app/models/human';

@Component({
  selector: 'app-human-delete',
  templateUrl: './human-delete.component.html',
  styleUrls: ['./human-delete.component.scss']
})
export class humanDeleteComponent implements OnInit {
  human: human;

  constructor(private _humanService: humanService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._humanService.gethuman(p.get('id')).subscribe((singlehuman: human) => {
        this.human = singlehuman;
      });
    });
   }

  ngOnInit() {
  }
onDelete(){
  this._humanService.deletehuman(this.human.HumanId).subscribe(() => {
    this._router.navigate(['/human']);
  });
}
}
