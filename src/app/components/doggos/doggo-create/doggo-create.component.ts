import { Component, OnInit } from '@angular/core';
import { DoggoService } from '../../../services/doggo.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doggo-create',
  templateUrl: './doggo-create.component.html',
  styleUrls: ['./doggo-create.component.scss']
})
export class DoggoCreateComponent implements OnInit {

  doggoForm: FormGroup;

  constructor(private doggoService: DoggoService, private form: FormBuilder, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.doggoForm = this.form.group({
      Name: new FormControl(),
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

  onSubmit() {
    this.doggoService.createDoggo(this.doggoForm.value).subscribe(data => {this.router.navigate(['/doggos']);
    });
  }

}
