import { Component, OnInit } from '@angular/core';
import { Doggo } from 'src/app/models/doggo';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DoggoService } from 'src/app/services/doggo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-doggo-edit',
  templateUrl: './doggo-edit.component.html',
  styleUrls: ['./doggo-edit.component.scss']
})
export class DoggoEditComponent implements OnInit {

  doggo: Doggo;

  editDoggoForm: FormGroup;
  constructor(private form: FormBuilder,
              private doggoService: DoggoService,
              private ar: ActivatedRoute,
              private router: Router) {
      this.ar.paramMap.subscribe(p => {
        this.doggoService.getDoggo(p.get('id')).subscribe((singleDoggo: Doggo) => {
          this.doggo = singleDoggo;
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
      HumanID: new FormControl(this.doggo.HumanID),
      DoggoFriendly: new FormControl(this.doggo.DoggoFriendly),
      PeopleFriendly: new FormControl(this.doggo.PeopleFriendly),
      SpecialNeeds: new FormControl(this.doggo.SpecialNeeds),
      Age: new FormControl(this.doggo.Age),
      Image: new FormControl(this.doggo.Image)
    });
  }

  onSubmit(form) {
    const updateDoggo: Doggo = {
      DoggoID: form.value.DoggoID,
      DoggoName: form.value.DoggoName,
      Breed: form.value.Breed,
      Size: form.value.Size,
      HumanID: form.value.HumanID,
      DoggoFriendly: form.value.DoggoFriendly,
      PeopleFriendly: form.value.PeopleFriendly,
      SpecialNeeds: form.value.SpecialNeeds,
      Age: form.value.Age,
      Image: form.value.Image
    };
    this.doggoService.updateDoggo(updateDoggo).subscribe(d => {
      this.router.navigate(['/doggo']);
    });
  }

}
