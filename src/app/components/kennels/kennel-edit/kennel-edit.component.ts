import { Component, OnInit } from '@angular/core';
import { Kennel } from 'src/app/models/kennel';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { KennelService } from 'src/app/services/kennel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HumanService } from 'src/app/services/human.service';
import { DoggoService } from '../../../services/doggo.service';
import { Human } from 'src/app/models/human';
import {Doggo} from 'src/app/models/doggo';

@Component({
  selector: 'app-kennel-edit',
  templateUrl: './kennel-edit.component.html',
  styleUrls: ['./kennel-edit.component.scss']
})
export class KennelEditComponent implements OnInit {
  humans: Human[];
  doggos: Doggo[];
  kennel: Kennel;
  size: string[] = [
    'small','medium','large','Xlarge'
  ]

  editKennelForm: FormGroup;
  constructor(private form: FormBuilder,
              private kennelService: KennelService,
              private ar: ActivatedRoute,
              private router: Router,
              private doggoService: DoggoService,
              private humanService: HumanService) {
    this.ar.paramMap.subscribe(p => {
      this.kennelService.getKennel(p.get('id')).subscribe((singleKennel: Kennel) => {
        this.kennel = singleKennel;
        this.createForm();
      });
    });
   }

  ngOnInit() {
    this.humanService.getHumans().subscribe((humans: Human[]) => {
      this.humans = humans; });
      this.doggoService.getDoggos().subscribe((doggos: Doggo[]) => {
        this.doggos = doggos; });
  }

  createForm() {
    this.editKennelForm = this.form.group({
      KennelID: new FormControl(this.kennel.KennelID),
      KennelNumber: new FormControl(this.kennel.KennelNumber),
      Size: new FormControl(this.kennel.Size),
      Occupied: new FormControl(this.kennel.Occupied),
      DoggoID: new FormControl(this.kennel.DoggoID),
      DoggoName: new FormControl(this.kennel.DoggoName),
      HumanID: new FormControl(this.kennel.HumanID),
      FullName: new FormControl(this.kennel.FullName)
    });
  }

  onSubmit(form) {
    if (this.editKennelForm.value.Occupied !== true) { }{ this.editKennelForm.value.Occupied = false; }

    const updateKennel: Kennel = {
      KennelID: form.value.KennelID,
      KennelNumber: form.value.KennelNumber,
      Size: form.value.Size,
      Occupied: form.value.Occupied,
      DoggoID: form.value.DoggoID,
      DoggoName: form.value.DoggoName,
      FullName: form.value.FullName,
      HumanID: form.value.HumanID,

    };
    this.kennelService.updateKennel(updateKennel).subscribe(d => {
      this.router.navigate(['/kennel']);
    });
  }

}
