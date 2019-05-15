import { Component, OnInit } from '@angular/core';
import { DoggoService } from 'src/app/services/doggo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doggo } from 'src/app/models/doggo';

@Component({
  selector: 'app-doggo-delete',
  templateUrl: './doggo-delete.component.html',
  styleUrls: ['./doggo-delete.component.scss']
})
export class DoggoDeleteComponent implements OnInit {
  doggo: Doggo;

  constructor(private doggoService: DoggoService, private ar: ActivatedRoute, private router: Router) {
    this.ar.paramMap.subscribe(p => {
      this.doggoService.getDoggo(p.get('id')).subscribe((singleDoggo: Doggo) => {
        this.doggo = singleDoggo;
      });
    });
   }

   ngOnInit() {
  }

  onDelete() {
    this.doggoService.removeDoggo(this.doggo.DoggoID).subscribe(() => {
      this.router.navigate(['/doggo']);
    });
  }
}
