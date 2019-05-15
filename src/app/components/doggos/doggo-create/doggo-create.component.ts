import { Component, OnInit } from '@angular/core';
import { DoggoService } from '../../../services/doggo.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HumanService } from 'src/app/services/human.service';
import { Human } from 'src/app/models/human';

export interface Human{
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-doggo-create',
  templateUrl: './doggo-create.component.html',
  styleUrls: ['./doggo-create.component.scss']
})

export class SelectValues{
selectedValue: string;

humans: Human[] = [

]
}

export class DoggoCreateComponent implements OnInit {
  doggoForm: FormGroup;
// humanName: string;
// humanID: number;
  constructor(private doggoService: DoggoService, private form: FormBuilder, private router: Router, private humanService: HumanService) {
    this.createForm();
   }

  ngOnInit() 
  {
  //   this.humanService.getHumans().subscribe((humans:Human[])=>{
  //   humans.forEach(human => human.FullName == this.humanName ,this.humanID = human.HumanID)
  // });
  }

  createForm() {
    this.doggoForm = this.form.group({
      DoggoName: new FormControl(),
      Breed: new FormControl(),
      Size: new FormControl(),
      HumanID: new FormControl(),
      DoggoFriendly: new FormControl(),
      PeopleFriendly: new FormControl(),
      SpecialNeeds: new FormControl(),
      Age: new FormControl(),
      Image: new FormControl(),
    });
  }
  // this.viewClient.setValue({
  //   trueClient: this.data.trueClient
  // });
  
  onSubmit() {
    if(this.doggoForm.value.DoggoFriendly != true){this.doggoForm.value.DoggoFriendly = false};
    
    if(this.doggoForm.value.PeopleFriendly != true){this.doggoForm.value.PeopleFriendly = false};

    this.doggoService.createDoggo(this.doggoForm.value).subscribe(data => {this.router.navigate(['/doggo']);
  });
}

}
