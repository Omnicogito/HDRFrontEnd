import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { KennelService } from 'src/app/services/kennel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kennel-create',
  templateUrl: './kennel-create.component.html',
  styleUrls: ['./kennel-create.component.scss']
})
export class KennelCreateComponent implements OnInit {

  kennelForm: FormGroup;
  size: string[] = [
    'small','medium','large','Xlarge'
  ]

  constructor(private kennelService: KennelService, private form: FormBuilder, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.kennelForm = this.form.group({
      KennelNumber: new FormControl(),
      Size: new FormControl(),
      Occupied: new FormControl(),
      DoggoID: new FormControl(),
      // DoggoName: new FormControl(),
      // FullName: new FormControl(),
    });
  }

  onSubmit(){
    if (this.kennelForm.value.Occupied !== true) { this.kennelForm.value.Occupied = false; }
    this.kennelService.createKennel(this.kennelForm.value)
    .subscribe(data => {this.router.navigate(['/kennel']);
  });
  }
}
