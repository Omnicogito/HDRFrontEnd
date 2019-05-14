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


  constructor(private humanService: humanService, private ar: ActivatedRoute, private router: Router) {
    this.ar.paramMap.subscribe(p => {
      this.humanService.gethuman(p.get('id')).subscribe((singlehuman: human) => {
        this.human = singlehuman;

      });
    });
   }

  ngOnInit() {
  }

onDelete(){
  this.humanService.deletehuman(this.human.HumanId).subscribe(() => {
    this.router.navigate(['/human']);
  });
}
}
