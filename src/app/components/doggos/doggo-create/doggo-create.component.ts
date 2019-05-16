import { Component, OnInit } from '@angular/core';
import { DoggoService } from '../../../services/doggo.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HumanService } from 'src/app/services/human.service';
import { Human } from 'src/app/models/human';

// export interface Size {
//   value: number;
//   viewValue: string;
// }

@Component({
  selector: 'app-doggo-create',
  templateUrl: './doggo-create.component.html',
  styleUrls: ['./doggo-create.component.scss']
})

export class DoggoCreateComponent implements OnInit {
  doggoForm: FormGroup;
  humans: Human[];
  // selectedValue: string;

  size: string[] = [
    'small','medium','large','Xlarge'
  ]
  

  constructor(private doggoService: DoggoService, private form: FormBuilder, private router: Router, private humanService: HumanService) {
    this.createForm();
  }




  ngOnInit() {

    this.humanService.getHumans().subscribe((humans: Human[]) => {
      this.humans = humans; });
    }

  createForm() {
        this.doggoForm = this.form.group({
          DoggoName: new FormControl(),
          Breed: new FormControl(),
          Size: new FormControl(),
          HumanID: new FormControl(),
          FullName: new FormControl(),
          DoggoFriendly: new FormControl(),
          PeopleFriendly: new FormControl(),
          SpecialNeeds: new FormControl(),
          Age: new FormControl(),
          Image: new FormControl(),
          selectedValue: new FormControl(),
        });
      }
  // this.viewClient.setValue({
  //   trueClient: this.data.trueClient
  // });

  onSubmit() {
        if (this.doggoForm.value.DoggoFriendly !== true) { }{ this.doggoForm.value.DoggoFriendly = false; }

        if (this.doggoForm.value.PeopleFriendly !== true) { this.doggoForm.value.PeopleFriendly = false; }

        

        this.doggoService.createDoggo(this.doggoForm.value).subscribe(data => {
      this.router.navigate(['/doggo']);
    });
  }

}
