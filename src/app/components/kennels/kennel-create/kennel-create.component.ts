import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { KennelService } from 'src/app/services/kennel.service';
import { Router } from '@angular/router';
import { Doggo } from 'src/app/models/doggo';
import { DoggoService } from 'src/app/services/doggo.service';


@Component({
  selector: 'app-kennel-create',
  templateUrl: './kennel-create.component.html',
  styleUrls: ['./kennel-create.component.scss']
})
export class KennelCreateComponent implements OnInit {
  doggos: Doggo[];
  kennelForm: FormGroup;
  size: string[] = [
    'small', 'medium', 'large', 'Xlarge'
  ];

  constructor(private kennelService: KennelService, private doggoService: DoggoService, private form: FormBuilder, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.kennelForm = this.form.group({
      KennelNumber: new FormControl(),
      Size: new FormControl(),
      Occupied: new FormControl(),
      DoggoID: new FormControl(),
      // DoggoName: new FormControl(),
      // FullName: new FormControl(),
    });
  }

  onSubmit() {
    if (this.kennelForm.value.Occupied !== true) { this.kennelForm.value.Occupied = false; }
    this.doggoService.getDoggos().subscribe((doggos: Doggo[]) => {
      this.doggos = doggos; });
    this.kennelService.createKennel(this.kennelForm.value)
    .subscribe(data => {this.router.navigate(['/kennel']);
  });
  }
}
