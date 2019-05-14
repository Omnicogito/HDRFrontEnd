import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { humanComponent } from './components/human/human.component';
import { DoggoComponent } from './components/doggos/doggo/doggo.component';
import { KennelComponent } from './components/kennels/kennel/kennel.component';
import { RegisterComponent } from './components/register/register.component';
import { DoggoCreateComponent } from './components/doggos/doggo-create/doggo-create.component';
import { DoggoDetailComponent } from './components/doggos/doggo-detail/doggo-detail.component';
import { DoggoEditComponent } from './components/doggos/doggo-edit/doggo-edit.component';
import { DoggoDeleteComponent } from './components/doggos/doggo-delete/doggo-delete.component';

import { humanCreateComponent } from './components/human/human-create/human-create.component';
import { humanEditComponent } from './components/human/human-edit/human-edit.component';
import { humanDetailComponent } from './components/human/human-detail/human-detail.component';
import { humanDeleteComponent } from './components/human/human-delete/human-delete.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'human', children:[
    { path: '', component: humanComponent },
    { path: 'create', component: humanCreateComponent},
    { path: 'edit/:id', component: humanEditComponent},
    { path: 'detail/:id', component: humanDetailComponent},
    { path: 'delete/:id', component: humanDeleteComponent}

import { KennelCreateComponent } from './components/kennels/kennel-create/kennel-create.component';
import { KennelDetailComponent } from './components/kennels/kennel-detail/kennel-detail.component';
import { KennelEditComponent } from './components/kennels/kennel-edit/kennel-edit.component';
import { KennelDeleteComponent } from './components/kennels/kennel-delete/kennel-delete.component';


  {path: 'doggo', children: [
    { path: '', component: DoggoComponent },
    { path: 'create', component: DoggoCreateComponent},
    { path: 'detail/:id', component: DoggoDetailComponent},
    { path: 'edit/:id', component: DoggoEditComponent},
    { path: 'delete/:id', component: DoggoDeleteComponent}
  ]},

  {path: 'kennel', children: [
    { path: '', component: KennelComponent },
    { path: 'create', component: KennelCreateComponent},
    { path: 'detail/:id', component: KennelDetailComponent},
    { path: 'edit/:id', component: KennelEditComponent},
    { path: 'delete/:id', component: KennelDeleteComponent}
  ]},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
