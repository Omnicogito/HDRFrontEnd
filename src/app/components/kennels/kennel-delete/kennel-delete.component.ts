import { Component, OnInit } from '@angular/core';
import { KennelService } from 'src/app/services/kennel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Kennel } from 'src/app/models/kennel';

@Component({
  selector: 'app-kennel-delete',
  templateUrl: './kennel-delete.component.html',
  styleUrls: ['./kennel-delete.component.scss']
})
export class KennelDeleteComponent implements OnInit {

  kennel: Kennel;

  constructor(private kennelService: KennelService, private ar: ActivatedRoute, private router: Router) {
    this.ar.paramMap.subscribe(p => {
      this.kennelService.getKennel(p.get('id')).subscribe((singleKennel: Kennel) => {
        this.kennel = singleKennel;
      });
    });
  }

  toDelete(){
    this.kennelService.removeKennel(this.kennel.KennelID).subscribe(() => {
      this.router.navigate(['/kennel']);
    });
  }
  ngOnInit() {
  }

}
