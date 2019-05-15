import { Component, OnInit } from '@angular/core';
import { HumanService } from 'src/app/services/human.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Human } from 'src/app/models/human';

@Component({
  selector: 'app-human-delete',
  templateUrl: './human-delete.component.html',
  styleUrls: ['./human-delete.component.scss']
})
export class HumanDeleteComponent implements OnInit {
  human: Human;


  constructor(private humanService: HumanService, private ar: ActivatedRoute, private router: Router) {
    this.ar.paramMap.subscribe(p => {
      this.humanService.getHuman(p.get('id')).subscribe((singlehuman: Human) => {
        this.human = singlehuman;

      });
    });
  }

  ngOnInit() {
  }

  toDelete() {
    this.humanService.deleteHuman(this.human.HumanID).subscribe(() => {
      this.router.navigate(['/human']);
    });
  }
}
