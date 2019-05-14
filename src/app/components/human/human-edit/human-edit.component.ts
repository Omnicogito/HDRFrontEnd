import { Component, OnInit } from '@angular/core';
import { Human } from 'src/app/models/human';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HumanService } from 'src/app/services/human.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-human-edit',
  templateUrl: './human-edit.component.html',
  styleUrls: ['./human-edit.component.scss']
})
export class HumanEditComponent implements OnInit {

  human: Human;

  edithumanForm: FormGroup;
  constructor(private form: FormBuilder,
              private humanService: HumanService,
              private ar: ActivatedRoute,
              private router: Router) {

    this.ar.paramMap.subscribe(p => {
      this.humanService.getHuman(p.get('id')).subscribe((singlehuman: Human) => {
        this.human = singlehuman;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.edithumanForm = this.form.group({
      HumanID: new FormControl(this.human.HumanID),
      FullName: new FormControl(this.human.FullName),
      Address: new FormControl(this.human.Address),
      Phone: new FormControl(this.human.Phone),
      Email: new FormControl(this.human.Phone),
      DoggoName: new FormControl(this.human.DoggoName)
    });
  }
  onSubmit(form) {
    const updatehuman: Human = {
      HumanID: form.value.HumanID,
      FullName: form.value.FullName,
      Address: form.value.Address,
      Phone: form.value.Phone,
      Email: form.value.Email,
      DoggoName: form.value.DoggoName
    };
    this.humanService.updateHuman(updatehuman).subscribe(d => {
      this.router.navigate(['/human']);
    });
  }
}
