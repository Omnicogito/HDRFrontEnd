import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { DoggoComponent } from './components/doggos/doggo/doggo.component';
import { KennelComponent } from './components/kennels/kennel/kennel.component';
import { RegisterComponent } from './components/register/register.component';
import { DoggoCreateComponent } from './components/doggos/doggo-create/doggo-create.component';
import { DoggoDetailComponent } from './components/doggos/doggo-detail/doggo-detail.component';
import { DoggoEditComponent } from './components/doggos/doggo-edit/doggo-edit.component';
import { DoggoDeleteComponent } from './components/doggos/doggo-delete/doggo-delete.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'person', component: PersonComponent},
  {path: 'doggo', children: [
    { path: '', component: DoggoComponent },
    { path: 'create', component: DoggoCreateComponent},
    { path: 'detail/:id', component: DoggoDetailComponent},
    { path: 'edit/:id', component: DoggoEditComponent},
    { path: 'delete/:id', component: DoggoDeleteComponent}
  ]},
  {path: 'kennel', component: KennelComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
