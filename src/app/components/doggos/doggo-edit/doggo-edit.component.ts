import { Component, OnInit } from '@angular/core';
import { Doggo } from 'src/app/models/doggo';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DoggoService } from 'src/app/services/doggo.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Size {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-doggo-edit',
  templateUrl: './doggo-edit.component.html',
  styleUrls: ['./doggo-edit.component.scss']
})
export class DoggoEditComponent implements OnInit {

  doggo: Doggo;
  selectedValue: string;

  sizes: Size[] = [
    {value: 0, viewValue: 'Small'},
    {value: 1, viewValue: 'Medium'},
    {value: 2, viewValue: 'Large'},
    {value: 3, viewValue: 'X-Large'},
  ];



  editDoggoForm: FormGroup;
  constructor(private form: FormBuilder,
              private doggoService: DoggoService,
              private ar: ActivatedRoute,
              private router: Router) {

    this.ar.paramMap.subscribe(p => {
      this.doggoService.getDoggo(p.get('id')).subscribe((singledoggo: Doggo) => {
        this.doggo = singledoggo;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editDoggoForm = this.form.group({
      DoggoID: new FormControl(this.doggo.DoggoID),
      DoggoName: new FormControl(this.doggo.DoggoName),
      Breed: new FormControl(this.doggo.Breed),
      Size: new FormControl(this.doggo.Size),
      DoggoFriendly: new FormControl(this.doggo.DoggoFriendly),
      PeopleFriendly: new FormControl(this.doggo.PeopleFriendly),
      SpecialNeeds: new FormControl(this.doggo.SpecialNeeds),
      Age: new FormControl(this.doggo.Age),
      Image: new FormControl(this.doggo.Image),
    });
  }
  onSubmit(form) {
    if (this.editDoggoForm.value.DoggoFriendly !== true) { } { this.editDoggoForm.value.DoggoFriendly = false; }

    if (this.editDoggoForm.value.PeopleFriendly !== true) { this.editDoggoForm.value.PeopleFriendly = false; }

    const updatedoggo: Doggo = {
      DoggoID: form.value.DoggoID,
      DoggoName: form.value.DoggoName,
      Breed: form.value.Breed,
      Size: form.value.Size,
      DoggoFriendly: form.value.DoggoFriendly,
      PeopleFriendly: form.value.PeopleFriendly,
      SpecialNeeds: form.value.SpecialNeeds,
      Age: form.value.Age,
      Image: form.value.Image,
    };



    this.doggoService.updateDoggo(updatedoggo).subscribe(d => {
      this.router.navigate(['/doggo']);
    });
  }
}
